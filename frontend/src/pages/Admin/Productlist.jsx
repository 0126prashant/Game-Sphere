import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { SimpleGrid } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://63f45eca3f99f5855dae29dc.mockapi.io/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        // console.log(data)
      })

      .catch((error) => console.error(error));
  }, []);

  const handleEdit = (product) => {
    // console.log(`edit ${product.id}`);
    navigate(`/editprd/${product.id}`);
  };

  const handleDelete = (product) => {
    // console.log(`Deleteid ${product.id}`);
    setProducts(products.filter((p) => p.id !== product.id));
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
