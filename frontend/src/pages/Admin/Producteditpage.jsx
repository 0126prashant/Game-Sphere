import React, { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { FormControl, FormLabel, Input, Textarea, Button, Box, Heading } from '@chakra-ui/react';

const EditProduct = () => {
  const navigate  = useNavigate();
  const { productId } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/admin/data")
    .then((res)=>{
     res.data.forEach((ele)=>{
        if(ele._id == productId){

          setProductData({
            img_url: ele.img_url,
            developer: ele.developer,
            publisher: ele.publisher,
            price: ele.price,
            name: ele.name,
          });
        }
     })
  
    })
    .catch((err)=>{
     console.log(err)
    })
 },[])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData,[name]:value}));
  };

  const handleSubmit = () => {
    // console.log(productData); 
    axios.patch(`http://localhost:8080/admin/updatedata/${productId}`, productData)
    .then((res) => {
      console.log(res.data);
      navigate('/adminlistproduct');
    })
    .catch((error) => {
      console.error(error);
    });
    // navigate('/adminlistproduct');
  };

  return (
    <Box p="4">
      <Heading size="lg" mb="4">Edit Product</Heading>
      <FormControl mb="4">
        <FormLabel>Name</FormLabel>
        <Input name="name" value={productData.name} onChange={handleChange} />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Image URL</FormLabel>
        <Input name="img_url" value={productData.img_url} onChange={handleChange} />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Date</FormLabel>
        <Input type="date" name="date" value={productData.date} onChange={handleChange} />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Developer</FormLabel>
        <Input name="developer" value={productData.developer} onChange={handleChange} />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Publisher</FormLabel>
        <Input name="publisher" value={productData.publisher} onChange={handleChange} />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Price</FormLabel>
        <Input name="price" value={productData.price} onChange={handleChange} />
      </FormControl>
      
      <Button colorScheme="blue" onClick={handleSubmit}>Update Product</Button>
    </Box>
  );
};

export default EditProduct;
