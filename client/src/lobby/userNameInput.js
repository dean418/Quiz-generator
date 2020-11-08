import { Component } from 'react';
import { NameContext } from '../context';

class Input extends Component {
    static contextType = NameContext

    constructor() {
        super();

        this.state = {
            value: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({ value: event.target.value });
    }

    submitUsername = () => {
        this.context.setUserName(this.state.value);
    }

    render = () => {
        return (
            <div className='overlay'>
                <div className='inputContainer'>
                    <h3 className="formTitle">Welcome! What is your <span>username?</span> </h3>
                    <form onSubmit={this.submitUsername}>
                        <input type='text' className='userNameInput' onChange={this.handleInputChange} name='input' />
                        <input type='submit' className='submitBtn' value='Join' />
                    </form>
                </div>
            </div>
        )
    }
}

export default Input;