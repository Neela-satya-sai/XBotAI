import React, { useEffect, useState } from 'react'
import styles from "./Panel.module.css"
import { Box, Grid, Paper, styled, TextField , Button} from '@mui/material'
import logo from "../../assets/image 29.png"
import QuestionCard from '../QuestionCard/QuestionCard'
import { Form, useNavigate } from 'react-router-dom'
import aiRes from "../../data/aiResponse.json"

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

function Panel({home, userText, changeUserText , aiText, changeAiText , Chat, setChat }) {
  
  // chat====> {user:[s1,s2,s3], ai: [s1,s2,s3] feedback:"" }
 

  
   
  
   function getTimeStamp(){
    const now = new Date();

    const day = now.getDate(); // Day of the month (1-31)
    const month = now.getMonth() + 1; // Month (0-11, so add 1)
    const year = now.getFullYear(); // Full year (YYYY)
    const hours = now.getHours(); // Hours (0-23)
    const minutes = now.getMinutes(); // Minutes (0-59)
    const seconds = now.getSeconds(); // Seconds (0-59)
    
    return `Timestamp: ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
   }

   const navigate = useNavigate();

  function formSubmit(e) {
    e.preventDefault();
    const action = e.nativeEvent.submitter.innerText; // Detect which button was clicked
    let userQuestion = e.target.elements.inputText.value;
    console.log(userQuestion);
    
    // navigate("/history");
    if (action === "Ask") {

        let aiAnswer = isQuestionTheir(userQuestion);
        if(!aiAnswer){
            changeAiText("Sorry, Did not understand your query!");
        }
        else{
          changeAiText(aiAnswer);
        }

      console.log("User asked:", userQuestion);


    } else if (action === "Save") {
      console.log("User saved:", userQuestion);
    }

    changeUserText("");
  }

  function handleInput(e) {
    changeUserText(e.target.value); // Updates the state
  }
 
 

  return (
    <section className={styles.panel_wrapper}> 
    
    {home && <> <span className={styles.botai}>Bot AI</span>
    <Box  className={styles.hero} display={"flex"}  flexDirection={"column"}  justifyContent={"center"}  alignItems={"center"}>
      <h1>How Can I Help You Today?</h1> 
      <img src={logo} alt="logo img" className={styles.logo} />
    </Box>

    
      <Grid  container spacing={2} rowGap={3} columnGap={2}  sx={{ gridTemplateRows: "repeat(2, 1fr)" }} className={styles.questionCard}>
        <Grid  size={{ xs: 12, sm: 6 }} >
          <Item > <QuestionCard></QuestionCard></Item>
        </Grid>
        <Grid   size={{ xs: 12, sm: 6 }} >
          <Item> <QuestionCard></QuestionCard></Item>
        </Grid>
        <Grid   size={{ xs: 12, sm: 6 }}>
          <Item> <QuestionCard></QuestionCard></Item>
        </Grid>
        <Grid  size={{ xs: 12, sm: 6 }}>
          <Item> <QuestionCard></QuestionCard></Item>
        </Grid>
       
      </Grid>
      

      <form onSubmit={formSubmit} className={styles.form_wrapper}>
    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
    <TextField sx={{ width: "80%"}} className={styles.textfield} required  name={"inputText"} value={userText}  onChange={handleInput} placeholder='Message Bot AI…'/>
  
        <Button className={styles.button} type={"submit"}  >Ask</Button>
        <Button  className={styles.button} type={"button"} >Save</Button>
    
   
    </Box>
 
  </form>

    </>}

   
    
      
    </section>
  )
}

export default Panel