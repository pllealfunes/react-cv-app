import React from 'react';
import Results from './Results';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';



export default function Form() {

    let btnId = [1, 2, 3, 4];

    const [genData, setGenData] = React.useState({
        fullName: "",
        email: "",
        phone: ""
    });

    const [educationData, setEdData] = React.useState([]);
    const [exData, setExData] = React.useState([]);
    const [results, setResults] = React.useState("")
    const [isSubmitted, setSubmitForm] = React.useState(false);
    const [disableEdit, setDisableEdit] = React.useState(false);
    const [disableSubmit, setDisableSubmit] = React.useState(false);

    const handleGenChange = (event) => {
        setGenData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        });
    }

    const handleEdChange = (index, event) => {
        const data = [...educationData];
        data[index][event.target.name] = event.target.value;
        setEdData(data);
    };


    const handleExChange = (index, event) => {
        const data = [...exData];
        data[index][event.target.name] = event.target.value;
        setExData(data);
    };

    const handleAddEntry = (id) => {
        if (id === 2) {
            const newEdInput = {
                schoolName: "",
                degree: "",
                gradDate: ""
            };
            setEdData([...educationData, newEdInput]);
        } else if (id === 4) {
            const newExInput = {
                companyName: "",
                title: "",
                dateWorked: "",
                description: ""
            };
            setExData([...exData, newExInput]);
        }
    };

    const edRead = () => {
        if (educationData.length !== 0) {
            return educationData.map((input, index) => {
                return (
                    <Box key={index}
                        sx={{
                            my: 3
                        }}>
                        <TextField
                            fullWidth
                            id='filled-basic'
                            label='School Name'
                            variant='filled'
                            margin='dense'
                            type='text'
                            name='schoolName'
                            onChange={event => handleEdChange(index, event)}
                            value={input.schoolName}
                        />
                        <TextField
                            fullWidth
                            id='filled-basic'
                            label='Title of Study'
                            variant='filled'
                            margin='dense'
                            type='text'
                            name='degree'
                            onChange={event => handleEdChange(index, event)}
                            value={input.degree}
                        />
                        <TextField
                            fullWidth
                            id='filled-basic'
                            label='Date of Study'
                            variant='filled'
                            margin='dense'
                            type='text'
                            name='gradDate'
                            onChange={event => handleEdChange(index, event)}
                            value={input.gradDate}
                        />
                        <div>
                            <Button variant="contained" color="error" size="small" startIcon={<DeleteIcon />} onClick={() => handleRemoveInput(index, btnId[0])}>Remove</Button>
                        </div>
                    </Box>
                )
            })
        }
    }

    const exRead = () => {
        if (exData.length !== 0) {
            return exData.map((input, index) => {
                return (
                    <Box key={index}
                        sx={{
                            my: 3
                        }}
                    >
                        <TextField
                            fullWidth
                            id='filled-basic'
                            label='Company Name'
                            variant='filled'
                            margin='dense'
                            type='text'
                            name='companyName'
                            onChange={event => handleExChange(index, event)}
                            value={input.companyName}
                        />
                        <TextField
                            fullWidth
                            id='filled-basic'
                            label='Position Title'
                            variant='filled'
                            margin='dense'
                            type='text'
                            name='title'
                            onChange={event => handleExChange(index, event)}
                            value={input.title}
                        />
                        <TextField
                            fullWidth
                            id='filled-basic'
                            label='Time Worked'
                            variant='filled'
                            margin='dense'
                            type='text'
                            name='dateWorked'
                            onChange={event => handleExChange(index, event)}
                            value={input.dateWorked}
                        />
                        <TextField
                            multiline
                            fullWidth
                            margin='normal'
                            variant='outlined'
                            rows={5}
                            rowsmax={10}
                            name="description"
                            placeholder='Description'
                            type='text'
                            onChange={event => handleExChange(index, event)}
                            value={input.description}
                        />
                        <div>
                            <Button variant="contained" color="error" size="small" startIcon={<DeleteIcon />} onClick={() => handleRemoveInput(index, btnId[2])}>Remove</Button>
                        </div>
                    </Box>
                )
            })
        }
    }

    const handleRemoveInput = (index, id) => {
        if (id === 1) {
            const educationEntry = [...educationData];
            educationEntry.splice(index, 1);
            setEdData(educationEntry);
        }
        else if (id === 3) {
            const exEntry = [...exData];
            exEntry.splice(index, 1);
            setExData(exEntry);
        }
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        setResults({
            basic: genData,
            academic: educationData,
            experience: exData
        });
        setSubmitForm(true);
        setDisableEdit(false);
        setDisableSubmit(true);
        setGenData(() => {
            return {
                fullName: "",
                email: "",
                phone: ""
            }
        });
        setEdData(() => {
            return [{
                schoolName: "",
                degree: "",
                gradDate: ""
            }]
        });
        setExData(() => {
            return [{
                companyName: "",
                title: "",
                dateWorked: "",
                description: ""
            }]
        });

    }

    const editResume = (e) => {
        setGenData(results.basic);
        setEdData(results.academic);
        setExData(results.experience);
        setDisableEdit(true);
        setDisableSubmit(false);
    }


    return (
        <Grid
            className='formContainer'
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                component="form"
                onClick={handleSubmit}
                autoComplete="off"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    bgcolor: '#eeeeee',
                    px: 15,
                    py: 5,
                    my: 5,
                    boxShadow: 2,
                    borderRadius: 2,
                    '& button': { m: 1 },
                }}>
                <div className='genInfo'>
                    <h2>General Information</h2>
                    <TextField
                        fullWidth
                        id='filled-basic'
                        label='Full Name'
                        variant='filled'
                        margin='dense'
                        type='text'
                        name='fullName'
                        onChange={handleGenChange}
                        value={genData.fullName}
                    />
                    <TextField
                        fullWidth
                        id='filled-basic'
                        label='Email'
                        variant='filled'
                        margin='dense'
                        type='text'
                        name='email'
                        onChange={handleGenChange}
                        value={genData.email}
                    />
                    <TextField
                        fullWidth
                        id='filled-basic'
                        label='Phone'
                        variant='filled'
                        margin='dense'
                        type='tel'
                        name='phone'
                        placeholder='Phone Number'
                        onChange={handleGenChange}
                        value={genData.phone}
                    />
                </div>
                <Divider variant="middle" />
                <div className='edInfo'>
                    <h2>Education</h2>
                    <Button variant="contained" color="warning" size="small" startIcon={<AddCircleOutlineIcon />} onClick={() => handleAddEntry(btnId[1])}>ADD</Button>
                    {edRead()}
                </div>
                <Divider variant="middle" />
                <div className='pacInfo'>
                    <h2>Experience</h2>
                    <Button variant="contained" color="warning" size="small" startIcon={<AddCircleOutlineIcon />} onClick={() => handleAddEntry(btnId[3])}>Add</Button>
                    {exRead()}
                </div>
                <Button variant="contained" color="success" disabled={disableSubmit}>Submit</Button>
            </Box>
            {isSubmitted && < Results results={results} editResume={editResume} disableEditBtn={disableEdit} />}
        </Grid>
    );
}