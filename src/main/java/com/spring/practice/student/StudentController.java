package com.spring.practice.student;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("students")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @GetMapping
    public List<Student> getAllStudents() {
        return List.of(
                new Student(
                        UUID.randomUUID(),
                        "Alex",
                        "Pominov",
                        "alex@gmail.com",
                        Student.Gender.MALE
                ),
                new Student(
                        UUID.randomUUID(),
                        "Elisa",
                        "Tamara",
                        "elisa@gmail.com",
                        Student.Gender.FEMALE
                )
        );
    }
}
