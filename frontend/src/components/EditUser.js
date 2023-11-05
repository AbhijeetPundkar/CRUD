import React from 'react'
import { useState, useEffect } from 'react'
import { FormControl, FormGroup,InputLabel,Input,Typography, styled, Button } from '@mui/material'
import { editUser, getUser } from '../service/api'
import { useNavigate, useParams } from 'react-router-dom'

const Container = styled(FormGroup)`
    width: 50%;
    margin:5% auto 0 auto;
    & > div {
        margin-top:20px;
    }
`
const defaultValue = {
    name: '',
    uname: '',
    email: '',
    phone: ''
}

const EditUser = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setuser] = useState(defaultValue);

    const onValueChange= (e) => {
        console.log(e.target.name, e.target.value)
        setuser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }

    const editUserDetails = async () => {
        await editUser(user, id);
        navigate('/all');

    }


    useEffect(() => {
        loadUserDetails();},[]);
    
    const loadUserDetails = async () => {
        const response = await getUser(id);
        setuser(response.data);
    }








  return (
    <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='name' value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='uname' value={user.uname}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='email' value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={()=> editUserDetails()}>Edit User</Button>
        </FormControl>
    </Container>
  )
}

export default EditUser;
