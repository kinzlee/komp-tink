import React from 'react';
import AddOptions from '../component/AddOptions';
import Options from '../component/Options';
import Header from '../component/Header';
import Action from '../component/Action';
import OptionModal from '../component/OptionModal';


export default class ThinkingApp extends React.Component{   
    state = {
        options: [],
        selectedOption: undefined
    };

    handlePick = () => {
                const randomNum = Math.floor(Math.random() * this.state.options.length);
                const option = this.state.options[randomNum];
                this.setState(() => ({selectedOption: option}))
    };
N
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption = (optnToRm) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optnToRm !== option;
            })
        }));
    };

    handleAddOption =(option) => {
        if(!option) {
            return 'pls enter a valid option';
        }else if(this.state.options.indexOf(option) > -1) {
            return 'this option already exist';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option)})); 
    }

    handleDeleteSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
         const options = JSON.parse(json);

         if(options) {
         this.setState(() => ({ options }));
          }
        } catch (elt) {

         }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const subtitle = 'Let the computer do the thinking';

        return (
            <div>
         <Header subtitle={subtitle}/>
         <div className="container">
         <Action
         handlePick={this.handlePick} 
         hasOption={this.state.options.length > 0}
         />
         <div className="widget">
         <Options 
         options={this.state.options}
         handleDeleteOptions = {this.handleDeleteOptions}
         handleDeleteOption = {this.handleDeleteOption}
         />
         <AddOptions
         handleAddOption={this.handleAddOption}
         />
         </div>
         
         </div>
         <OptionModal 
         selectedOption={this.state.selectedOption}
         handleDeleteSelectedOption={this.handleDeleteSelectedOption}
         />
            </div>
        );
    };
};

ThinkingApp.defaultProps = {
    options: []
}
