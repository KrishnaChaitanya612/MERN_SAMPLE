import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


const usersUrl = 'http://localhost:5000/students';

const initialValue = {
     regNo:0,
    studentName:'',
    grade:'',
    section:''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { regNo, studentName, grade, section } = user;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

     const getUsers = async (id) => {
        id = id;
        return await axios.get(`${usersUrl}/${id}`);
    }

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }
    
    useEffect(() => {
        loadUserDetails();
    }, []);

   

    const editUser = async (id,user) => {
    return await axios.put(`${usersUrl}/${id}`,user)
}

    const editUserDetails = async() => {
        const response = await editUser(id,user);
        history.push('/');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='studentName' value={studentName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Reg No</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='regNo' value={regNo} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Grade</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='grade' value={grade} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Section</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='section' value={section} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;