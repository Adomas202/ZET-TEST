import React, { Component } from 'react';
import Image from './Image';

class ImageList extends Component {
    constructor() {
        super();

        this.state = {
            imageList: JSON.parse(localStorage.getItem('image'))
        }
    }

    addItem() {
        if (localStorage.getItem('image') == null) {
            const list = [];
            list.push(this.state.address);
            localStorage.setItem('image', JSON.stringify(list));
        } else {
            const list = JSON.parse(localStorage.getItem('image'));
            list.push(this.state.address);
            localStorage.setItem('image', JSON.stringify(list));
        }
        this.setState({favouritesList: JSON.parse(localStorage.getItem('image'))});
    }

    render() {
        return(
            <div>
                <Image></Image>
            </div>
        )
    }
}

export default ImageList;