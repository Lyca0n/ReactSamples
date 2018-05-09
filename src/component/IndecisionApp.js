
import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import Header from './Header';

export default class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            options: props.options
        };
    }
    componentDidMount(){
        try{
            const json =localStorage.getItem('options');
            const options = JSON.parse(json);
            this.setState(() => ({options}));
            console.log('component  did mount');            
        }catch(e){
            //nothing
        }

    }    
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json =JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('component did update');
        }        
    }
    componentWillUnmount(){

    }
    handleDeleteOptions(){

        this.setState(()=>({ options: [] }));
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=> optionToRemove !== option)
        }));
        console.log('hdo', option);
    }
    handlePick(){
        const rand = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[rand]);
    }
    handleAddOption(option){  
        if(!option){
            return 'enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'Item exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));        
    }
    render(){
        const subtitle ='Subtitile'
       
        return (
            <div>
                <Header  subtitle={subtitle} />
                <Action 
                handlePick={this.handlePick}
                hasOptions={this.state.options.length>0}
                />
                <Options 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption={this.handleAddOption} 
                />
            </div>
        );
    }
}
IndecisionApp.defaultProps={
    options : []
};