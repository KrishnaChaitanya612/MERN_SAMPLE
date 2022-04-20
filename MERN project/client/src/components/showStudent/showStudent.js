import  React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    table:{
        minWidth:650,
    },
})



export default function ShowStudent() {
    const classes = useStyles();

    const [studentsList, setStudentList] = useState([]);

    const deleteStudent = (id) => {
        axios.delete(`http://localhost:5000/students/${id}`).then( ()=> {
           
        })
        console.log(id);
    }
  

    useEffect(()=>{
        axios.get('http://localhost:5000/students').then((allstudents)=>{
            setStudentList(allstudents.data);
        },[])
    })
  return (
      <>
      <h2>All Studdents</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Registration Number</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <input type="text" style={{ display : 'none' }} value={ student._id} />
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteStudent(student._id)}>
                 <DeleteIcon fontSize="small"/>
                </IconButton>
                 <IconButton aria-label="edit" className={classes.margin} component={Link} to={`/edit/${student._id}`}>
                 <EditIcon fontSize="small"/>
                </IconButton>
            </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
