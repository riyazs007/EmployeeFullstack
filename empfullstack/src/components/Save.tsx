import * as React from 'react';
 import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

const Save=()=>{
     const navigate=useNavigate()
    const [emp,setEmp]=React.useState({
      name:"",
      department:"",
      salary:0
    })
    const {name,department,salary}=emp;

    const onInputChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setEmp({...emp,[e.target.name]:e.target.value})
    }
    const save= async(e:React.MouseEvent<SVGSVGElement, MouseEvent>)=>{
      e.preventDefault()
     await axios.post('http://localhost:8000/send',emp)     
     navigate('/getall')
    }
    
  return (          
       <center>
        <br /><br />
         <Box 
          sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item xs={3}>
         <TextField id="outlined-basic" 
                    label="Name" 
                    variant="outlined"
                    type='text' 
                    name='name'
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    />
        </Grid>
        <Grid item xs={3}>
        <TextField   type='text'
                     id="outlined-basic" 
                     label="Department" 
                     variant="outlined"
                     name='department'
                     value={department}
                     onChange={(e)=>onInputChange(e)}
                     />          
        </Grid>
        <Grid item xs={3}>
          <TextField type='number'
                     id="outlined-basic" 
                     label="Salary" 
                     variant="outlined"
                     name='salary'
                     value={salary}
                     onChange={(e)=>onInputChange(e)}
                     />          
        </Grid>
        <Grid item xs={2}>
        <Stack spacing={2} direction="row">
        <AddIcon onClick={(e)=>save(e)}/>
    </Stack>
        </Grid>
        
      </Grid>
    </Box>
   
       </center>
   
  );

}
export default Save;