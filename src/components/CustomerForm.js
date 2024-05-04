// EditCustomer.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import CustomerService from '../CustomerService';

function EditCustomer() {
  const [customer, setCustomer] = useState({ name: '', phone: '', address: '' });
  const { id } = useParams(); // Get the customer ID from URL
  const navigate = useNavigate(); // For redirecting after a successful update

  useEffect(() => {
    CustomerService.getCustomerById(id)
      .then(response => {
        setCustomer(response.data);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CustomerService.updateCustomer(id, customer).then(() => {
      navigate('/'); // Redirect to the customer list
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={customer.phone}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={customer.address}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
}

export default EditCustomer;
