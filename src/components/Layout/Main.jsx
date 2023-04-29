import React from 'react';
import Header from '../header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Shared/leftnav/LeftNav';
import RightNav from '../../Shared/Rightnav/RightNav';
import {
    Outlet
} from "react-router-dom";
import Navigationvar from '../../Shared/NavigationBar/Navigationvar';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navigationvar></Navigationvar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;