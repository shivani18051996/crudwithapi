import React from 'react';
import CustomerList from './components/CustomerList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateCustomer from './components/CreateCustomer';
import EditCustomer from './components/CustomerForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CustomerList/>} />
          <Route path="/edit/:id" element={<EditCustomer/>} />
          <Route path="/create" element={<CreateCustomer/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
