package com.jamie.ems.mapper;


import com.jamie.ems.dto.EmployeeDto;
import com.jamie.ems.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee emp) {
        return new EmployeeDto(
                emp.getId(),
                emp.getFirstName(),
                emp.getLastName(),
                emp.getEmail(),
                emp.getDepartment().getId()
        );
    }

    public static Employee mapToEmployee(EmployeeDto empDto) {
        Employee employee = new Employee();
        employee.setId(empDto.getId());
        employee.setFirstName(empDto.getFirstName());
        employee.setLastName(empDto.getLastName());
        employee.setEmail(empDto.getEmail());
        return employee;
    }
}
