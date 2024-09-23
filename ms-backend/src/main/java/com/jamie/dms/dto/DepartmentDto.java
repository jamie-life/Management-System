package com.jamie.dms.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
// Used for transferring data between the service layer and the presentation layer.
public class DepartmentDto {

    private Long id;
    private String departmentName;
    private String departmentDescription;
}
