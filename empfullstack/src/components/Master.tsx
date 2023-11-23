import React from 'react'
import { Route,Routes } from 'react-router-dom'
import GetAll from './GetAll'
import Save from './Save'
import Headers from './Headers.tsx'
 const Master = () => {

  return (
    <>  
    <Headers />    
    
        <Routes>  
        <Route path='/' element={<Save />} />          
            <Route path='/getall' element={<GetAll/>} />            
        </Routes>
    </>
  )
}
export default Master