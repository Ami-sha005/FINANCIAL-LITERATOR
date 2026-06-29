package com.TechTitansAgenticAI.service;

import com.TechTitansAgenticAI.dto.AuthResponse;
import com.TechTitansAgenticAI.dto.LoginRequest;
import com.TechTitansAgenticAI.dto.RegisterRequest;
import com.TechTitansAgenticAI.entity.User;
import com.TechTitansAgenticAI.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    // ---------------- REGISTER ----------------

    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {

            return new AuthResponse(
                    false,
                    "Email already exists",
                    null,
                    null,
                    null
            );

        }

        User user = new User();

        user.setName(request.getName());

        user.setEmail(request.getEmail());

        user.setPassword(request.getPassword());

        user.setAge(request.getAge());

        user.setOccupation(request.getOccupation());

        user.setMonthlyIncome(request.getMonthlyIncome());

        user.setMonthlyExpenses(request.getMonthlyExpenses());

        user.setSavings(request.getSavings());

        user.setDebt(request.getDebt());

        User savedUser = userRepository.save(user);

        return new AuthResponse(

                true,

                "Registration Successful",

                savedUser.getId(),

                savedUser.getName(),

                savedUser.getEmail()

        );

    }

    // ---------------- LOGIN ----------------

    public AuthResponse login(LoginRequest request) {

        Optional<User> optionalUser =
                userRepository.findByEmail(request.getEmail());

        if (optionalUser.isEmpty()) {

            return new AuthResponse(

                    false,

                    "User not found",

                    null,

                    null,

                    null

            );

        }

        User user = optionalUser.get();

        if (!user.getPassword().equals(request.getPassword())) {

            return new AuthResponse(

                    false,

                    "Invalid Password",

                    null,

                    null,

                    null

            );

        }

        return new AuthResponse(

                true,

                "Login Successful",

                user.getId(),

                user.getName(),

                user.getEmail()

        );

    }

}