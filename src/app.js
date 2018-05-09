import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './component/IndecisionApp';

ReactDOM.render(<IndecisionApp options={['option1','options2']} />,document.getElementById('app'));
