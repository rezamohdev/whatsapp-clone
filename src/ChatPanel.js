import React from "react";
import "./ChatPanel.css";
import { Avatar, IconButton } from "@mui/material";
import { MoreVertRounded, SearchRounded } from "@mui/icons-material";
function ChatPanel() {
    return (
        <div className="chat-panle">
            <div className="chat-panel__header">
                <div className="chat-panel__user-info">
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
            <div className="chat-panel__footer"></div>
        </div>
    )
}
export default ChatPanel