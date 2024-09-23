package com.jamie.dms.presentation;

import com.jamie.dms.dto.DepartmentDto;
import com.jamie.dms.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/departments")
public class DepartmentController {

    private DepartmentService departmentService;

    // Add Department REST API. Maps the Http Request body onto a java object. Converts the JSON body.
    @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto) {
        DepartmentDto department = departmentService.createDepartment(departmentDto);
        return new ResponseEntity<>(department, HttpStatus.CREATED);
    }

    // Get Department By ID. Path Variable extracts the ID Value from the URL.
    @GetMapping("{id}")
    public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable("id") Long departmentId) {
        DepartmentDto department = departmentService.getDepartmentByID(departmentId);
        return new ResponseEntity<>(department, HttpStatus.OK);
    }

    // Get all Departments by ID
    @GetMapping
    public ResponseEntity<List<DepartmentDto>> getAllDepartments() {
        List<DepartmentDto> departments = departmentService.getAllDepartments();
        return new ResponseEntity<>(departments, HttpStatus.OK);
    }

    // Update a Department by its ID. Maps the Http Request body onto a java object. Converts the JSON body.
    // Path Variable extracts the ID Value from the URL.
    @PutMapping("{id}")
    public ResponseEntity<DepartmentDto> updateDepartment(@PathVariable("id") Long departmentId, @RequestBody DepartmentDto departmentDto) {
        DepartmentDto department = departmentService.updateDepartment(departmentId, departmentDto);
        return new ResponseEntity<>(department, HttpStatus.OK);
    }

    // Delete a Department by its ID. Path Variable extracts the ID Value from the URL.
    @DeleteMapping("{id}")
    public ResponseEntity<DepartmentDto> deleteDepartment(@PathVariable("id") Long departmentId) {
        departmentService.deleteDepartment(departmentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
