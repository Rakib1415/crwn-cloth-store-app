import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../store/directory/directory-selectors';
import MenuItem from '../MenuItem/MenuItem';
import './DirectoryMenu.scss';


const DirectoryMenu = ({sections}) =>{
        return (
            <div className='directory-menu'>
                {
                    sections.map(({id, ...otherSectionProps}) =>
                        <MenuItem  key={id} {...otherSectionProps}></MenuItem>
                    )
               }
            </div>
        );
    }

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);