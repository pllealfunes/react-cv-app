import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';

export default function Results(props) {
    return (
        <div className='geninfo-container'>
            {props.degree}
        </div>
    );
}