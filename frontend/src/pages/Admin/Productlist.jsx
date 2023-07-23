import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { SimpleGrid } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {URL} from "./baseUrl"
import { toast } from 'react-toastify';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  // http://localhost:3000/
  const displayData = ()=>{
    fetch(`${URL}/admin/data`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        // console.log(data)
      })
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    displayData()
  }, []);
// updatedata
  const handleEdit = (product) => {
    navigate(`/editprd/${product._id}`);
  };

  const toastOptions = {
    position: "top-center", 
    autoClose: 1000, 
  };

  const handleDelete = async (product) => {
    // console.log(product)
    try {
      const response = await fetch(`${URL}/admin/delete/${product._id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        setProducts(products.filter((p) => p.id !== product._id));
        // alert("Succsully deleted")
        toast.error("Product has been Deleted",toastOptions);
          displayData()
      } else {
        console.error('Failed to delete product:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
