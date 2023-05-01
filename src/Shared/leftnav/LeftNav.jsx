import React, { useEffect, useState, } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import pic1 from '../../assets/1.png'
import pic2 from '../../assets/2.png'
import pic3 from '../../assets/3.png'
import {
    Link
} from "react-router-dom";
const LeftNav = () => {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        fetch('https://the-news-server-sakibbiswas.vercel.app/Categories')
            .then(res => res.json())
            .then(data => setcategories(data))
    }, [])
    return (
        <div >
            <h3>All category</h3>
            <div className='ps-4'>

                {
                    categories.map(category => <p
                        key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>

                    </p>)

                }
            </div>
            <Row xs={1} md={2} lg={1} className="g-4 mt-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={pic1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={pic2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={pic3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </div>
    );
};

export default LeftNav;