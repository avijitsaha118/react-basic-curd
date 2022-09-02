import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Team from './Team';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Create() {

    const [name, setName] = useState('');
    const [rank, setRank] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        let a = name,
            b = rank;

        Team.push({ id: uniqueId, Name: a, Rank: b });

        history('/curd');
    }

    return (
        <div>
            <Form className='d-grid gap-2' style={{ margin: '10rem' }}>
                <Form.Group className='mb-4' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter Team Name' required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-4' controlId='formRank'>
                    <Form.Control type='text' placeholder='Enter Team Rank' required onChange={(e) => setRank(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type='submit'>Enter</Button>
            </Form>
        </div>
    );
};

export default Create;