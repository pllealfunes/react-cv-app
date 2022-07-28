import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Education() {
    const [edFormData, setEdFormData] = React.useState({
        schoolName: "",
        degree: "",
        date: ""
    });

    //console.log(edFormData);

    function handleChange(event) {
        setEdFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        });
    }

    return (
        <div className='edinfo-container'>
            <h1>General Information</h1>
            <form className='edInfoForm'>
                <input
                    type='text'
                    name='schoolName'
                    placeholder='School Name'
                    onChange={handleChange}
                    value={edFormData.schoolName}
                />
                <input
                    type='text'
                    name='degree'
                    placeholder='Title of Study'
                    onChange={handleChange}
                    value={edFormData.degree}
                />
                <input
                    type='text'
                    name='date'
                    placeholder='Date of Study'
                    onChange={handleChange}
                    value={edFormData.date}
                />
            </form>
        </div>
    );
}