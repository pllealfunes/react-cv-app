import React from 'react';
import ReactDOM from 'react-dom/client';

export default function General() {

    const [genFormData, setGenFormData] = React.useState({
        fullName: "",
        email: "",
        phone: ""
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

    return (
        <div className='geninfo-container'>
            <h1>General Information</h1>
            <form className='genInfoForm'>
                <input
                    type='text'
                    name='fullName'
                    placeholder='Full Name'
                    onChange={handleChange}
                    value={genFormData.fullName}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={handleChange}
                    value={genFormData.email}
                />
                <input
                    type='tel'
                    name='phone'
                    placeholder='Phone Number'
                    onChange={handleChange}
                    value={genFormData.phone}
                />
            </form>
        </div>
    );
}