/*console.log('app is running');



class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }

}
class Action extends React.Component{
    handlePick(){
        alert('handle pick');
    }

    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do</button>
            </div>
        );
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        //add 'this' binding to handleRemoveAll 
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll(){
        console.log(this.props.options);
        alert('Remove all');
    }
    render(){
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
            {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
            </div>
        );
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

class IndecisionApp extends React.Component{
    
    render(){
        const title ='Indecision App'
        const subtitle ='Subtitile'
        const options= ['one','two','three']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}
class Option extends React.Component{
    render(){
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}




ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));

*/


class Vis extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            toggle: false,
            title: 'Some Title'
        };
        this.toggleVis = this.toggleVis.bind(this);
    }
    toggleVis(){
        this.setState((prevState)=>{
            return {
                toggle:!prevState.toggle
            }
        });
    }
    render(){
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.toggleVis}>{this.state.toggle ? 'hide details' : 'show details'}</button>
                {this.state.toggle && (<div><p>hey, these are some details you can now see!</p></div>)}
            </div>
        );
    }
}

ReactDOM.render(<Vis/>,document.getElementById('app'));