import React from "react";
import './Header.css';
import { Avatar, Button, IconButton } from '@mui/material';
import avatarImg from './avatar.jpg';
import {
    ChatRounded,
    DonutLargeRounded,
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
                    <Avatar alt="avatar" src={'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=360'} />
                </Button>
                <div className="header__left-buttons">
                    <IconButton >
                        <Groups2Rounded />
                    </IconButton>
                    <IconButton >
                        <DonutLargeRounded />
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