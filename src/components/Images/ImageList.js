import React, { Component } from 'react';
import Image from './Image';
import MyContext from '../../store/MyProvider';

class ImageList extends Component {
    constructor() {
        super();

        this.state = {
            imageList: JSON.parse(localStorage.getItem('image'))
        }
    }

    render() {
        return (
            <MyContext.Consumer>
                {(context) => (
                    <p>Labas</p>
                )}
            </MyContext.Consumer>
        )
    }
}

export default ImageList;