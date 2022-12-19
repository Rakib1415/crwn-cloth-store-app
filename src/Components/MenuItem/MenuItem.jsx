import React from 'react';
import { useHref, useNavigate } from 'react-router-dom';
import { BackgroundImageContainer, ContentContainer, ContentSubtitle, ContentTitle, MenuItemContainer } from './MenuItem-styles';


const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    const navigate = useNavigate();
    const href = useHref();
    return (
        <MenuItemContainer size={size} onClick={() => navigate(`${href}${linkUrl}`)}>
            <BackgroundImageContainer className='background-image' imageUrl={imageUrl}/>
                <ContentContainer>
                    <ContentTitle>{title.toUpperCase()}</ContentTitle>
                    <ContentSubtitle>SHOP NOW</ContentSubtitle>
                </ContentContainer>
        </MenuItemContainer>
    );
};

export default MenuItem;