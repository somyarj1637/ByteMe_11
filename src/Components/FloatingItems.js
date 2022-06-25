import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import Typed from 'react-typed';

export default function floatingItems() {
    return (
        <>
            <div className="container first my-5 rounded ">
                <div className="container row no-gutters" style={{ justifyContent: 'center' }}>
                    <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                        <Card.Img variant="top" src="temp1.png" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>
                                <Typed
                                    strings={['Handy Mask', 'Bull Craft']}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop
                                />
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" className='bg-primary' style={{textAlign:'center'}}><b>CHECK NOW !</b></Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                        <Card.Img variant="top" src="temp2.png" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>
                                <Typed
                                    strings={['Handy Mask', 'Wall Hanging Craft']}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop
                                />
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" className='bg-primary' style={{textAlign:'center'}}><b>CHECK NOW !</b></Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                        <Card.Img variant="top" src="temp3.png" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>
                                <Typed
                                    strings={['Handy Mask', 'Blue Bull Hanging']}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop
                                />
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" className='bg-primary' style={{textAlign:'center'}}><b>CHECK NOW !</b></Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="container second my-5 rounded ">
                <div className="container row no-gutters" style={{ justifyContent: 'center' }}>
                    <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                        <Card.Img variant="top" src="temp1.png" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>
                                <Typed
                                    strings={['Handy Mask', 'Bull Craft']}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop
                                />
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" className='bg-primary' style={{textAlign:'center'}}><b>CHECK NOW !</b></Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                        <Card.Img variant="top" src="temp2.png" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>
                                <Typed
                                    strings={['Handy Mask', 'Wall Hanging Craft']}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop
                                />
                            </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary" className='bg-primary' style={{textAlign:'center'}}><b>CHECK NOW !</b></Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                        <Card.Img variant="top" src="temp3.png" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>
                                <Typed
                                    strings={['Handy Mask', 'Blue Bull Hanging']}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop
                                />
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" className='bg-primary' style={{textAlign:'center'}}><b>CHECK NOW !</b></Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}