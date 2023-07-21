import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

const AdminNavbar = () => {
  return (
    <Flex align="center" justify="space-between" bgColor="gray.100" p="4" boxShadow="sm">
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          Admin Panel
        </Text>
      </Box>
      <Box>
        <Link to="/add-product">
          <Button colorScheme="blue" mr="2">
            Add Product
          </Button>
        </Link>
        <Link to="/delete-product">
          <Button colorScheme="red">
            Delete Product
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default AdminNavbar;
