import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import  TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root :{
        '& > *':{
            margin: theme.spacing(1),
            width : '25ch',
        },
    },
}));

export default function Create(){
    const classes = useStyles();

    const [student,setStudent] = useState({
        regNo:0,
        studentName:'',
        grade:'',
        section:''
    });
const createStudent = () =>{
 
    axios.post('http://localhost:5000/students',student);
    console.log('http://localhost:5000/students',student);
 
}
    return (
        <>
        <h2>Create Student</h2>
        <form className={classes.root} noValidate autoComplete='off'>
            <TextField id='standard-basic' label="Regis Num" value={student.regNo} onChange={(event)=>{
                setStudent({...student,regNo: event.target.value})
            }}/>
            <TextField id='standard-basic' label="Name" value={student.studentName}  onChange={(event)=>{
                setStudent({...student,studentName: event.target.value})
            }} />
            <TextField id='standard-basic' label="Grade" value={student.grade}  onChange={(event)=>{
                setStudent({...student,grade: event.target.value})
            }}/>
            <TextField id='standard-basic' label="Section" value={student.section}  onChange={(event)=>{
                setStudent({...student,section: event.target.value})
            }}/>

            <Button variant="contained" color="primary" onClick={createStudent}>
                Create
            </Button>
        </form>
        </>
    );
}