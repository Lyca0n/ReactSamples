'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Vis = function (_React$Component) {
    _inherits(Vis, _React$Component);

    function Vis(props) {
        _classCallCheck(this, Vis);

        var _this = _possibleConstructorReturn(this, (Vis.__proto__ || Object.getPrototypeOf(Vis)).call(this, props));

        _this.state = {
            toggle: false,
            title: 'Some Title'
        };
        _this.toggleVis = _this.toggleVis.bind(_this);
        return _this;
    }

    _createClass(Vis, [{
        key: 'toggleVis',
        value: function toggleVis() {
            this.setState(function (prevState) {
                return {
                    toggle: !prevState.toggle
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.state.title
                ),
                React.createElement(
                    'button',
                    { onClick: this.toggleVis },
                    this.state.toggle ? 'hide details' : 'show details'
                ),
                this.state.toggle && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'hey, these are some details you can now see!'
                    )
                )
            );
        }
    }]);

    return Vis;
}(React.Component);

ReactDOM.render(React.createElement(Vis, null), document.getElementById('app'));
