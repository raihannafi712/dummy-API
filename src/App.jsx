import { useEffect, useState } from 'react'
import axios from 'axios';
import { Col, Container , Row , Navbar ,Nav  } from 'react-bootstrap';
import './App.css'

function App() {
  
  let [ data , setData] = useState([])

  let getData = ()=>{
    axios.get("https://dummyjson.com/products").then((response)=>{
      setData(response.data.products)
      console.log(response);
      
    })
  }
    useEffect(()=>{
      getData()
    },[])

    console.log(data);
    

  return (
    <>
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><img  alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <a href="#" className='btn'>Contact us</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <section className='api'>
        <Container>
          <Row className="justify-content-center">
            <Col lg={4} >
              {data.map((item)=>(
                <>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img src={item.thumbnail} alt="" />
                </>
              ))}
            </Col>
            <Col lg={4} >
              {data.map((item)=>(
                <>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img src={item.thumbnail} alt="" />
                </>
              ))}
            </Col>
            <Col lg={4} >
              {data.map((item)=>(
                <>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <img src={item.thumbnail} alt="" />
                </>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default App
