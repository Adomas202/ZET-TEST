import React, { Component } from 'react';

const myContext = React.createContext();

class Form extends Component {
    handleSubmit = () => {
        if (localStorage.getItem('place') == null) {
            const list = [];
            list.push(this.state.address);
            localStorage.setItem('place', JSON.stringify(list));
        } else {
            const list = JSON.parse(localStorage.getItem('place'));
            list.push(this.state.address);
            localStorage.setItem('place', JSON.stringify(list));
        }
        this.setState({favouritesList: JSON.parse(localStorage.getItem('place'))});
    }

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