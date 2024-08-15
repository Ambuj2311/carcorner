import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Curvv from '../images/tatacurvvev.png';
import Fronx from '../images/marutisuzukifronxx.webp';
import BMW from '../images/bmw5series.webp';
import mahindrathar from '../images/mahindratharroxx.webp';
import AudiA4 from '../images/audiA4.webp'
import Slavia from '../images/skodaslavia.webp';
import Hyryder from '../images/toyotahyryder.webp';
import Taigun from '../images/VolkswagenTaigun.webp';

function Latest() {
  return (
    <div className='latestContainer'> 
    <div className='sectionHeading'><h2>Latest Cars In India</h2></div>
       <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '17rem', float:"left" }}>
      <Card.Img variant="top" src={Curvv} />
      <Card.Body>
      <Card.Title>Tata Curvv EV</Card.Title>
        <Card.Text style={{height:"250px",borderTop:"2px solid black"}} >
        It is available in 7 variants. Curvv EV comes with 6 airbags. Tata Curvv EV has a ground clearance of 190 mm and is available in 5 colours. Users have reported a driving range of 549.43 km for Curvv EV.
        </Card.Text>
        <Button variant="warning" className='w-100 btns'>Rs. 17.49 Lakh</Button>
      </Card.Body>
    </Card>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '17rem', float:"left" }}>
      <Card.Img variant="top" src={Fronx} />
      <Card.Body>
      <Card.Title>Maruti Suzuki Fronx</Card.Title>
        <Card.Text style={{height:"250px",borderTop:"2px solid black"}}>
        The Fronx is an attractive and spacious crossover based on the Baleno, boasting a long list of features. Its engines are efficient and sufficiently powerful, available with both AMT and torque converter options. The ride is accomplished, with adequate ground clearance.
        </Card.Text>
        <Button variant="warning" className='w-100 btns'>Rs. 7.52 Lakh</Button>
      </Card.Body>
    </Card>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '17rem', float:"left" }}>
      <Card.Img variant="top" src={BMW} />
      <Card.Body>
      <Card.Title>BMW 5 Series</Card.Title>
        <Card.Text style={{height:"250px",borderTop:"2px solid black"}}>
        It is available in 2 variants, with an engine of 1998 cc and a choice of 1 transmission: Automatic. 5 Series has an NCAP rating of 5 stars and comes with 8 airbags. BMW 5 Series is available in 4 colours. Users have reported a mileage of 15.7 kmpl for 5 Series.
        </Card.Text>
        <Button variant="warning" className='w-100 btns'>Rs. 72.90 Lakh</Button>
      </Card.Body>
    </Card>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '17rem', float:"left" }}>
      <Card.Img variant="top" src={mahindrathar} />
      <Card.Body>
      <Card.Title>Mahindra Thar Roxx</Card.Title>
        <Card.Text style={{height:"250px",borderTop:"2px solid black"}}>
        It is available in 12 variants, with engine options ranging from 1997 to 2184 cc and a choice of 2 transmissions: Manual and Automatic. Thar Roxx comes with 6 airbags. Mahindra Thar Roxx is available in 7 colours.

        </Card.Text>
        <Button variant="warning" className='w-100 btns'>Rs. 12.99* Lakh</Button>
      </Card.Body>
    </Card>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '17rem', float:"left" }}>
      <Card.Img variant="top" src={AudiA4} />
      <Card.Body>
      <Card.Title>Audi A4</Card.Title>
        <Card.Text style={{height:"250px",borderTop:"2px solid black"}}>
        The price of Audi A4, a 5 seater Sedan, ranges from Rs. 46.02 - 54.58 Lakh. It is available in 3 variants, with an engine of 1984 cc and a choice of 1 transmission: Automatic. A4 has an NCAP rating of 5 stars and comes with 8 airbags. Audi A4 is available in 5 colours. Users have reported a mileage of 17.4 kmpl for A4.
        </Card.Text>
        <Button variant="warning" className='w-100 btns'>Rs. 46.02* Lakh</Button>
      </Card.Body>
    </Card>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '17rem', float:"left" }}>
      <Card.Img variant="top" src={Slavia} />
      <Card.Body>
      <Card.Title>Skoda Slavia</Card.Title>
        <Card.Text style={{height:"250px",borderTop:"2px solid black"}}>
        The Slavia not only looks good but offers a thrilling driving experience, be it in the city or highway, due to its peppy engines and good handling. There's ample comfort, and space, plus remarkable boot capacity and versatility uncommon in sedans.
        </Card.Text>
        <Button variant="warning" className='w-100 btns'>Rs. 10.69 Lakh</Button>
      </Card.Body>
    </Card>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '17rem', float:"left" }}>
      <Card.Img variant="top" src={Hyryder} />
      <Card.Body>
      <Card.Title>  Urban Cruiser Hyryder</Card.Title>
        <Card.Text style={{height:"250px",borderTop:"2px solid black"}}>
        The Urban Cruiser Hyryder has a unique and handsome stance. Its robust and ergonomic cabin is feature-laden, roomy, and has large seats. With strong hybrid efficiency, refined performance, stable highway manners, and ADAS functionality, it ensures a comfortable driving experience.
        </Card.Text>
        <Button variant="warning" className='w-100 btns'>Rs. 11.14 Lakh</Button>
      </Card.Body>
    </Card>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '17rem', float:"left" }}>
      <Card.Img variant="top" src={Taigun} />
      <Card.Body>
      <Card.Title>VolksWagen Taigun</Card.Title>
        <Card.Text style={{height:"250px",borderTop:"2px solid black"}}>
        The Volkswagen Taigun offers a roomy interior, top-notch build, and fun driving. With a smooth ride and two petrol engines to choose from, this SUV tackles city and highway adventures in comfort and style.
        </Card.Text>
        <Button variant="warning" className='w-100 btns'>Rs. 11.70 Lakh</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Latest;