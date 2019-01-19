import React, { Component } from 'react';
import Form from './Form';

class UploadImage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <h1>H1 TEST</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        </p>
                        <hr></hr>
                        <Form></Form>
                    </div>
                    <hr/>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        )
    }
}

export default UploadImage;