import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Stack, } from '@mui/material'
import Panel from './components/Panel/Panel'

function Home() {
  return (
    <div>
      <Stack direction={"row"}>
      <Navbar></Navbar>
      <Panel>pannel</Panel>
      </Stack>
     
    </div>
  )
}

export default Home