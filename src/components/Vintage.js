import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PremierPadmini from '../images/PremierPadmini.jpg';
import Ambassador from '../images/Ambassador.jpg';
import Contessa from '../images/hindustanmotorscontessa.jpg';
import Hispano from '../images/HispanoSuizaH6.jpg';
import Jaguar from '../images/JaguarOld.jpg';
import RollsRoyce from '../images/RollsRoyceSilverGhost.jpg';

function Vintage(){
  return (
    <div className="trending">
        <h2>Vintage Cars In India</h2>
       <div className="Vcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={PremierPadmini} />
      </Card>
      </div>
      <div className="Vcardbody">
      <Card.Body >
        <Card.Title>Premier Padmini</Card.Title>
        <Card.Text>
        The Premier Padmini, originating in the 1960s, evolved into an iconic Indian car known for its sleek design and durable construction. Its distinctive features made it a beloved choice among Indian car owners, embedding itself deeply in Indian society as a symbol of status and reliability. Despite its discontinuation in the late 1990s, the Premier Padmini remains revered among collectors, with restoration projects undertaken to preserve its legacy and appreciate its enduring cultural significance.
        </Card.Text>
        <Button variant="warning" className="btns" >Rs. 1.95 Lakh </Button>
      </Card.Body>
      </div>
      <div>
      <div className=" Vcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={Ambassador} />
      </Card>
      </div>
      <div className="Vcardbody">
      <Card.Body >
      <Card.Title>Ambassador</Card.Title>
        <Card.Text  >
        The Ambassador holds a prominent place in Indian automotive history as the country's first indigenously manufactured car. Its journey from inception to iconic status reflects a rich historical background deeply intertwined with India's automotive evolution. Over the years, the Ambassador has undergone significant design evolution, transitioning from its early models to modern iterations while retaining its distinctive charm. Beyond its role as a mode of transportation, the Ambassador, one of vintage cars in India has become a cultural icon in India, permeating various aspects of society including politics, cinema, and everyday life. Its enduring legacy and heritage as a symbol of national pride further underscore its significance in Indian automotive history.
        </Card.Text>
        <Button variant="warning" className=' btns'>Rs. 5 Lakh Approx.</Button>
      </Card.Body>
      </div>
      </div>
      <div>
      <div className=" Vcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={Hispano} />
      </Card>
      </div>
      <div className="Vcardbody">
      <Card.Body >
      <Card.Title>Hispano-Suiza H6</Card.Title>
        <Card.Text >
        The Hispano-Suiza H6 stands as a pinnacle of luxury automobiles, renowned for its elegance, performance, and technological advancements. Its engineering excellence is evident in innovations such as its advanced chassis design and powerful engine, setting it apart from its contemporaries. With notable owners including royalty, celebrities, and captains of industry, the Hispano-Suiza H6 has cemented its status as a symbol of prestige and refinement. Its rarity adds to its allure, making it highly sought after among collectors, with recent auction prices reflecting its enduring value. Restoration projects further contribute to preserving the legacy of this iconic luxury car.

        </Card.Text>
        <Button variant="warning" className=' btns'>Price NA</Button>
      </Card.Body>
      </div>
      </div>
      <div>
      <div className=" Vcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={RollsRoyce} />
      </Card>
      </div>
      <div className="Vcardbody">
      <Card.Body >
      <Card.Title>Rolls-Royce Silver Ghost</Card.Title>
        <Card.Text  >
        The Rolls-Royce Silver Ghost, an iconic luxury car of the early 20th century, boasts a rich history and enduring legacy. Revered for its engineering marvels, including its reliability, comfort, and exceptional performance, the Silver Ghost set new standards in automotive excellence. With a prestigious lineup of famous owners spanning royalty, celebrities, and business tycoons, its allure as a status symbol remains unparalleled. In the collector's market, the Rolls-Royce Silver Ghost continues to command attention, with recent auction prices reflecting its timeless appeal. Restoration projects and notable sales further underscore its significance in automotive history.
        </Card.Text>
        <Button variant="warning" className=' btns'>Price NA</Button>
      </Card.Body>
      </div>
      </div>
      <div>
      <div className=" Vcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={Contessa} />
      </Card>
      </div>
      <div className="Vcardbody">
      <Card.Body >
      <Card.Title>Hindustan Motors Contessa</Card.Title>
        <Card.Text  >
        The Contessa, a classic car renowned for its sleek design, powerful engine, and luxurious features, holds a special place in Indian automotive history. Its design elements and features, including its iconic silhouette and spacious interior, made it a popular choice among Indian car enthusiasts seeking both style and performance. The Contessa's popularity in India transcended mere transportation, as it became a fixture in films, television shows, and motorsport events, further enhancing its cultural significance. Today, notable Contessa restoration projects underscore efforts to preserve its legacy for future generations, ensuring that this timeless classic continues to captivate automotive enthusiasts for years to come.
        </Card.Text>
        <Button variant="warning" className=' btns'>Rs. 4.84 Lakh</Button>
      </Card.Body>
      </div>
      </div>
      <div>
      <div className=" Vcardimg"> 
    <Card style={{ width: '22rem' }}>
      <Card.Img  variant="top" src={Jaguar} />
      </Card>
      </div>
      <div className="Vcardbody">
      <Card.Body >
      <Card.Title>Jaguar XK150</Card.Title>
        <Card.Text  >
        The Jaguar XK150, a classic sports car celebrated for its sleek design and formidable performance, traces its origins and development through a rich history of automotive innovation. Distinguished by its aerodynamic body, luxurious interior, and advanced engineering, the XK150 stands out as a pinnacle of automotive design. Its illustrious racing heritage further underscores its prowess, with numerous victories in motorsport events around the world. In the collector's market, the Jaguar XK150 continues to command attention, with recent auction prices reflecting its enduring appeal. Restoration projects and notable sales serve as testaments to its timeless allure and significance in automotive history.
        </Card.Text>
        <Button variant="warning" className=' btns'>Rs. 88 Lakh</Button>
      </Card.Body>
      </div>
      </div>
    </div>
  );
}

export default Vintage;