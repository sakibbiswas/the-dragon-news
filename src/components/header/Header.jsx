import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { Authcontext } from '../../providers/Authprovider';


const Header = () => {

    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />

                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>

                <p>{moment().format("dddd, MMMM D, YYYY ")}</p>
            </div>

            <div className="d-flex">
                <Button variant="danger" >Latest</Button>
                <Marquee className='text-danger' speed={56}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;