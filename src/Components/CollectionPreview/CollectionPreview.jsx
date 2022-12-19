import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.scss';

import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './CollectionPreview-styles';

const CollectionPreview = ({title, items}) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {
                    items.filter((item, idx) => idx < 4)
                        .map(item=> <CollectionItem key={item.id} item ={item}></CollectionItem>)
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}
export default CollectionPreview;