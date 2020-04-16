package com.spring.practice.services;

import com.spring.practice.student.Student;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class StudentService {

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
