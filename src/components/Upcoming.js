import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Curvv from '../images/upcomingtatacurvv.webp';
import Carnival from '../images/upcomingkiacarnival.webp'
import PickUp from '../images/upcomingmahindrapickup.webp'
import Avinya from '../images/upcomingtataavinya.webp'
function Upcoming() {
  return (
    <div className="trending">
        <h2>Upcoming Cars In India</h2>
       <div className="Tcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={Curvv} />
      </Card>
      </div>
      <div className="Tcardbody">
      <Card.Body >
        <Card.Title>Tata Curvv</Card.Title>
        <Card.Text>
        Tata Curvv is a SUV which is expected to launch in India in 2nd Sep 2024 in the expected price range of Rs. 15.00 - 20.00 Lakh. It is available in 34 variants with 2 transmission options : Manual and Automatic. The Curvv is available in 6 colours.
        </Card.Text>
        <Button variant="warning" className="btns" >2nd Sep 2024</Button>
      </Card.Body>
      </div>
      <div>
      <div className="Tcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={Carnival} />
      </Card>
      </div>
      <div className="Tcardbody">
      <Card.Body >
      <Card.Title>Kia New Carnival</Card.Title>
        <Card.Text  >
        Kia New Carnival is a MUV which is expected to launch in India in 3rd Oct 2024 in the expected price range of Rs. 40.00 - 45.00 Lakh. It is available in 2 variants with 1 transmission option : Automatic. Other key specifications of the New Carnival include a ground clearance of 180 mm. and The New Carnival is available in 3 colours. Kia New Carnival mileage is 13.9 kmpl.
        </Card.Text>
        <Button variant="warning" className=' btns'>3rd Oct 2024</Button>
      </Card.Body>
      </div>
      </div>
      <div>
      <div className="Tcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={Avinya} />
      </Card>
      </div>
      <div className="Tcardbody">
      <Card.Body >
      <Card.Title>Tata Avinya</Card.Title>
        <Card.Text >
        Tata Avinya is a SUV which is expected to launch in India in Jun 2025 in the expected price range of Rs. 30.00 - 60.00 Lakh.

        </Card.Text>
        <Button variant="warning" className=' btns'>June 2025</Button>
      </Card.Body>
      </div>
      </div>
      <div>
      <div className="Tcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={PickUp} />
      </Card>
      </div>
      <div className="Tcardbody">
      <Card.Body >
      <Card.Title>Mahindra Global Pick Up</Card.Title>
        <Card.Text  >
        Mahindra Global Pik Up is a Truck which is expected to launch in India in Sep 2026 in the expected price range of Rs. 16.00 - 22.00 Lakh.
        </Card.Text>
        <Button variant="warning" className=' btns'>Sep 2026</Button>
      </Card.Body>
      </div>
      </div>
    </div>
  );
}

export default Upcoming;