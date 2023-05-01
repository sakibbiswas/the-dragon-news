import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../providers/Authprovider';
import { useState } from 'react';

const Register = () => {
    const { createuser } = useContext(Authcontext);
    const [Accepted, setAccepted] = useState(false);
    const handelregister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(email, password, photo, name);
        createuser(email, password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handelaccept = event => {
        setAccepted(event.target.checked)
    }
    return (

        <Container className='mx-auto w-25'>
            <h3>Please Register</h3>
            <Form onSubmit={handelregister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name='name' required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" placeholder="Enter photo" name='photo' required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handelaccept}
                        type="checkbox"
                        name='Accept'
                        label={<>Accept  <Link to='/terms'>Terms and and condition</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!Accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-success ">
                    Already have an account ?  <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;