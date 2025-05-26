import React from 'react'
import { Box, Stack } from '@mui/material'
import logo from "../../assets/image 29.png";
import styles from "./ChatCard.module.css"

function ChatCard({ role, text}) {
  return (
    <Box className={styles.chartCard_wrapper} display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
         <div>  <img src={logo} alt="user img" /></div>
         <Stack >
             <span>{role}</span>
             <p>{text}</p>
             <span>Time</span>
         </Stack>
    </Box>
  )
}

export default ChatCard 