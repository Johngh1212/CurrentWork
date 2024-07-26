//package com.bandits.api.bandits_api.controllers;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class HomeController {
//    @GetMapping("/api/home")
//    public String home() {
//        return "Welcome to the homepage!";
//    }
//}

package com.bandits.api.bandits_api.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HomeController {

    @GetMapping("/home")
    public String home() {
        return "Welcome to the homepage!";
    }

    @PostMapping("/create-account")
    public String createAccount(@RequestBody AccountRequest accountRequest) {
        // Handle account creation logic here
        return "Account created for: " + accountRequest.getUsername();
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        // Handle login logic here
        return "Logged in as: " + loginRequest.getUsername();
    }
}

// Define request body classes
class AccountRequest {
    private String username;
    private String password;

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

class LoginRequest {
    private String username;
    private String password;

    // Getters and Setters
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
