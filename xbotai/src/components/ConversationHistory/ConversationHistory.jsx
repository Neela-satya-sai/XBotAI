import React, { useEffect } from "react";
import { Box } from "@mui/material";
import ChatCard from "../ChatCard/ChatCard";
import EachConversation from "../EachConversation/EachConversation";

function ConversationHistory({ chatHistory }) {
  useEffect(() => {
    // const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    console.log(chatHistory);
  }, []);

  return (
    <Box>
      {chatHistory && chatHistory.length > 0 ? (
        chatHistory.map((each, idx) => (
          <EachConversation key={idx} eachConversation={each}>
            {" "}
          </EachConversation>
        ))
      ) : (
        <div>No Chat History found</div>
      )}
    </Box>
  );
}

export default ConversationHistory;
