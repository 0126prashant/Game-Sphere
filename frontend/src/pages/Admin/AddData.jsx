import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const AddData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    developer: "",
    publisher: "",
    price: "",
    img_url:"https://media.wired.com/photos/639bf35a24c352e627eccc43/16:9/w_2400,h_1350,c_limit/Ragnaro%CC%88k-culture-ar1qdh.jpg",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/admin/addProduct", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // console.log('Product added:', data);
      navigate("/adminlistproduct")

    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Box p="4">
      <Heading size="lg" mb="4">Add Product</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
          <FormLabel>Product Name</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Date</FormLabel>
          <Input type="date" name="date" value={formData.date} onChange={handleChange} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Developer</FormLabel>
          <Input name="developer" value={formData.developer} onChange={handleChange} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Publisher</FormLabel>
          <Input name="publisher" value={formData.publisher} onChange={handleChange} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Price</FormLabel>
          <Input type="number" name="price" value={formData.price} onChange={handleChange} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Image URL</FormLabel>
          <Input name="img_url" value={formData.img_url} onChange={handleChange} />
        </FormControl>
        <Button colorScheme="blue" type="submit">Add Product</Button>
      </form>
    </Box>
  );
};

export default AddData;
