import React from 'react';
import { useHref, useNavigate } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    const navigate = useNavigate();
    const href = useHref();
    return (
        <div className={`${size} menu-item`} onClick={() => navigate(`${href}${linkUrl}`)}>
            <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}></div>
                    <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
    );
};

export default MenuItem;