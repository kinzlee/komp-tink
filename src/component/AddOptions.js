import React from 'react';

export default class AddOptions extends React.Component{
    state = {
        error: undefined
    }
     handleAddOption = (elt) => {
        elt.preventDefault();
        const option = elt.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if(!error) {
            elt.target.elements.option.value = '';
        }
    };  
    render() {
        return (
            <div>
            {this.state.error && <p className="add-option-error" >{this.state.error}</p>}
                <form  className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">add option</button>
                </form>
            </div>
        )
    }
};
