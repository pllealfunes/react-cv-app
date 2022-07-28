import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Experience() {
    const [exFormData, setExFormData] = React.useState({
        companyName: "",
        title: "",
        description: "",
        date: ""
    });

    // console.log(exFormData);

    function handleChange(event) {
        setExFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        });
    }

    return (
        <div className='exinfo-container'>
            <h1>General Information</h1>
            <form className='exInfoForm'>
                <input
                    type='text'
                    name='companyName'
                    placeholder='Company Name'
                    onChange={handleChange}
                    value={exFormData.companyName}
                />
                <input
                    type='text'
                    name='title'
                    placeholder='Position Title'
                    onChange={handleChange}
                    value={exFormData.title}
                />
                <input
                    type='text'
                    name='date'
                    placeholder='Time of Work'
                    onChange={handleChange}
                    value={exFormData.date}
                />
                <textarea
                    name="description"
                    placeholder='Description'
                    onChange={handleChange}
                    value={exFormData.comments}
                />
            </form>
        </div>
    );
}