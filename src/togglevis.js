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