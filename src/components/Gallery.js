import React, { Component } from 'react';
import UploadImage from './UploadImage';
import ImageList from './Images/ImageList';

class Gallery extends Component {
    render() {
        return(
            <React.Fragment>
                <UploadImage></UploadImage>
                <ImageList></ImageList>
            </React.Fragment>
        )
    }
}

export default Gallery;