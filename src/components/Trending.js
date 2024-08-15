import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Curvv from '../images/tatacurvvev.png';
import Fronx from '../images/marutisuzukifronxx.webp';
import mahindrathar from '../images/mahindratharroxx.webp';
import AudiA4 from '../images/audiA4.webp'
function Trending() {
  return (
    <div className="trending">
        <h2>Trending Cars In India</h2>
       <div className="Tcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={Curvv} />
      </Card>
      </div>
      <div className="Tcardbody">
      <Card.Body >
        <Card.Title>Tata Curvv EV</Card.Title>
        <Card.Text>
        The price of Tata Curvv EV, a SUV, ranges from Rs. 17.49 - 21.99 Lakh. It is available in 7 variants. Curvv EV comes with 6 airbags. Tata Curvv EV has a ground clearance of 190 mm and is available in 5 colours. Users have reported a driving range of 549.43 km for Curvv EV.
        </Card.Text>
        <Button variant="warning" className="btns" >Rs. 17.49* Lakh</Button>
      </Card.Body>
      </div>
      <div>
      <div className="Tcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={Fronx} />
      </Card>
      </div>
      <div className="Tcardbody">
      <Card.Body >
      <Card.Title>Maruti Suzuki Fronx</Card.Title>
        <Card.Text  >
        The Fronx is an attractive and spacious crossover based on the Baleno, boasting a long list of features. Its engines are efficient and sufficiently powerful, available with both AMT and torque converter options. The ride is accomplished, with adequate ground clearance.
        </Card.Text>
        <Button variant="warning" className=' btns'>Rs. 7.52 Lakh</Button>
      </Card.Body>
      </div>
      </div>
      <div>
      <div className="Tcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={mahindrathar} />
      </Card>
      </div>
      <div className="Tcardbody">
      <Card.Body >
      <Card.Title>Mahindra Thar Roxx</Card.Title>
        <Card.Text >
        It is available in 12 variants, with engine options ranging from 1997 to 2184 cc and a choice of 2 transmissions: Manual and Automatic. Thar Roxx comes with 6 airbags. Mahindra Thar Roxx is available in 7 colours.

        </Card.Text>
        <Button variant="warning" className=' btns'>Rs. 12.99* Lakh</Button>
      </Card.Body>
      </div>
      </div>
      <div>
      <div className="Tcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={AudiA4} />
      </Card>
      </div>
      <div className="Tcardbody">
      <Card.Body >
      <Card.Title>Audi A4</Card.Title>
        <Card.Text  >
        The price of Audi A4, a 5 seater Sedan, ranges from Rs. 46.02 - 54.58 Lakh. It is available in 3 variants, with an engine of 1984 cc and a choice of 1 transmission: Automatic. A4 has an NCAP rating of 5 stars and comes with 8 airbags. Audi A4 is available in 5 colours. Users have reported a mileage of 17.4 kmpl for A4.
        </Card.Text>
        <Button variant="warning" className=' btns'>Rs. 46.02* Lakh</Button>
      </Card.Body>
      </div>
      </div>
    </div>
  );
}

export default Trending;