import React, { useState, useEffect, useRef } from "react";
import "./Comment.css";
import Like from "./Images/Like.svg";
import Voice from "./Images/voice.svg";
import VerticalLine from "./Images/Vertical-line.svg";
import ThumbsUp from "./Images/Thumbs-up.svg";

function Comment() {
  const messageData = [
    {
      id: "1",
      name: "Jessica Rose",
      message: "Do you guys really think this item has good value?",
      replies: [
        // { id: "1.1", name: "John Doe", message: "Yes, I believe so." },
        // { id: "1.2", name: "Alice Smith", message: "Not really." },
      ],
    },
    {
      id: "2",
      name: "Rayan Jackson",
      message: "It really is a masterpiece !!",
      replies: [
        {
          id: "2.1",
          name: "Rayan Jackson",
          message: "It really is a masterpiece !!",
        },
      ],
    },
  ];

  const [messages, setMessages] = useState(messageData);
  const [input, setInput] = useState("");
  const [replyClickedIndex, setReplyClickedIndex] = useState(null);
  const [like, setLike] = useState(messages.map(() => false));

  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    const scrollOptions = {
      top: chatContainer.scrollHeight,
      behavior: "smooth",
    };
    chatContainer.scrollTo(scrollOptions);
  }, [messages]);

  const addMessage = () => {
    if (input.trim() !== "") {
      const newMessage = {
        id: String(messages.length + 1),
        name: "Trevor",
        message: input,
        replies: [],
      };

      setMessages([...messages, newMessage]);
      setInput("");
      setLike([...like, false]);
    }
  };

  const sendReply = () => {
    if (input.trim() !== "") {
      const updatedMessages = [...messages];
      const parentMessageId = updatedMessages[replyClickedIndex].id;

      const repliedMessage = {
        id: `${parentMessageId}.${
          updatedMessages[replyClickedIndex].replies.length + 1
        }`,
        name: "Trevor",
        message: input,
      };
      updatedMessages[replyClickedIndex].replies.push(repliedMessage);
      setMessages(updatedMessages);
      setInput("");
      setReplyClickedIndex(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (replyClickedIndex !== null) {
        // If replying, add a new reply
        sendReply();
      } else {
        // If not replying, add a new comment
        addMessage();
      }
    }
  };

  const handleReplyClick = (index) => {
    setReplyClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleLike = (id) => {
    setLike((prevLike) => ({ ...prevLike, [id]: !prevLike[id] }));
    console.log(id);
  };
  return (
    <>
      <div id="comment-div">
        <div className="comment-section gp-">
          <div className="chat-section gp-24" id="chat-container">
            {messages.map((message, index) => (
              <div className="send-section gp-12" key={index}>
                <div className="send-header">
                  <div className="gp-8 send-head">
                    <div className="fs-12">{message.name}</div>
                    <div className="fs-8">Now</div>
                  </div>
                  <img
                    src={like[message.id] ? ThumbsUp : Like}
                    alt="like-icon"
                    onClick={() => handleLike(message.id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="send-message">
                  <span className="fs-12">{message.message}</span>
                </div>

                <div>
                  <button
                    className={`fs-12 ${
                      replyClickedIndex === index ? "reply-clicked" : ""
                    }`}
                    onClick={() => handleReplyClick(index)}
                  >
                    Reply
                  </button>
                </div>
                {message.replies && message.replies.length > 0 && (
                  <div className="flex-end gp-12">
                    {message.replies.map((reply, index) => (
                      <>
                        <div className="reply-div gp-24" key={index}>
                          <div className="vertical-line">
                            <img src={VerticalLine} alt="vertical Line"></img>
                          </div>
                          <div className="send-section gp-8">
                            <div className="send-header" key={reply.id}>
                              <div className="gp-8 send-head">
                                <div className="fs-12">{reply.name}</div>
                                <div className="fs-8">Now</div>
                              </div>
                              <img
                                src={like[reply.id] ? ThumbsUp : Like}
                                alt="like-icon"
                                onClick={() => handleLike(reply.id)}
                                style={{ cursor: "pointer" }}
                              />
                            </div>
                            <div className="send-message">
                              <span className="fs-12">{reply.message}</span>
                            </div>
                            <div>
                              <button
                                className="fs-12"
                                onClick={() => handleReplyClick(index)}
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="chat-footer gp-8">
            <div className="chat-input" style={{ width: "100%" }}>
              <input
                type="text"
                placeholder="Comment"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{ color: "#FFF" }}
              ></input>
            </div>
            <div className="voice-div">
              <img src={Voice} alt="voice-icon" />
            </div>
            {/* {replyClickedIndex !== null && (
              <button className="fs-12" onClick={sendReply}>
                Send Reply
              </button>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
