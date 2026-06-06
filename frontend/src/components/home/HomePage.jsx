import React, { useEffect, useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";

const HomePage = () => {
  const [roomSearchResults, setRoomSearchResults] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const navigate = useNavigate();
  const isAdmin = ApiService.isAdmin();

  useEffect(() => {
    const fetchFeaturedRooms = async () => {
      try {
        const response = await ApiService.getAllAvailableRooms();
        setFeaturedRooms((response.roomList || []).slice(0, 4));
      } catch (error) {
        console.error("Error fetching featured rooms:", error.message);
      }
    };

    fetchFeaturedRooms();
  }, []);

  // Function to handle search results
  const handleSearchResult = (results) => {
    setRoomSearchResults(results);
  };

  const formatRoomPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  return (
    <div className="home">
      {/* HEADER / BANNER ROOM SECTION */}
      <section>
        <header className="header-banner">
          <img
            src="./assets/images/hotel.webp"
            alt="HotelSilver9"
            className="header-image"
          />
          <div className="overlay"></div>
          <div className="animated-texts overlay-content">
            <h1>
              Welcome to <span className="phegon-color">Hotel Silver9</span>
            </h1>
            <br />
            <h3>Step into a haven of comfort and care</h3>
          </div>
        </header>
      </section>

      {/* SEARCH/FIND AVAILABLE ROOM SECTION */}
      <RoomSearch handleSearchResult={handleSearchResult} />
      <RoomResult roomSearchResults={roomSearchResults} />

      {featuredRooms.length > 0 && (
        <section className="featured-rooms-section">
          <div className="section-heading-row">
            <div>
              <h2>Featured Stays</h2>
              <p>
                Premium rooms selected for comfort, privacy, and easy booking.
              </p>
            </div>
            <a className="view-rooms-home" href="/rooms">
              View all
            </a>
          </div>

          <div className="featured-room-scroll" aria-label="Featured rooms">
            {featuredRooms.map((room) => (
              <article key={room.id} className="featured-room-card">
                <img src={room.roomPhotoUrl} alt={room.roomType} />
                <div className="featured-room-content">
                  <span className="featured-room-tag">Hotel Silver9</span>
                  <h3>{room.roomType}</h3>
                  <p>{room.roomDescription}</p>
                  <div className="featured-room-footer">
                    <strong>{formatRoomPrice(room.roomPrice)}</strong>
                    <span>/ night</span>
                    <div className="book-now-div">
                      {isAdmin ? (
                        <button
                          className="edit-room-button"
                          onClick={() =>
                            navigate(`/admin/edit-room/${room.id}`)
                          }
                        >
                          Edit Room
                        </button>
                      ) : (
                        <button
                          className="book-now-button"
                          onClick={() =>
                            navigate(`/room-details-book/${room.id}`)
                          }
                        >
                          View/Book Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <h2 className="home-services">
        Services at <span className="phegon-color">Hotel Silver9</span>
      </h2>

      {/* SERVICES SECTION */}
      <section className="service-section">
        <div className="service-card">
          <img src="./assets/images/ac.png" alt="Air Conditioning" />
          <div className="service-details">
            <h3 className="service-title">Air Conditioning</h3>
            <p className="service-description">
              Stay cool and comfortable throughout your stay with our
              individually controlled in-room air conditioning.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="./assets/images/mini-bar.png" alt="Mini Bar" />
          <div className="service-details">
            <h3 className="service-title">Mini Bar</h3>
            <p className="service-description">
              Enjoy a convenient selection of beverages and snacks stocked in
              your room's mini bar with no additional cost.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="./assets/images/parking.png" alt="Parking" />
          <div className="service-details">
            <h3 className="service-title">Parking</h3>
            <p className="service-description">
              We offer on-site parking for your convenience . Please inquire
              about valet parking options if available.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="./assets/images/wifi.png" alt="WiFi" />
          <div className="service-details">
            <h3 className="service-title">WiFi</h3>
            <p className="service-description">
              Stay connected throughout your stay with complimentary high-speed
              Wi-Fi access available in all guest rooms and public areas.
            </p>
          </div>
        </div>
      </section>
      {/* AVAILABLE ROOMS SECTION */}
      <section></section>
    </div>
  );
};

export default HomePage;
