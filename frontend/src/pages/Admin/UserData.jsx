import React, { useEffect, useState } from 'react';
import { Box, Button, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import {URL} from "./baseUrl"

const UserList = () => {
  const [users, setUsers] = useState([]);

console.log(users)

  // http://localhost:3000/
  const displayData = ()=>{
    fetch(`${URL}/admin/userlist`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        // console.log(data)
      })
      .catch((error) => console.error(error));
  }
useEffect(()=>{
    displayData()
},[])

  const handleBlockToggle = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === id ? { ...user, isBlocked: !user.isBlocked } : user
      )
    );
  };
  return (
    <Box width="600px" margin="auto" mt="100px" padding="20px" borderWidth="1px" borderRadius="md">
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Mobile No.</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
               <Tr key={user._id}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.mobile_No}</Td>
              <Td>
                <Button
                  colorScheme={user.isBlocked ? 'green' : 'red'}
                  onClick={() => handleBlockToggle(user._id)}
                >
                  {user.isBlocked ? "Unblock" : "Block"}
                </Button>
              </Td>
            </Tr>
            
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default UserList;
