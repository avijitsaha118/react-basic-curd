import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Team from './Team';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Update() {
    const [name, setName] = useState('');
    const [rank, setRank] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();
    var index = Team.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Team[index];
        a.Name = name;
        a.Rank = rank;

        history('/curd');
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setRank(localStorage.getItem('Rank'))
        setId(localStorage.getItem('Id'))
    }, [])


    return (
        <div>
            <Form className='d-grid gap-2' style={{ margin: '10rem' }}>
                <Form.Group className='mb-4' controlId='formName'>
                    <Form.Control type='text' placeholder='Enter Team Name' value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-4' controlId='formRank'>
                    <Form.Control type='text' placeholder='Enter Team Rank' value={rank} required onChange={(e) => setRank(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type='submit'>Update</Button>
            </Form>
        </div>
    )
}

export default Update;