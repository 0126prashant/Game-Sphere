import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleLogin = () => {
    console.log(formData.email,formData.password);
    axios.post("http://localhost:8080/admin/login",{
      email :formData.email,
      password :formData.password
    })
    .then((res)=>{
      alert("Admin login sucessfull")
      navigate("/navadmin")
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  return (
    <Box
      width="400px"
      margin="auto"
      mt="100px"
      padding="20px"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
    >
      <Heading mb="4">Admin Login</Heading>
      <FormControl mb="4">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Adminlogin;
