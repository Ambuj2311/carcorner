import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BMW from '../images/bmwlogo1.png';
import Audi from '../images/audilogo1.png';
import MarutiSuzuki from '../images/MarutiSuzukilogo1.png';
import Tata from '../images/Tatamotorslogo11.png'
import Toyota from '../images/toyotalogo11.png';
import VW from '../images/VWlogo11.png';
import Hyundai from '../images/hyundailogo11.png';
import Skoda from '../images/skodalogo11.png';
import Mahindra from '../images/mahindralogo11.png';
import MG from '../images/mgmotorslogo11.png';


function Brands() {
  return (
    <div className='brandContainer'> 
    <div className='sectionHeading'><h2>Top Brands</h2></div>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:"left" }}>
      <Card.Img variant="top" src={MarutiSuzuki} />
      <Card.Body>
        <Button  className='w-100 btns'>Maruti Suzuki</Button>
      </Card.Body>
    </Card>
    {/* <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:'left' }}>
      <Card.Img variant="top" src={Ford} />
      <Card.Body>
        <Button variant="warning" className='w-100 btns'>Ford</Button>
      </Card.Body>
      </Card> */}
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:'left' }}>
      <Card.Img variant="top" src={Audi} />
      <Card.Body>
        <Button variant="warning" className='w-100 btns'>Audi</Button>
      </Card.Body>
    </Card>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:'left' }}>
      <Card.Img variant="top" src={BMW} />
      <Card.Body>
        <Button variant="warning" className='w-100 btns'>BMW</Button>
      </Card.Body>
    </Card>
    {/* <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:'left'}}>
      <Card.Img variant="top" src={Honda} />
      <Card.Body>
        <Button variant="warning" className='w-100 btns'>Honda</Button>
      </Card.Body>
    </Card> */}
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:"left" }}>
      <Card.Img variant="top" src={Hyundai} />
      <Card.Body>
        <Button  className='w-100 btns'>Hyundai</Button>
      </Card.Body>
    </Card>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:'left' }}>
      <Card.Img variant="top" src={Tata} />
      <Card.Body>
        <Button variant="warning" className='w-100 btns'>Tata Motors</Button>
      </Card.Body>
    </Card>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:'left' }}>
      <Card.Img variant="top" src={Mahindra} />
      <Card.Body>
        <Button variant="warning" className='w-100 btns'>Mahindra</Button>
      </Card.Body>
    </Card>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:'left' }}>
      <Card.Img variant="top" src={Skoda} />
      <Card.Body>
        <Button variant="warning" className='w-100 btns'>Skoda</Button>
      </Card.Body>
    </Card>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:'left'}}>
      <Card.Img variant="top" src={VW} />
      <Card.Body>
        <Button variant="warning" className='w-100 btns'>VolksWagen</Button>
      </Card.Body>
    </Card>
    {/* <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:"left" }}>
      <Card.Img variant="top" src={Renault} />
      <Card.Body>
        <Button  className='w-100 btns'>Renault</Button>
      </Card.Body>
    </Card> */}
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:'left' }}>
      <Card.Img variant="top" src={Toyota} />
      <Card.Body>
        <Button variant="warning" className='w-100 btns'>Toyota</Button>
      </Card.Body>
    </Card>
    <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:'left' }}>
      <Card.Img variant="top" src={MG} />
      <Card.Body>
        <Button variant="warning" className='w-100 btns'>MG Motors</Button>
      </Card.Body>
    </Card>
    {/* <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:'left' }}>
      <Card.Img variant="top" src={Nissan} />
      <Card.Body>
        <Button variant="warning" className='w-100 btns'>Nissan</Button>
      </Card.Body>
    </Card> */}
    {/* <Card style={{ marginLeft:"1%",marginBottom:"1%", width: '14rem', float:'left'}}>
      <Card.Img variant="top" src={Kia} />
      <Card.Body>
        <Button variant="warning" className='w-100 btns'>Kia Motors</Button>
      </Card.Body>
    </Card> */}
    </div>
  );
}

export default Brands;