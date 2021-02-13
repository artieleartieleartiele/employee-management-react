import axios from "axios";


class EmployeeService {
  EMPLOYEE_API = "http://localhost:8080/api/v1/";

  callApi(endpoint) {
    return axios.get(this.EMPLOYEE_API.concat(endpoint));
  }

  getEmployees() {
    return this.callApi("employees")
  }
}

export default new EmployeeService();