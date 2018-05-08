
/*console.log('app is running');


const appRoot = document.getElementById('app');

let count = 0;
const addOne = () => {
    count++;
    console.log('addOne');
    renderCounterApp();
};
const minusOne = () => {
    count--;
    console.log('minusOne');
    renderCounterApp();
};
const reset = () => {
    count= 0;
    console.log('reset');
    renderCounterApp();
};
const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>        
            <button onClick={addOne} id="my-id" className="btn btn-default">+1</button>
            <button onClick={minusOne} id="my-id" className="btn btn-default">-1</button>
            <button onClick={reset} id="my-id" className="btn btn-default">Reset</button>
        </div>
    );
    ReactDOM.render(template,appRoot);
} ;

renderCounterApp();*/
//REACT COUNTER COMPONENT

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne =this.handleAddOne.bind(this);
        this.handleMinusOne =this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state ={
            count: props.count,
            name: 'someName'
        }
    }
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count+1 
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            };
        });        
    }    
    handleReset(){
        this.setState(()=>{
            return {
                count: 0
            };
        });           
    }
    render(){
        return (
        <div>
        <h1>Count: {this.state.count}</h1>        
        <button onClick={this.handleAddOne} id="my-id" className="btn btn-default">+1</button>
        <button onClick={this.handleMinusOne} id="my-id" className="btn btn-default">-1</button>
        <button onClick={this.handleReset} id="my-id" className="btn btn-default">Reset</button>
        </div> );
    }
}

Counter.defaultProps={
    count: 0
};

ReactDOM.render(<Counter count={8} />,document.getElementById('app'));