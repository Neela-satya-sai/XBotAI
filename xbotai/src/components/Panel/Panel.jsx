import React from 'react'
import styles from "./Panel.module.css"
import { Box, Grid, Paper, styled, TextField , Button} from '@mui/material'
import logo from "../../assets/image 29.png"
import QuestionCard from '../QuestionCard/QuestionCard'
import { Form } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function Panel() {
  return (
    <section className={styles.panel_wrapper}> 
    
   
  
    <span className={styles.botai}>Bot AI</span>
    <Box  className={styles.hero} display={"flex"}  flexDirection={"column"}  justifyContent={"center"}  alignItems={"center"}>
      <h1>How Can I Help You Today?</h1> 
      <img src={logo} alt="logo img" className={styles.logo} />
    </Box>

    
      <Grid  container spacing={2} rowGap={3} columnGap={2}  sx={{ gridTemplateRows: "repeat(2, 1fr)" }} className={styles.questionCard}>
        <Grid size={6} >
          <Item > <QuestionCard></QuestionCard></Item>
        </Grid>
        <Grid size={6}>
          <Item> <QuestionCard></QuestionCard></Item>
        </Grid>
        <Grid size={6}>
          <Item> <QuestionCard></QuestionCard></Item>
        </Grid>
        <Grid size={6}>
          <Item> <QuestionCard></QuestionCard></Item>
        </Grid>
       
      </Grid>
      

      <Form>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <TextField sx={{ width: "80%"}} className={styles.textfield} />
            {/* <Box className={styles.button_wrapper}> */}
            <Button className={styles.button}>Ask</Button>
            <Button  className={styles.button}>Save</Button>
            {/* </Box> */}
       
        </Box>
     
      </Form>
    </section>
  )
}

export default Panel