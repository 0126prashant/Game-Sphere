import React from 'react';
import { Box, Image, Text, Button, Link as ChakraLink, SimpleGrid } from '@chakra-ui/react';

const ProductCard = ({ product, onDelete, onEdit }) => {
  const { img_url, date, developer, publisher, price, name } = product;

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" mb="4" boxShadow="md">
      <Image src={img_url} alt={name} h="200px" objectFit="cover" mb="2" borderRadius="md" />
      <Text fontSize="lg" fontWeight="bold" mb="2">{name}</Text>
      <Text fontSize="sm" mb="2">Date: {date}</Text>
      <Text fontSize="sm" mb="2">Developer: {developer}</Text>
      <Text fontSize="sm" mb="2">Publisher: {publisher}</Text>
      <Text fontSize="sm" mb="2">Price: {price}</Text>
      <ChakraLink as="button" color="blue.500" mr="2" onClick={() => onEdit(product)}>
        Edit
      </ChakraLink>
      <Button colorScheme="red" onClick={() => onDelete(product)}>
        Delete
      </Button>
    </Box>
  );
};
export default ProductCard
