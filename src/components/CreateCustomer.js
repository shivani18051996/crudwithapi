import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateCustomer = () => {
    const navigate=useNavigate()
    // Initialize state with object keys for name, address, and phone
    const [inputList, setInputList] = useState({
        name: '',
        address: '',
        phone: ''
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target; // Destructure name and value from event target
        setInputList({ ...inputList, [name]: value }); // Update state
    };

    // Handle form submit
    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submit behavior
        try {
            // Post data to API
            const response = await axios.post('http://78.46.203.31:49160/api/customers', inputList);
            console.log('Success:', response.data);
            // Clear form (optional)
            setInputList({
                name: '',
                address: '',
                phone: ''
            });
            navigate("/")
            // Optionally redirect or give feedback
        } catch (error) {
            console.error('Error creating customer:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    value={inputList.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    name="address"
                    value={inputList.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    value={inputList.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    required
                />
                <button type="submit">Create Customer</button>
            </form>
        </div>
    );
}

export default CreateCustomer;
