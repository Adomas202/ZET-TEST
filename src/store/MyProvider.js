import React, {Component} from 'react';
const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        text: ""
    }

    render() {
        return(
            <MyContext value="Kiekis">
                {this.props.childer}
            </MyContext>
        )
    }
}

export default MyProvider;