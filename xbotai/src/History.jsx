import React from 'react'
import { Stack } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import Panel from './components/Panel/Panel'
import { Form } from 'react-router-dom'
// import FormSubmit from './components/FormSubmit/FormSubmit'

function History() {
  return (
    <div>
    <Stack direction={"row"}>
    <Navbar></Navbar>
    <Panel history  >pannel</Panel>

    </Stack>
   
  </div>
  )
}

export default History