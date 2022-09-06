import React from 'react';
import ReactDOM from 'react-dom/client';
import Results from './Results';

export default function Form() {
    let btnId = [1, 2, 3, 4];

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
    const [educationData, setEdData] = React.useState([{
        schoolName: "",
        degree: "",
        gradDate: ""
    }]);
    const [paData, setPaData] = React.useState([{
        companyName: "",
        title: "",
        dateWorked: "",
        description: ""
    }]);
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

    const handleAddEd = (id) => {
        if (id == 2) {
            const newEdInput = {
                schoolName: "",
                degree: "",
                gradDate: ""
            };
            setEdData([...educationData, newEdInput]);
        } else if (id == 4) {
            const newPaInput = {
                companyName: "",
                title: "",
                dateWorked: "",
                description: ""
            };
            setPaData([...paData, newPaInput]);
        }
    };

    const handleRemoveEd = (index, id) => {
        if (id == 1) {
            const educationEntry = [...educationData];
            educationEntry.splice(index, 1);
            setEdData(educationEntry);
        }
        else if (id == 3) {
            const paEntry = [...paData];
            paEntry.splice(index, 1);
            setPaData(paEntry);
        }
    };

    const handleEdChange = (index, event) => {
        const data = [...educationData];
        data[index][event.target.name] = event.target.value;
        setEdData(data);
    };

    const handlePaChange = (index, event) => {
        const data = [...paData];
        data[index][event.target.name] = event.target.value;
        setPaData(data);
    };



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
                    {educationData.map((input, index) => {
                        return (
                            <div key={index}>
                                <input
                                    type='text'
                                    name='schoolName'
                                    placeholder='School Name'
                                    onChange={event => handleEdChange(index, event)}
                                    value={input.schoolName}
                                />
                                <input
                                    type='text'
                                    name='degree'
                                    placeholder='Title of Study'
                                    onChange={event => handleEdChange(index, event)}
                                    value={input.degree}
                                />
                                <input
                                    type='text'
                                    name='gradDate'
                                    placeholder='Date of Study'
                                    onChange={event => handleEdChange(index, event)}
                                    value={input.gradDate}
                                />
                                <button type='button' onClick={() => handleRemoveEd(index, btnId[0])}>Remove</button>
                            </div>
                        )
                    })}
                    <button type='button' onClick={() => handleAddEd(btnId[1])}>Add More..</button>

                </div>
                <div className='pacInfo'>
                    <h2>Practical Experience</h2>
                    {paData.map((input, index) => {
                        return (
                            <div key={index}>
                                <input
                                    type='text'
                                    name='companyName'
                                    placeholder='Company Name'
                                    onChange={event => handlePaChange(index, event)}
                                    value={input.companyName}
                                />
                                <input
                                    type='text'
                                    name='title'
                                    placeholder='Position Title'
                                    onChange={event => handlePaChange(index, event)}
                                    value={input.title}
                                />
                                <input
                                    type='text'
                                    name='dateWorked'
                                    placeholder='Time of Work'
                                    onChange={event => handlePaChange(index, event)}
                                    value={input.dateWorked}
                                />
                                <textarea
                                    name="description"
                                    placeholder='Description'
                                    onChange={event => handlePaChange(index, event)}
                                    value={input.description}
                                />
                                <button type='button' onClick={() => handleRemoveEd(index, btnId[2])}>Remove</button>
                            </div>
                        )
                    })}
                    <button type='button' onClick={() => handleAddEd(btnId[3])}>Add More..</button>
                </div>
                <button className='submitBtn' disabled={disableSubmit}>Submit</button>
            </form>
            {isSubmitted && < Results {...results} editResume={editResume} disableEditBtn={disableEdit} />}
        </div>
    );
}