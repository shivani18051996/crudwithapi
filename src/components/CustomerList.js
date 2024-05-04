import React, { useEffect, useState } from 'react';
import CustomerService from '../CustomerService';
import { Link } from 'react-router-dom';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    CustomerService.getAllCustomers().then((response) => {
      setCustomers(response.data);
    });
  };

  const deleteCustomer = (customerId) => {
    if (window.confirm('Are you sure?')) {
      CustomerService.deleteCustomer(customerId).then(() => {
        fetchCustomers();
      });
    }
  };

  return (
    <div>
      <Link to="/create">Add Customer</Link>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.phone} (
            <Link to={`/edit/${customer.id}`}>Edit</Link>
            <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
            )
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
