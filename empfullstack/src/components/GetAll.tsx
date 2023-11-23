import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'; 
import axios from 'axios'
import { Link } from 'react-router-dom';

 const GetAll = () => {
    
    const [emps,setEmps]=useState([])    
    const getdata= async()=>{
      const res=  await axios.get("http://localhost:8000/get-emp")
      setEmps(res.data.data)
       }       
    useEffect(()=>{
        getdata()
    },[])
    const handleDelete=async(_id:string)=>{      
     await axios.delete(`http://localhost:8000/del-emp/${_id}`)
     getdata()
    }
    
  return (
    <><br /><br />
 
    <Grid item xs={2}>
        <TableContainer component={Paper}>
      <Table sx={{minWidth:500}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>            
            <TableCell ><b>Name</b></TableCell>
            <TableCell align='right'><b>Department</b></TableCell>
            <TableCell align='right'><b>Salary</b>&nbsp;</TableCell>
            <TableCell align='right'><b>Actions</b>&nbsp;</TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
          {emps.map((element,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="element">{element.name}  </TableCell>
              <TableCell align="right">{element.department}</TableCell>
              <TableCell align="right">{element.salary}</TableCell>  
              
              <TableCell  align="right" > <Button
                    variant="contained"
                    color="error"
                    startIcon={<DeleteForeverTwoToneIcon />}
                    onClick={() => handleDelete(element._id)}
                  >                    
                  </Button></TableCell>      
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
<br /><br />
        <button>
        <Link to={'/'} style={{color:"blue"}}>go Back</Link>
        </button>
    </>
  )
}
export default GetAll;