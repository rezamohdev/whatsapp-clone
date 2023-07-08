import React from "react";
import "./ChatPanel.css";
import { Avatar, IconButton, Input } from "@mui/material";
import {
    ArrowBack,
    AttachFileRounded,
    Mic,
    MoodRounded,
    MoreVertRounded,
    SearchRounded,
    Send
} from "@mui/icons-material";
import { Link } from 'react-router-dom';
function ChatPanel() {
    const [isTyping, setIsTyping] = React.useState(false);
    const handleInputChange = (e) => {
        setIsTyping(true);
        if (e.target.value === '') {
            setIsTyping(false);
        }
    }
    return (
        <div className="chat-panle">
            <div className="chat-panel__header">

                <div className="chat-panel__user-info">
                    <Link to='/'>
                        <IconButton>
                            <ArrowBack />
                        </IconButton>
                    </Link>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZN_57AvumUsDPjjpQcG_KQ9s128xUJeZQKX0EZV8IETM8MMpaZRa_gsz8407BskkI8ok&usqp=CAU" />
                    <div className="chat-panel__user-info-sub">
                        <span className="chat-panel__user-title">User name</span>
                        <span className="chat-panel__user-last-seen">last seen today</span>
                    </div>

                </div>
                <div className="chat-pnale__actions">
                    <IconButton><SearchRounded /></IconButton>
                    <IconButton><MoreVertRounded /></IconButton>
                </div>
            </div>
            <div className="chat-panel__body">
            </div>
            <div className="chat-panel__footer footer">
                <IconButton>
                    <MoodRounded className="footer__emoji-button" />
                </IconButton>
                <IconButton>
                    <AttachFileRounded className="footer__attachment-button" />
                </IconButton>
                <Input className="footer__input" placeholder="Type a message" onChange={handleInputChange} />
                {isTyping ? (
                    <IconButton>
                        <Send className="footer__send-button" />
                    </IconButton>) : <IconButton>
                    <Mic className="footer__mic-button" />
                </IconButton>}

            </div>
        </div>
    )
}
export default ChatPanel