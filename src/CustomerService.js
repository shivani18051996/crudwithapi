import axios from 'axios';

const API_BASE_URL = 'http://78.46.203.31:49160/api/customers';

class CustomerService {
  getAllCustomers() {
    return axios.get(API_BASE_URL);
  }

  createCustomer(customer) {
    return axios.post(API_BASE_URL, customer);
  }

  getCustomerById(customerId) {
    return axios.get(`${API_BASE_URL}/${customerId}`);
  }

  updateCustomer(customerId, customer) {
    return axios.put(`${API_BASE_URL}/${customerId}`, customer);
  }

  deleteCustomer(customerId) {
    return axios.delete(`${API_BASE_URL}/${customerId}`);
  }
}

export default new CustomerService();