import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { Badge, Drawer, Button , Empty } from "antd";
import { useSelector } from "react-redux";
import Cartproduct from "./cartproduct";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router";


const Header = ({value}) => {

  
  const addtocart = useSelector((state) => state?.cart);
  console.log(addtocart);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    
      setOpen(false);

  },[addtocart.length == 0])

  return (
    <>
      <div className="header mb-[75px] w-[95%] m-auto py-2">
        <Navbar collapseOnSelect expand="lg" className="bg-white">
          <Container>
            <NavLink to={'/'}>

            
            <Navbar.Brand
              className="me-5 text-black font-bold text-3xl"
              href="#home"
            >
              SHOP.CO
            </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="me-auto">
                <Nav.Link className="text-base font-bold me-1" >
                  <NavLink className="text-base font-bold me-1" to={'/products'}>
                      Products
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="text-base font-bold me-[200px] " href="">
                  Checkout
                </Nav.Link>
                
                <Form inline className="relative " >
                <span className=" top-2 left-3 z-1 absolute text-slate-500 "><SearchOutlined /></span>
                  <Row>
                  
                    <Col xs="auto">
                    
                      <Form.Control
                        onChange={(e) => value(e.target.value)} 
                        type="text"
                        placeholder="Search"
                        className="bg-slate-200 border rounded-2xl max-w-[400px] w-[300px] ps-10 "
                      />
                      
                    </Col>
                  </Row>
                </Form>
              </Nav>
            </Navbar.Collapse>
            <Navbar className="">
              <Badge size="small" count={addtocart?.length}>
                <ShoppingCartOutlined
                  onClick={showDrawer}
                  className="text-2xl"
                  shape="square"
                  size="large"
                />
              </Badge>

              <Drawer title="Cart" onClose={onClose} open={open}>
                {addtocart.length > 0 ? <>

                  {addtocart.map((item, index) => {
                  return <Cartproduct key={index} data={item} />;
                })}
                
                
                </> : <Empty /> }
                
              </Drawer>
            </Navbar>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
