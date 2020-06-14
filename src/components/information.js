import React from "react";

import "./../photo.css";
import Footer from "./Footer";
import { Form, Button, Row, Col,Card } from "react-bootstrap";
import NavbarLogin from "./navbar";
const Header = () => {
  return (
    <div className="container-fluid ">
      <div
        className="row "
        style={{ backgroundColor: "#1900ff", color: "white", padding: "20px" }}
      >
        <div className="col">
          <div className="row size-font">
            การขึ้นทะเบียนกระบือและออกใบพันธุ์ประวัติกระบือออนไลน์
          </div>
          <div className="row size-font-eng">
            {" "}
            Buffalo Registration and Pedigree Online
          </div>
        </div>
      </div>
      <NavbarLogin />
      <div>
      <div class="center" className="coler-bg5 border-c" >
  <div className="border-c1" >
    <div className="border-c3" style={{ backgroundColor: "#2680EB", color: "white", padding: "20px" }}>
    <h1>ข้อมูลการจัดส่ง</h1>
    </div>
    
        <div className="col-md-4">
          
          <Card className="r-margintop border-c9" style={{ width: "20rem" ,backgroundColor:"#2680EB",color:"white",padding: "10px" }}>
          <Card.Title >เลือก/เพิ่ม ที่อยู่</Card.Title>
           
          </Card>
        </div>
        
        </div><p className="row"> </p>
    <p className="row"> </p>
    <p className="row"> </p>
    <p className="row"> </p>

        <div className="col-md-4">
          
          <Card className="r-margintop border-c10" style={{ width: "20rem" ,padding: "10px" }}>
         
            <Card.Body>
              
              <Row>
              <Col>
              ชื่อ-นามสกุล :
              </Col>
              <Col>
              ณัฐนันท์ เรือนมูล
              </Col>
              </Row>
              <Row>
              <Col>
              ที่อยู่ :
              </Col>
              <Col>
              -
              </Col>
              </Row>
              <Row>
              <Col>
              เบอร์โทร :
              </Col>
              <Col>
              -
              </Col>
              </Row>
             
            </Card.Body>
            <p className="row"> </p>
    <p className="row"> </p>
    <p className="row"> </p>
    <div>
            <Button type="submit" className="btn btn-blue space" style={{width: "5rem"}}>
          เลือก
        </Button>
        <Button type="cancel" className="btn btn-danger" style={{width: "5rem"}}>
          ลบออก
        </Button>
        </div>
          </Card>
          <p className="row"> </p>
   
          <div className="col-md-4">
          
          <Card className="r-margintop border-c11" style={{ width: "20rem" ,padding: "10px" }}>
         
            <Card.Body>
              
              <Row>
              <Col>
              ชื่อ-นามสกุล :
              </Col>
              <Col>
              ณัฐนันท์ เรือนมูล
              </Col>
              </Row>
              <Row>
              <Col>
              ที่อยู่ :
              </Col>
              <Col>
              -
              </Col>
              </Row>
              <Row>
              <Col>
              เบอร์โทร :
              </Col>
              <Col>
              -
              </Col>
              </Row>
             
            </Card.Body>
            <p className="row"> </p>
    <p className="row"> </p>
    <p className="row"> </p>
    <div>
            <Button type="submit" className="btn btn-blue space" style={{width: "5rem"}}>
          เลือก
        </Button>
        <Button type="cancel" className="btn btn-danger" style={{width: "5rem"}}>
          ลบออก
        </Button>
        </div>
          </Card>
           </div>
           </div>
          
        </div>
  </div>
  </div>
 

 
  );
};
export default Header;