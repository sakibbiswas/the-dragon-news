import React from 'react';
import Header from '../header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Shared/leftnav/LeftNav';
import RightNav from '../../Shared/Rightnav/RightNav';
import {
    Outlet
} from "react-router-dom";

const Newlayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
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

export default Newlayout;