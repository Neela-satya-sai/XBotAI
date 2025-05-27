import React from "react";
import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import ideaIcon from "../../assets/image 34.png";
import cross from "../../assets/X.png";
import Styles from "./FeedbackForm.module.css"

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    const text = e.target.name.value;
    setFeedback(text);
  };

  return (
    
      <Box className={Styles.form_wrapper}>
      <Box className ={Styles.formHeader}>
        <div> <img src={ideaIcon} alt="bulb icon" />
        <span>Provide Additional Feedback</span></div>
       
        <img src={cross} alt="X cancle" />
      </Box>

      <form className={Styles.form}>
        <input
          type="text"
          name="feedback"
          placeholder="feedback"
          value={feedback}
          onChange={handleChange}
          required
        />

        <Button type="submit" >
          Submit
        </Button>
      </form>

      </Box>
    
    
  );
}

export default FeedbackForm;
