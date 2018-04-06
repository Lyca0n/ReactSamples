console.log('app is running');


const appRoot = document.getElementById('app');
const app = {
    title: 'Indecision App',
    subtitle:'sumthin',
    options: []
};

const onFromSubmit = (e) => {
    e.preventDefault();
    console.log('form');
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value ='';
        render();
    }
};
const removeAll = () => {
    app.options = [];
    render();
};
const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option =  app.options[randomNum];
    alert(option);
};

const numbers = [55,101,1000];
const render = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>        
        {app.subtitle && <p>{app.subtitle} </p>}   
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do? </button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
           </ol>
           <form onSubmit={onFromSubmit}>
               < input type="text" name="option"/>
               <button>Add Option</button>
               <button onClick={removeAll}>Remove All</button>
               {
                   numbers.map((number) => {
                       return <p key={number}>Number: {number}</p>
                   })
               }
           </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

render();