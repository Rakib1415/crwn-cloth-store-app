import React from 'react';

import DirectoryMenu from '../../Components/DirectoryMenu/DirectoryMenu';
import { HomePageContainer } from './HomePage-styles';

const HomePage = () => {
    return (
        <HomePageContainer>
            <DirectoryMenu/>
        </HomePageContainer>
    );
};

export default HomePage;