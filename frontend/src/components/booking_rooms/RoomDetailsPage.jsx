import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const RoomDetailsPage = () => {
  const { roomId } = useParams(); // Extract roomId from URL
  const navigate = useNavigate();

  // State Management
  const [roomDetails, setRoomDetails] = useState(null);
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalGuests, setTotalGuests] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch room details and user profile on mount
  useEffect(() => {
    const fetchRoomAndUserData = async () => {
      setIsLoading(true);
      try {
        const [roomResponse, userProfile] = await Promise.all([
          ApiService.getRoomById(roomId),
          ApiService.getUserProfile(),
        ]);
        setRoomDetails(roomResponse.room);
        setUserId(userProfile.user.id);
      } catch (error) {
        setError(error.response?.data?.message || error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRoomAndUserData();
  }, [roomId]);

  // Calculate booking details
  const calculateBooking = () => {
    if (!checkInDate || !checkOutDate) {
      setErrorMessage('Please select both check-in and check-out dates.');
      clearErrorAfterDelay();
      return false;
    }

    if (isNaN(numAdults) || numAdults < 1 || isNaN(numChildren) || numChildren < 0) {
      setErrorMessage('Please enter valid numbers for adults (min 1) and children (min 0).');
      clearErrorAfterDelay();
      return false;
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);
    const totalDays = Math.round(Math.abs((endDate - startDate) / oneDay)) + 1;
    const totalGuests = numAdults + numChildren;
    const totalPrice = roomDetails.roomPrice * totalDays;

    setTotalGuests(totalGuests);
    setTotalPrice(totalPrice);
    return true;
  };

  // Handle booking confirmation
  const handleConfirmBooking = () => {
    if (calculateBooking()) {
      setShowDatePicker(false); // Optionally hide date picker after confirmation
    }
  };

  // Submit booking to API
  const acceptBooking = async () => {
    if (!totalPrice) {
      setErrorMessage('Please confirm booking details first.');
      clearErrorAfterDelay();
      return;
    }

    try {
      const startDate = new Date(checkInDate);
      const endDate = new Date(checkOutDate);
      const formattedCheckInDate = startDate.toISOString().split('T')[0];
      const formattedCheckOutDate = endDate.toISOString().split('T')[0];

      const booking = {
        checkInDate: formattedCheckInDate,
        checkOutDate: formattedCheckOutDate,
        numOfAdults: numAdults,
        numOfChildren: numChildren,
      };

      console.log('Booking payload:', booking);

      const response = await ApiService.bookRoom(roomId, userId, booking);
      if (response.statusCode === 200) {
        setConfirmationCode(response.bookingConfirmationCode);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          navigate('/rooms');
        }, 10000); // 10s delay for success message
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || error.message);
      clearErrorAfterDelay();
    }
  };

  // Utility to clear error message after 5 seconds
  const clearErrorAfterDelay = () => {
    setTimeout(() => setErrorMessage(''), 5000);
  };

  // Loading state
  if (isLoading) return <p className="room-detail-loading">Loading room details...</p>;

  // Error state
  if (error) return <p className="room-detail-loading">{error}</p>;

  // No room found state
  if (!roomDetails) return <p className="room-detail-loading">Room not found.</p>;

  const { roomType, roomPrice, roomPhotoUrl, description, bookings } = roomDetails;

  return (
    <div className="room-details-booking">
      {/* Success Message */}
      {showMessage && (
        <p className="booking-success-message">
          Booking successful! Confirmation code: <strong>{confirmationCode}</strong>. 
          An SMS and email of your booking details have been sent to you.
        </p>
      )}

      {/* Error Message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Room Details */}
      <h2>Room Details</h2>
      <img src={roomPhotoUrl} alt={roomType} className="room-details-image" />
      <div className="room-details-info">
        <h3>{roomType}</h3>
        <p>Price: ${roomPrice} / night</p>
        <p>{description}</p>
      </div>

      {/* Existing Bookings */}
      {bookings?.length > 0 && (
        <div className="existing-bookings">
          <h3>Existing Bookings</h3>
          <ul className="booking-list">
            {bookings.map((booking, index) => (
              <li key={booking.id} className="booking-item">
                <span className="booking-number">Booking {index + 1}: </span>
                <span className="booking-text">Check-in: {booking.checkInDate} </span>
                <span className="booking-text">Check-out: {booking.checkOutDate}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Booking Section */}
      <div className="booking-info">
        <button
          className="book-now-button"
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          {showDatePicker ? 'Hide Booking Form' : 'Book Now'}
        </button>

        {showDatePicker && (
          <div className="date-picker-container">
            <div className="date-picker-fields">
              <DatePicker
                className="detail-search-field"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={new Date()} // Prevent past dates
                placeholderText="Check-in Date"
                dateFormat="dd/MM/yyyy"
              />
              <DatePicker
                className="detail-search-field"
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={checkInDate || new Date()}
                placeholderText="Check-out Date"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            <div className="guest-container">
              <div className="guest-div">
                <label>Adults:</label>
                <input
                  type="number"
                  min="1"
                  value={numAdults}
                  onChange={(e) => setNumAdults(Math.max(1, parseInt(e.target.value) || 1))}
                />
              </div>
              <div className="guest-div">
                <label>Children:</label>
                <input
                  type="number"
                  min="0"
                  value={numChildren}
                  onChange={(e) => setNumChildren(Math.max(0, parseInt(e.target.value) || 0))}
                />
              </div>
              <button className="confirm-booking" onClick={handleConfirmBooking}>
                Confirm Booking
              </button>
            </div>
          </div>
        )}

        {/* Booking Summary */}
        {totalPrice > 0 && (
          <div className="total-price">
            <p>Total Price: ${totalPrice}</p>
            <p>Total Guests: {totalGuests}</p>
            <button onClick={acceptBooking} className="accept-booking">
              Accept Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomDetailsPage;