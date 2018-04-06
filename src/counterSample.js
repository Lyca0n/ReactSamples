
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

class Counter extends React.Component{
    render(){
        return (
        <div>
        <h1>Count: {count}</h1>        
        <button onClick={addOne} id="my-id" className="btn btn-default">+1</button>
        <button onClick={minusOne} id="my-id" className="btn btn-default">-1</button>
        <button onClick={reset} id="my-id" className="btn btn-default">Reset</button>
        </div> );
    }

}