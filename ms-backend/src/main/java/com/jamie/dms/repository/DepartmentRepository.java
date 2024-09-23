package com.jamie.dms.repository;

import com.jamie.dms.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

// Creates a JPA entity for the Department Repository allowing basic CRUD operations.
public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
