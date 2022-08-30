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
        description: "",
        date: ""
    });
    const [results, setResults] = React.useState("")
    const [isSubmitted, setSubmitForm] = React.useState(false);

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
                date: ""
            }
        });
    }


    function editResume() {
        setFormData(results);
    }



    return (
        <div className='form-container'>
            <h1>General Information</h1>
            <form onSubmit={handleSubmit}>
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
                    name='date'
                    placeholder='Time of Work'
                    onChange={handleChange}
                    value={formData.date}
                />
                <textarea
                    name="description"
                    placeholder='Description'
                    onChange={handleChange}
                    value={formData.description}
                />
                <button>Submit</button>
            </form>
            {isSubmitted && < Results {...results} />}
        </div>
    );
}