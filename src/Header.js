import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link, useNavigate } from 'react-router-dom';

function Header({ backButton }) {

    const navigate = useNavigate();
    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => navigate(backButton, { replace: 'true' })}>
                    <ArrowBackIosNewIcon fontSize='large' className='header_icon' />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize='large' className='header_icon' />
                </IconButton>
            )}
            <Link to='/'>
                <img className='header_logo'
                    src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png'
                    alt=''
                />
            </Link>
            <Link to='/chat'>
                <IconButton>
                    <ForumIcon fontSize='large' className='header_icon' />
                </IconButton>
            </Link>

        </div>
    )
}

export default Header;
