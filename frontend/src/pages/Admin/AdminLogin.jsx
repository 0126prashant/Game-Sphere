import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {URL} from "./baseUrl";
import { toast } from 'react-toastify';

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

  const toastOptions = {
    position: "top-center", 
    autoClose: 1000,
  };

  const handleLogin = () => {
    axios.post(`${URL}/admin/login`, {
      email: formData.email,
      password: formData.password,
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Welcome Admin", toastOptions);
          localStorage.setItem("isAdminLoggedIn", true);
          setTimeout(() => { 
            navigate("/adminlistproduct");
            window.location.reload();
          }, 1000);
        } else {
          toast.error("Login failed. Please check your credentials.", toastOptions);
        }
      })
      .catch((err) => {
        toast.error("Login failed. Please check your credentials.", toastOptions);
      });
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
