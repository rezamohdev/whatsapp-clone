import React from "react";
import './Header.css';
import {
    Avatar, Button, ClickAwayListener,
    Grow, IconButton, MenuItem, MenuList, Paper, Popper
} from '@mui/material';
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
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
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
                                            <MenuItem onClick={handleClose}>New group</MenuItem>
                                            <MenuItem onClick={handleClose}>New community</MenuItem>
                                            <MenuItem onClick={handleClose}>Starred messages</MenuItem>
                                            <MenuItem onClick={handleClose}>Select chats</MenuItem>
                                            <MenuItem onClick={handleClose}>Steeing</MenuItem>
                                            <MenuItem onClick={handleClose}>Log out</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
            <Searchbar />
        </div>
    );
}
export default Header;