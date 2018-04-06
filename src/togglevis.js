class Vis extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            toggle: false,
            title: 'Some Title'
        };
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