import React from "react";
import './Header.css';
import { Avatar, Button, IconButton } from '@mui/material';
import avatarImg from './avatar.jpg';
import {
    ChatRounded,
    Groups2Rounded,
    HistoryToggleOffRounded,
    MoreVertRounded
} from "@mui/icons-material";
import Searchbar from "./Searchbar";

function Header() {
    return (
        <div className="header-container">
            <div className="header">
                <Button>
                    <Avatar alt="avatar" src={avatarImg} />
                </Button>
                <div className="header__left-buttons">
                    <IconButton >
                        <Groups2Rounded />
                    </IconButton>
                    <IconButton >
                        <HistoryToggleOffRounded />
                    </IconButton>
                    <IconButton>
                        <ChatRounded />
                    </IconButton>
                    <IconButton>
                        <MoreVertRounded />
                    </IconButton>
                </div>
            </div>
            <Searchbar />
        </div>
    );
}
export default Header;