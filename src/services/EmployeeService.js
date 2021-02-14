import axios from "axios";


class EmployeeService {
  EMPLOYEE_API = "http://localhost:8080/api/v1/";

  getEmployees() {
    return axios.get(this.EMPLOYEE_API.concat("employees"));
  }

  addEmployee(employee) {
    return axios.post(this.EMPLOYEE_API.concat("employees"),employee)
  }
}

export default new EmployeeService();