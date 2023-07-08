import React from "react";
import "./ChatPanel.css";
import { Avatar, ClickAwayListener, Grow, IconButton, Input, MenuItem, MenuList, Paper, Popper } from "@mui/material";
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
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const handleInputChange = (e) => {
        setIsTyping(true);
        if (e.target.value === '') {
            setIsTyping(false);
        }
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
    }
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

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
                    <IconButton
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <MoreVertRounded />
                    </IconButton>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                        className="header__menu-button"
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'top-start' ? 'left top' : 'right top',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={open}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                        >
                                            <MenuItem onClick={handleClose}>Contact info</MenuItem>
                                            <MenuItem onClick={handleClose}>Select messages</MenuItem>
                                            <MenuItem onClick={handleClose}>Close chat</MenuItem>
                                            <MenuItem onClick={handleClose}>Disappearing messages</MenuItem>
                                            <MenuItem onClick={handleClose}>Clear messages</MenuItem>
                                            <MenuItem onClick={handleClose}>Delete chat</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
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