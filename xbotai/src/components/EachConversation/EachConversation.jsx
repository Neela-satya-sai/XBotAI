import React from "react";
import ChatCard from "../ChatCard/ChatCard";
import styles from "./EachConversation.module.css";
import { useState, useEffect } from "react";

function EachConversation({ eachConversation }) {
  //array => {user: Array(3), ai: Array(3), feedback: ''}

  console.log(eachConversation);
  const [finalArray, setFinalArray] = useState([]);

  useEffect(() => {
    let array = [];

    for (let i = 0; i < eachConversation.user.length; i++) {
      array.push({ role: "User", text: eachConversation.user[i] });
      array.push({
        role: "Soul Ai",
        text: eachConversation.ai[i] || "Sorry, did not understand your query!",
      });
    }
    console.log("from eachConversation useeffect", array);
    setFinalArray(array);
  }, []);

  return (
    <>
      <div className={styles.eachConversion_wrapper}>
      {finalArray.map((message, idx) => (
        <ChatCard key={idx} role={message.role} text={message.text} />
      ))}
      </div>
     
    </>
  );
}

export default EachConversation;
