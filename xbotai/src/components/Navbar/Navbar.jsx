import React from 'react'
import styles from "./Navbar.module.css"
import { Stack, Button } from '@mui/material'
import logo from "../../assets/image 29.png"
import pencile from "../../assets/image 31.png"

function Navbar() {
  return (
    <nav className={styles.navbar_wrapper}>
      <Stack>
        <Stack direction={"row"} className={styles.newChat_wrapper}> <img src={logo} alt="logo img" className={styles.logo} />  <span className={styles.newChat}> New Chat</span> <img src={pencile} alt="pencile icon" className={styles.pencile} />  </Stack>
      <Button>New Chat</Button>
      <Button>past convesation</Button>
      </Stack>
     
    </nav>
  )
}

export default Navbar