package com.vilas.hotelsilver9.service.interfac;

import com.vilas.hotelsilver9.dto.Response;
import com.vilas.hotelsilver9.entity.Booking;

public interface IBookingService {

    Response saveBooking(Long roomId, Long userId, Booking bookingRequest);

    Response findBookingByConfirmationCode(String confirmationCode);

    Response getAllBookings();

    Response cancelBooking(Long bookingId);

}
