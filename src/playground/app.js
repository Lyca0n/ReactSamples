console.log('app is running');

const Header =(props)=>{        
    return (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
    );
};
Header.defaultProps ={
    title:'Indecision'
};
const Action = (props)=>{
   
        return (
            <div>
                <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >What Should I do</button>
            </div>
        );
    
};

const Options = (props)=>{        
    return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length ===0 && <p>Please add and option to get started</p>}
    {props.options.map((option) => (
        <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
        />
    ))}
    </div>
    );
};
const Option =(props)=>{
    return (
        <div>
            {props.optionText}
            <button 
            onClick={(e)=>{props.handleDeleteOption(props.optionText)}} 
            >Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>({ error }));
        if(!error)
        e.target.elements.option.value='';
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

class IndecisionApp extends React.Component{
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

ReactDOM.render(<IndecisionApp options={['option1','options2']} />,document.getElementById('app'));
