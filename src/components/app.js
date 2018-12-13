import React from 'react';
import Table from './table';

const students = [
    {
        name: 'Wolverine',
        course: 'How to slice people in half',
        grade: 85,
    },
    {
        name: 'Spider Man',
        course: 'Web slinging',
        grade: 100
    },
    {
        name: 'Your boy',
        course: 'How to be a homie',
        grade: 69
    }
];

export default()=>{
    return (
        <div className = "container">
            <h1> Student Grade Table</h1>
            <Table data = {students}/>
        </div>
        )
}