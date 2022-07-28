import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';

export default function General(props) {
    //console.log(props)
    /*const [genFormData, setGenFormData] = React.useState({
        fullName: "",
        email: "",
        phone: "",
        schoolName: "",
        degree: "",
        date: "",
        companyName: "",
        title: "",
        description: "",
        date: ""
    });

    console.log(genFormData);

    function handleChange(event) {
        setGenFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
    }*/

    return (
        <div className='geninfo-container'>
            {props.degree}
        </div>
    );
}