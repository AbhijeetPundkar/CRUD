import React, { useEffect, useState } from 'react';
import { Table, TableCell, Button, TableBody, TableRow, TableHead, styled} from '@mui/material';
import { getUsers, deleteUser } from '../service/api';
import {Link} from 'react-router-dom'


const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`
const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
`
const TBody = styled(TableRow)`
& > td {
  font-size: 20px;
  text-align: center;
}`







const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    await getAllUsers();
  }

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Operation</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TBody key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.uname}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant="contained" style={{ marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
              <Button variant="contained" color='secondary'onClick={() => deleteUserDetails(user._id)}>Delete</Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUser;
