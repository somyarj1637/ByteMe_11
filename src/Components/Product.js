import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import source1 from './Images/p1.jpg'
export default function Product() {

    const [myCount, setCount] = useState(0);
    const count = () => {
        if (myCount === 0) {

            setCount(1);
        } else {
            setCount(0);
        }
    }
    const [myCount1, setCount1] = useState(0);
    const count1 = () => {
        if (myCount1 === 0) {
            setCount1(1);
        } else {
            setCount1(0);
        }
    }
    const [myCount2, setCount2] = useState(0);
    const count2 = () => {
        if (myCount2 === 0) {
            setCount2(1);
        } else {
            setCount2(0);
        }
    }
    const [myCount3, setCount3] = useState(0);
    const count3 = () => {
        if (myCount3 === 0) {
            setCount3(1);
        } else {
            setCount3(0);
        }
    }
    const [myCount4, setCount4] = useState(0);
    const count4 = () => {
        if (myCount4 === 0) {
            setCount4(1);
        } else {
            setCount4(0);
        }
    }
    const [myCount5, setCount5] = useState(0);
    const count5 = () => {
        if (myCount5 === 0) {
            setCount5(1);
        } else {
            setCount5(0);
        }
    }
    const [myCount6, setCount6] = useState(0);
    const count6 = () => {
        if (myCount6 === 0) {
            setCount6(1);
        } else {
            setCount6(0);
        }
    }
    const [myCount7, setCount7] = useState(0);
    const count7 = () => {
        if (myCount7 === 0) {
            setCount7(1);
        } else {
            setCount7(0);
        }
    }
    const [myCount8, setCount8] = useState(0);
    const count8 = () => {
        if (myCount8 === 0) {
            setCount8(1);
        } else {
            setCount8(0);
        }
    }
    const [myCount9, setCount9] = useState(0);
    const count9 = () => {
        if (myCount9 === 0) {
            setCount9(1);
        } else {
            setCount9(0);
        }
    }
    const [myCount10, setCount10] = useState(0);
    const count10 = () => {
        if (myCount10 === 0) {
            setCount10(1);
        } else {
            setCount10(0);
        }
    }
    const [myCount11, setCount11] = useState(0);
    const count11 = () => {
        if (myCount11 === 0) {
            setCount11(1);
        } else {
            setCount11(0);
        }
    }
    const [myCount12, setCount12] = useState(0);
    const count12 = () => {
        if (myCount12 === 0) {
            setCount12(1);
        } else {
            setCount12(0);
        }
    }

    return (
        <>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <h3 className="MY-3" style={{ textAlign: 'left ', fontFamily: 'fantasy' }}>Wanna try these even !!!</h3>
                        </div>
                        <div className="col-6 text-right">
                            <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                <i className="fa fa-arrow-left"></i>
                            </a>
                            <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <i className="fa fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="col-12">
                            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">

                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" height='100px' src="./Images/jhdd.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" height='100px' src="./Images/jxbh.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="./Images/jvh.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">

                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="./Images/t1.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="./Images/t2.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" height='100px' src="./Images/t4.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">

                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="./Images/set3.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="./Images/set4.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src="./Images/shoes2.jpg" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Special title treatment</h4>
                                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main starts  */}


            {/*
            <div classNameName='container' style={{ border: '2px solid black', height: '400px', width: '1000px', display: 'flex' }}>
                <Card classNameName='my-3 rounded-5' style={{ width: '18rem', height: '22rem', justifyContent: 'center', margin: '0 15px 0 15px' }}>
                    <Card.Img id='m1' variant="top" src={""} />
                </Card>

                <Card classNameName='my-3 rounded-5' style={{ width: '18rem', height: '22rem', justifyContent: 'center', margin: '0 15px 0 15px' }}>
                    <Card.Img id='m2' variant="top" src={""} />
                </Card>

                <Card classNameName='my-3 rounded-5' style={{ width: '18rem', height: '22rem', justifyContent: 'center', margin: '0 15px 0 15px' }}>
                    <Card.Img id='m3' variant="top" src={""} />
                </Card>
            </div> */}

            <div style={{ justifyContent: 'center' }}>
                <h2 classNameName='my-3 mx-3' style={{ textAlign: 'center', fontFamily: 'algerian', fontWeight: 'bold' }}><u>PRODUCTS</u></h2>
            </div>

            <div classNameName="container-fluid my-5" style={{ display: 'flex', justifyContent: 'center' , margin: '10px'}}>
                <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                    <Card.Img variant="top" src="./Images/p1.jpg" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div>
                            <Button classNameName="secBtn1" variant="primary" onClick={count}>Add To Cart</Button>
                            <img src="./Images/cart_icon.png" height={40} style={{ marginLeft: '20px' }} alt="cartIcon" />
                            <Button style={{ backgroundColor: 'white', border: "1px solid black", color: 'black' }} variant="primary">{myCount}</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                    <Card.Img variant="top" height={360} src="./Images/p2.jpg" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div>
                            <Button classNameName="secBtn2" variant="primary" onClick={count1}>Add To Cart</Button>
                            <img src="./Images/cart_icon.png" height={40} style={{ marginLeft: '20px' }} alt="cartIcon" />
                            <Button style={{ backgroundColor: 'white', border: "1px solid black", color: 'black' }} variant="primary" >{myCount1}</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                    <Card.Img variant="top" height={380} src="./Images/p3.jpg" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div>
                            <Button classNameName="secBtn3" variant="primary" onClick={count2}>Add To Cart</Button>
                            <img src="./Images/cart_icon.png" height={40} style={{ marginLeft: '20px' }} alt="cartIcon" />
                            <Button style={{ backgroundColor: 'white', border: "1px solid black", color: 'black' }} variant="primary" >{myCount2}</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div classNameName="container-fluid my-5" style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                    <Card.Img variant="top" src="./Images/p4.jpg" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div>
                            <Button classNameName="secBtn4" variant="primary" onClick={count3}>Add To Cart</Button>
                            <img src="./Images/cart_icon.png" height={40} style={{ marginLeft: '20px' }} alt="cartIcon" />
                            <Button style={{ backgroundColor: 'white', border: "1px solid black", color: 'black' }} variant="primary" >{myCount3}</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                    <Card.Img variant="top" src="./Images/p5.jpg" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div>
                            <Button classNameName="secBtn5" variant="primary" onClick={count4}>Add To Cart</Button>
                            <img src="./Images/cart_icon.png" height={40} style={{ marginLeft: '20px' }} alt="cartIcon" />
                            <Button style={{ backgroundColor: 'white', border: "1px solid black", color: 'black' }} variant="primary" >{myCount4}</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                    <Card.Img variant="top" height={360} src="./Images/s1.jpg" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div>
                            <Button classNameName="secBtn6" variant="primary" onClick={count5}>Add To Cart</Button>
                            <img src="./Images/cart_icon.png" height={40} style={{ marginLeft: '20px' }} alt="cartIcon" />
                            <Button style={{ backgroundColor: 'white', border: "1px solid black", color: 'black' }} variant="primary" >{myCount5}</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div classNameName="container-fluid my-5" style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                    <Card.Img variant="top" height={360} src="./Images/s2.jpg" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div>
                            <Button classNameName="secBtn7" variant="primary" onClick={count6}>Add To Cart</Button>
                            <img src="./Images/cart_icon.png" height={40} style={{ marginLeft: '20px' }} alt="cartIcon" />
                            <Button style={{ backgroundColor: 'white', border: "1px solid black", color: 'black' }} variant="primary" >{myCount6}</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                    <Card.Img variant="top" height={360} src="./Images/s3.jpg" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div>
                            <Button classNameName="secBtn8" variant="primary" onClick={count7}>Add To Cart</Button>
                            <img src="./Images/cart_icon.png" height={40} style={{ marginLeft: '20px' }} alt="cartIcon" />
                            <Button style={{ backgroundColor: 'white', border: "1px solid black", color: 'black' }} variant="primary" >{myCount7}</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                    <Card.Img variant="top" src="./Images/s4.jpg" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div>
                            <Button classNameName="secBtn9" variant="primary" onClick={count8}>Add To Cart</Button>
                            <img src="./Images/cart_icon.png" height={40} style={{ marginLeft: '20px' }} alt="cartIcon" />
                            <Button style={{ backgroundColor: 'white', border: "1px solid black", color: 'black' }} variant="primary" >{myCount8}</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div classNameName="container-fluid my-5" style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                    <Card.Img variant="top" height={360} src="./Images/s5.jpg" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div>
                            <Button classNameName="secBtn10" variant="primary" onClick={count9}>Add To Cart</Button>
                            <img src="./Images/cart_icon.png" height={40} style={{ marginLeft: '20px' }} alt="cartIcon" />
                            <Button style={{ backgroundColor: 'white', border: "1px solid black", color: 'black' }} variant="primary" >{myCount9}</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                    <Card.Img variant="top" height={360} src="./Images/set1.jpg" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div>
                            <Button classNameName="secBtn11" variant="primary" onClick={count10}>Add To Cart</Button>
                            <img src="./Images/cart_icon.png" height={40} style={{ marginLeft: '20px' }} alt="cartIcon" />
                            <Button style={{ backgroundColor: 'white', border: "1px solid black", color: 'black' }} variant="primary" >{myCount10}</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', margin: '0px 20px 0px 20px' }}>
                    <Card.Img variant="top" height={360} src="./Images/set2.jpg" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div>
                            <Button classNameName="secBtn12" variant="primary" onClick={count11}>Add To Cart</Button>
                            <img src="./Images/cart_icon.png" height={40} style={{ marginLeft: '20px' }} alt="cartIcon" />
                            <Button style={{ backgroundColor: 'white', border: "1px solid black", color: 'black' }} variant="primary" onClick={count11}>{myCount11}</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}