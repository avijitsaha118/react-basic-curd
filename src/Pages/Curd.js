import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import Team from './Team';
import { Link, useNavigate } from 'react-router-dom';


function Curd() {

    let history = useNavigate();

   const handleUpdate = (id, name, rank) =>{
      localStorage.setItem('Name', name);
      localStorage.setItem('Rank', rank);
      localStorage.setItem('Id', id);
   }

    const handleDelete = (id) => {
        var index = Team.map(function (e) {
            return e.id
        }).indexOf(id);

        Team.splice(index, 1);
        history('/curd');
    }

    return (
        // <div>
        // <h1>Welcome to CURD Opperation!!</h1>
        // </div>

        <Fragment>
            <div style={{ margin: '8rem' }}>
                <Table striped border hover size='sm'>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Rank
                            </th>
                            <th>
                                Opperations
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Team && Team.length > 0
                                ?
                                Team.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Rank}
                                            </td>
                                            <td>
                                                <Link to={'/update'}>
                                                    <Button onClick={() => handleUpdate(item.id, item.Name, item.Rank)}>Update</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                            </td>

                                        </tr>
                                    )
                                })
                                :
                                'No Team Available'
                        }
                    </tbody>

                </Table>
                <br>
                </br>
                <Link to ='/create'>
                    <Button size='lg'>Create</Button>
                </Link>
            </div>
        </Fragment>
    );
};

export default Curd;