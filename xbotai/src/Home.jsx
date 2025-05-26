import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Stack } from "@mui/material";
import Panel from "./components/Panel/Panel";
import { Form } from "react-router-dom";
import { useState, useEffect } from "react";
import aiRes from "./data/aiResponse.json";
// import FormSubmit from './components/FormSubmit/FormSubmit'

function Home() {
  const [userChat, setUserChat] = useState("");
  const [aiChat, setAiChat] = useState("");
  const [aiResponse, setAiResponse] = useState(aiRes); // aiRes=[]
  const [chatHistory, setChatHistory] = useState([]); //[{each chathistory}, {user:[s1,s2,s3], ai: [s1,s2,s3] }]
  const [conversation, setCoversation] = useState({
    user: [],
    ai: [],
    feedback: "",
  }); //{user:[s1,s2,s3], ai: [s1,s2,s3] feedback:"" }

  useEffect(() => {
    let history = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setChatHistory(history);
  }, []);

  return (
    <div>
      <Stack direction={"row"}>
        <Navbar></Navbar>

        <Panel
          home
          userText={userChat}
          changeUserText={setUserChat}

          aiText={aiChat}
          changeAiText={setAiChat}

          chat={conversation}
          setChat={setCoversation}
          
          chatHistory = {chatHistory}
          setChatHistory = {setChatHistory}

        >
        
        </Panel>
      </Stack>
    </div>
  );
}

export default Home;
