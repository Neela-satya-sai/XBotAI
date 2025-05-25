import React from 'react'
import { Box, Stack } from '@mui/material'
import logo from "../../assets/image 29.png";
import styles from "./ChatCard.module.css"

function ChatCard() {
  return (
    <Box className={styles.chartCard_wrapper} display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
         <img src={logo} alt="user img" />
         <Stack >
             <span>user Name</span>
             <p>Sorry, Did not understand your query!</p>
             <span>Time</span>
         </Stack>
    </Box>
  )
}

export default ChatCard 