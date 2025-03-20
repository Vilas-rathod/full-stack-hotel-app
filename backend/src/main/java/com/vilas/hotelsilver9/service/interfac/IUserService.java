package com.vilas.hotelsilver9.service.interfac;

import com.vilas.hotelsilver9.dto.LoginRequest;
import com.vilas.hotelsilver9.dto.Response;
import com.vilas.hotelsilver9.entity.User;

public interface IUserService {
    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);

    Response updateUserProfile(User user, Long userId);
}
