import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../store/directory/directory-selectors';
import MenuItem from '../MenuItem/MenuItem';


import { DirectoryMenuContainer } from './DirectoryMenu-styles';


const DirectoryMenu = ({sections}) =>{
        return (
            <DirectoryMenuContainer>
                {
                    sections.map(({id, ...otherSectionProps}) =>
                        <MenuItem  key={id} {...otherSectionProps}></MenuItem>
                    )
               }
            </DirectoryMenuContainer>
        );
    }

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);