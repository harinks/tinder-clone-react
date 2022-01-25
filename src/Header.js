import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link, useNavigate } from 'react-router-dom';

function Header(props) {

    const navigate = useNavigate();
    return (
        <div className='header'>
            {props.backButton ? (
                <IconButton onClick={() => navigate('/')}>
                    <ArrowBackIosNewIcon fontSize='large' className='header_icon' />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize='large' className='header_icon' />
                </IconButton>
            )}
            <img className='header_logo'
                src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png'
                alt=''
            />
            <Link to='/chat'>
                <IconButton>
                    <ForumIcon fontSize='large' className='header_icon' />
                </IconButton>
            </Link>

        </div>
    )
}

export default Header;
