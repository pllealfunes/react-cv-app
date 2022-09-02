import React from 'react';
import ReactDOM from 'react-dom/client';
import Results from './Results';

export default function Form() {

    const [formData, setFormData] = React.useState({
        fullName: "",
        email: "",
        phone: "",
        schoolName: "",
        degree: "",
        gradDate: "",
        companyName: "",
        title: "",
        dateWorked: "",
        description: ""
    });
    const [results, setResults] = React.useState("")
    const [isSubmitted, setSubmitForm] = React.useState(false);
    const [disableEdit, setDisableEdit] = React.useState(false);
    const [disableSubmit, setDisableSubmit] = React.useState(false);

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        });
    }



    function handleSubmit(event) {
        event.preventDefault();
        setResults(formData);
        setSubmitForm(true);
        setDisableEdit(false);
        setDisableSubmit(true);
        setFormData(() => {
            return {
                fullName: "",
                email: "",
                phone: "",
                schoolName: "",
                degree: "",
                gradDate: "",
                companyName: "",
                title: "",
                description: "",
                dateWorked: ""
            }
        });
    }


    function editResume(e) {
        setFormData(results);
        setDisableEdit(true);
        setDisableSubmit(false);
    }



    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit}>
                <div className='genInfo'>
                    <h2>General Information</h2>
                    <input
                        type='text'
                        name='fullName'
                        placeholder='Full Name'
                        onChange={handleChange}
                        value={formData.fullName}
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <input
                        type='tel'
                        name='phone'
                        placeholder='Phone Number'
                        onChange={handleChange}
                        value={formData.phone}
                    />
                </div>
                <div className='edInfo'>
                    <h2>Educational Experience</h2>
                    <input
                        type='text'
                        name='schoolName'
                        placeholder='School Name'
                        onChange={handleChange}
                        value={formData.schoolName}
                    />
                    <input
                        type='text'
                        name='degree'
                        placeholder='Title of Study'
                        onChange={handleChange}
                        value={formData.degree}
                    />
                    <input
                        type='text'
                        name='gradDate'
                        placeholder='Date of Study'
                        onChange={handleChange}
                        value={formData.gradDate}
                    />
                </div>
                <div className='pacInfo'>
                    <h2>Practical Experience</h2>
                    <input
                        type='text'
                        name='companyName'
                        placeholder='Company Name'
                        onChange={handleChange}
                        value={formData.companyName}
                    />
                    <input
                        type='text'
                        name='title'
                        placeholder='Position Title'
                        onChange={handleChange}
                        value={formData.title}
                    />
                    <input
                        type='text'
                        name='dateWorked'
                        placeholder='Time of Work'
                        onChange={handleChange}
                        value={formData.dateWorked}
                    />
                    <textarea
                        name="description"
                        placeholder='Description'
                        onChange={handleChange}
                        value={formData.description}
                    />
                </div>
                <button className='submitBtn' disabled={disableSubmit}>Submit</button>
            </form>
            {isSubmitted && < Results {...results} editResume={editResume} disableEditBtn={disableEdit} />}
        </div>
    );
}