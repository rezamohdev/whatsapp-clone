import React from 'react';
import { Avatar } from '@mui/material';
import './UserCard.css';
import {
    DoneAllRounded,
    DoneRounded,
    ImageRounded,
    MicRounded,
    VideocamRounded,
} from '@mui/icons-material';
function getIcon(attach) {
    if (attach === "image") {
        return (<ImageRounded className='attach' />)
    } else if (attach === 'voice') {
        return (<MicRounded className='attach' />)
    } else if (attach === 'video') {
        return (<VideocamRounded className='attach' />)
    }
}
function UserCard({ time, userName, message, attach, delivered, seen }) {

    return (
        <div className='user-card'>
            <Avatar />
            <div className='card user-card__chat-info'>
                <div className='card__headr'>
                    <span className='card__title'>{userName}</span>
                    <span className='card__time'>{time}</span>
                </div>
                <span className='card__detail'>
                    {seen === true && <DoneAllRounded className='card__message-seen attach' /> ||
                        delivered === true && <DoneRounded className='attach' />
                    }
                    {getIcon(attach)}
                    <p className='card__message'>{message}</p>
                </span>
            </div>
        </div>
    );
}
export default UserCard;