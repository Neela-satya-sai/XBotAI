import React, { useEffect, useState } from "react";
import styles from "./Panel.module.css";
import { Box, Grid, Paper, styled, TextField, Button } from "@mui/material";
import logo from "../../assets/image 29.png";
import QuestionCard from "../QuestionCard/QuestionCard";
import { Form, useNavigate } from "react-router-dom";
import aiRes from "../../data/aiResponse.json";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import ChatCard from "../ChatCard/ChatCard";
import ConversationHistory from "../ConversationHistory/ConversationHistory";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function Panel({
  home,
  history,
  userText,
  changeUserText,
  aiText,
  changeAiText,
  chat,
  setChat,
  chatHistory,
  setChatHistory,
}) {
  // chat====> {user:[s1,s2,s3], ai: [s1,s2,s3] feedback:"" }
  // chatHistory ==>   [  ]
  const [final, setFinal] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (chat && chat.user && chat.user.length > 0) {
      let array = [];
      console.log("from chat useeffect", chat);
      for (let i = 0; i < chat.user.length; i++) {
        array.push({ role: "User", text: chat.user[i] });
        array.push({
          role: "Soul AI",
          text: chat.ai[i] || "Sorry, did not understand your query!",
        });
      }
      console.log("from chat useeffect", array);

      setFinal(array);
      changeUserText("");
      changeAiText("");
    }
  }, [chat]);

  function findClosestQuestion(userInput) {
    return aiRes.find((q) =>
      q.question.toLowerCase().includes(userInput.toLowerCase())
    );

    // // Example usage:
    // const userString = "difference between GET and POST";

    // console.log(matchedQuestion ? matchedQuestion.question : "No close match found");
  }

  // useEffect(() => {
  //   if (chat.user.length > 0) {
  //     setFinal(chat.user.map((userMsg, i) => ([
  //       { role: "User", text: userMsg },
  //       { role: "Soul AI", text: chat.ai[i] || "Sorry, did not understand your query!" }
  //     ])).flat());
  //   }
  // }, [chat]);

  function formSubmit(e) {
    e.preventDefault();
    const userQuestion = e.target.elements.inputText.value;
    const aiAnswer = findClosestQuestion(userQuestion);

    changeAiText(
      aiAnswer ? aiAnswer.response : "Sorry, did not understand your query!"
    );

    setChat((prevChat) => ({
      ...prevChat,
      user: [...prevChat.user, userQuestion],
      ai: [
        ...prevChat.ai,
        aiAnswer?.response || "Sorry, did not understand your query!",
      ],
    }));

    changeUserText(""); // Reset input after state update
    changeAiText(""); // Reset AI response after state update
  }

  function saveChat() {
    if (!chat.user[0]) {
      console.log("atlest u need to ask a single question");
      enqueueSnackbar("Atlest one Question must be asked!", {
        variant: "info",
      });
    } else {
      const updatedHistory = [...chatHistory, chat];
      setChatHistory(updatedHistory);
      localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
    }
    navigate("/history");
    setChat({});
  }

  function handleInput(e) {
    changeUserText(e.target.value); // Updates the state
  }

  return (
    <section className={styles.panel_wrapper}>
   
      <header>  {history && <div> Conversation History</div>}  {home &&  <h1 className={styles.botai}> Bot AI</h1>}  </header>
    
      {chat && chat.user && chat.user.length > 0 ? (
        <div>
          <div className={styles.chatCard_wrapper}>
            {final.map((message, idx) => (
              <ChatCard key={idx} role={message.role} text={message.text} />
            ))}
          </div>
          <form onSubmit={formSubmit} className={styles.form_wrapper}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <input
                // sx={{ width: "80%" }}
                className={styles.textfield}
                required
                name={"inputText"}
                value={userText}
                onChange={handleInput}
                placeholder="Message Bot AI…" 
              /> 

              <Button className={styles.button} type={"submit"}>
                Ask
              </Button>

              <Button
                className={styles.button}
                type={"button"}
                onClick={saveChat}
              >
                Save
              </Button>
            </Box>
          </form>
        </div>
      ) : (
        <>
          {home && (
            <>
              <Box
                className={styles.hero}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <h1>How Can I Help You Today?</h1>
                <img src={logo} alt="logo img" className={styles.logo} />
              </Box>
              <Grid
                container
                spacing={2}
                rowGap={3}
                columnGap={2}
                sx={{ gridTemplateRows: "repeat(2, 1fr)" }}
                className={styles.questionCard}
              >
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Item>
                    {" "}
                    <QuestionCard></QuestionCard>
                  </Item>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Item>
                    {" "}
                    <QuestionCard></QuestionCard>
                  </Item>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Item>
                    {" "}
                    <QuestionCard></QuestionCard>
                  </Item>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Item>
                    {" "}
                    <QuestionCard></QuestionCard>
                  </Item>
                </Grid>
              </Grid>
              <form onSubmit={formSubmit} className={styles.form_wrapper}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <input
                    className={styles.textfield}
                    required
                    name={"inputText"}
                    value={userText}
                    onChange={handleInput}
                    placeholder="Message Bot AI…"
                  />

                  <Button className={styles.button} type={"submit"}>
                    Ask
                  </Button>
                  <Button
                    className={styles.button}
                    type={"button"}
                    onClick={saveChat}
                  >
                    Save
                  </Button>
                </Box>
              </form>
            </>
          )}
        </>
      )}

      {history && <ConversationHistory  chatHistory={chatHistory}
 ></ConversationHistory>}
    </section>
  );
}

export default Panel;
