package com.pcdhan.erp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class EmployeeController {
  Logger logger = LoggerFactory.getLogger(EmployeeController.class);
  private static int empNo=0;
  private static List<Employee> employees = new ArrayList<>();

  @GetMapping("/employee")
  private List<Employee> employee(){
    logger.info("Getting all employee lists");
    logger.info("Employees count: {}", employees.size());
    return employees;
  }

  @PostMapping("/employee")
  private String employee(Employee employee){
    empNo=empNo+1;
    employee.setEmpNo(empNo);
    employees.add(employee);
    logger.info("Successfully added {} {}",employee.getFirstName(),employee.getLastName());
    return "Successfully added "+employee.getFirstName()+" "+employee.getLastName();
  }

  @GetMapping("/employee/{id}")
  private Employee employee(@PathVariable(value = "id") Integer id){
    List<Employee> emp = employees.stream().filter(e->e.getEmpNo()==id).collect(Collectors.toList());
    if(emp==null || emp.size()==0){
      return null;
    }else{
      logger.info("Fetching employee with emp no {} ...", emp.get(0).getEmpNo());
      logger.info("Found emp {}", emp.get(0));
      return emp.get(0);
    }
  }


}
