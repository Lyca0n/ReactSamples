import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options != null) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //nothing
        }

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
    }
    handleDeleteOptions = () => {

        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick = () => {
        const rand = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({ selectedOption: this.state.options[rand] }));
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Item exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }
    render() {
        const subtitle = 'Subtitile'
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        handlePick={this.handlePick}
                        hasOptions={this.state.options.length > 0}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                </div>
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options: []
}