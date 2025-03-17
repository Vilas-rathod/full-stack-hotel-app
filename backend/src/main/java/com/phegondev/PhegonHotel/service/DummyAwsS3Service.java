package com.phegondev.PhegonHotel.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Random;

@Service
public class DummyAwsS3Service {

    public String saveImageToS3(MultipartFile photo) {  // Add this method
        System.out.println("AWS S3 Service is disabled. Skipping upload.");
        return "https://picsum.photos/600/400?random=" + new Random().nextInt(1000);

    }
}
