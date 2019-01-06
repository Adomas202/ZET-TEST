import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="">File name</label>
                    <input className="form-control" placeholder="Test"></input>
                    <label for="">Description</label>
                    <textarea className="form-control"></textarea>
                    <label for="">Upload photo</label>
                    <div class="input-group">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"></input>
                            <label class="custom-file-label" for="inputGroupFile01">No file selected</label>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Upload</button>
            </form>
        )
    }
}

export default Form;