package com.spring.practice.services;

import com.spring.practice.domain.Student;
import com.spring.practice.repository.StudentDataAccessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class StudentService {

    @Autowired
    private final StudentDataAccessService studentDataAccessService;

    public StudentService(StudentDataAccessService studentDataAccessService) {
        this.studentDataAccessService = studentDataAccessService;
    }

    public List<Student> getAllStudents() {
        return studentDataAccessService.selectAllStudents();
    }

    public void addNewStudent(Student student) {
        addNewStudent(null, student);
    }

    public void addNewStudent(UUID studentID, Student student) {
        UUID newStudentId = Optional.ofNullable(studentID).orElse(UUID.randomUUID());

        //TODO: Verify that email is not taken

        studentDataAccessService.insertStudent(newStudentId, student);
    }
}
