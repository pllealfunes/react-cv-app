import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';

export default function Results(props) {
    const [results, setResults] = React.useState("")

    setResults(prevResults => {
        if (prevResults === props) {

        }
    })

    return (
        <div className='geninfo-container'>
            {formData.degree}
        </div>
    );
}