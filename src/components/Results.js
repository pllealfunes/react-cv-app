import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';

export default function Results(props) {
    return (
        <div className='resultsContainer'>
            <div className='geninfo-container'>
                <div>
                    <b>Full Name:</b> {props.results.basic.fullName}
                </div>
                <div>
                    <b>Email:</b> {props.results.basic.email}
                </div>
                <div>
                    <b>Phone:</b> {props.results.basic.phone}
                </div>
            </div>
            <div className='edinfo-container'>
                {props.results.academic.map((academic, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <b>School:</b> {academic.schoolName}
                            </div>
                            <div>
                                <b>Degree:</b> {academic.degree}
                            </div>
                            <div>
                                <b>Date Attended</b> {academic.gradDate}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='pacinfo-container'>
                {props.results.experience.map((experience, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <b>Company Name:</b> {experience.companyName}
                            </div>
                            <div>
                                <b>Pposition Title:</b> {experience.title}
                                <b>Position Title:</b> {experience.title}
                            </div>
                            <div>
                                <b>Date Worked</b> {experience.dateWorked}
                            </div>
                            <div className='descriptionResults'>
                                <b>Description:</b> {experience.description}
                            </div>
                        </div>
                    )
                })}
                <button onClick={props.editResume} disabled={props.disableEditBtn}>Edit</button>
            </div>
        </div>
    );
}