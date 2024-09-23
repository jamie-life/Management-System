package com.jamie.dms.service.Implementation;

import com.jamie.dms.dto.DepartmentDto;
import com.jamie.dms.entity.Department;
import com.jamie.dms.mapper.DepartmentMapper;
import com.jamie.dms.repository.DepartmentRepository;
import com.jamie.dms.service.DepartmentService;
import com.jamie.exception.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department department = DepartmentMapper.mapToDepartment(departmentDto);
        return DepartmentMapper.mapToDepartmentDto(departmentRepository.save(department));
    }

    @Override
    public DepartmentDto getDepartmentByID(Long departmentId) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department with id " + departmentId + " not found"));
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
        return departments.stream().map((department) -> DepartmentMapper.mapToDepartmentDto(department))
                .collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(Long departmentId, DepartmentDto updatedDepartment) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department with id " + departmentId + " not found"));

        department.setDepartmentName(updatedDepartment.getDepartmentName());
        department.setDepartmentDescription(updatedDepartment.getDepartmentDescription());

        Department departmentUpdated = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(departmentUpdated);
    }

    @Override
    public void deleteDepartment(Long departmentId) {
        Department department = departmentRepository.findById(departmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Department with id " + departmentId + " not found"));

        departmentRepository.delete(department);
    }
}
