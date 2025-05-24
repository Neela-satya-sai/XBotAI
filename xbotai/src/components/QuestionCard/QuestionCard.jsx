import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from "./QuestionCard.module.css"

function QuestionCard() {
  return (
    <Box className ={styles.card}>
      <Typography>Hi, what is the weather</Typography>
      <Typography>Get immediate AI generated response</Typography>
    </Box>
  )
}

export default QuestionCard