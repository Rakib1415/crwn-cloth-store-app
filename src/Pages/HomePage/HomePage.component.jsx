import React from 'react';
import './HomePage.styles.scss';
import DirectoryMenu from '../../Components/DirectoryMenu/DirectoryMenu';

const HomePage = () => {
    return (
        <div className='homepage'>
            <DirectoryMenu></DirectoryMenu>
        </div>
    );
};

export default HomePage;