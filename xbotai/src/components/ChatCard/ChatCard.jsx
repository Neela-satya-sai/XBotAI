import React from 'react'
import { Box, Stack } from '@mui/material'
import logo from "../../assets/image 29.png";
import userlogo from "../../assets/Group 1000011096.png"
import styles from "./ChatCard.module.css"



function ChatCard({ role, text}) {


  function getTimeStamp() {
    const now = new Date();

    const day = now.getDate(); // Day of the month (1-31)
    const month = now.getMonth() + 1; // Month (0-11, so add 1)
    const year = now.getFullYear(); // Full year (YYYY)
    const hours = now.getHours(); // Hours (0-23)
    const minutes = now.getMinutes(); // Minutes (0-59)
    const seconds = now.getSeconds(); // Seconds (0-59)

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  return (
    <Box className={styles.chartCard_wrapper} display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
         <div>  <img src={role==="User"? userlogo : logo } alt="user img" /></div>
         <Stack >
             <span>{role}</span>
             <p>{text}</p>
             <span>Time</span>
         </Stack>
    </Box>
  )
}

export default ChatCard 