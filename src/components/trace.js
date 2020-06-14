import React from "react";
import "./../photo.css";
import Footer from "./Footer";
import { Form, Button, Row, Col, Table, Card } from "react-bootstrap";
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
      <div class="center" className="coler-bg5 border-c">
        
          <div className="border-c1">
            <div
              className="border-c3"
              style={{
                backgroundColor: "#2680EB",
                color: "white",
                padding: "20px",
              }}
            >
              <h1>ติดตามสถานะการจัดส่ง </h1>
            </div>
            <p className="row"> </p>
            <p className="row"> </p>

            <Form.Row>
              <Form.Label column="sm" lg={2} style={{ fontSize: "15px" }}>
                ค้นหาโดยหมายเลขจัดส่ง
              </Form.Label>
              <Col>
                <Form.Control
                  size="text"
                  type="text"
                  placeholder="กรุณากรอกรายละเอียด"
                />
              </Col>
              <Button type="submit" lg={2} className="btn btn-blue space">
                ค้นหา
              </Button>

            </Form.Row>
            <p className="row"> </p>
            <p className="row" > </p>
            <p style={{backgroundColor: " #5706D1",padding: "10px",color: "white"}}>ผลการค้นหา</p>
            <p className="row"> </p>
          <p className="row"> </p>
          <div className="row ">
        <div className="col-md-4">
          
          <Card className=" border-c8" style={{ width: "25rem" }}>
          <Card.Title style={{ backgroundColor: "#1900ff" ,color: "white",padding: "10px" }} >ที่อยู่ในการจัดส่ง</Card.Title>
           
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
              ..........
              </Col>
              </Row>
              <Row>
              <Col>
              เบอรืโทร :
              </Col>
              <Col>
              090-xxxxxxx
              </Col>
              </Row>
            </Card.Body>
          </Card>
          
          <Card className="row border-c6" style={{ width: "80rem" }}>
         
          <Card.Title style={{ backgroundColor: "#1900ff" ,color: "white",padding: "10px" }}>ติดตามสถานะการจัดส่ง</Card.Title>
          <h1 style={{ fontSize: "15px" }}>หมายเลขพัสดุ : xxxxxxxxxxxxxxx </h1>
          <p className="row"> </p>
          <Table striped bordered hover>
            
  <thead>
    <tr>
    <th>เวลา/วันที่</th>
      <th>หน่วยงาน</th>
      <th>คำอธิบาย</th>
      <th>ผลการนำจ่าย</th>
      <th>         </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      
    </tr>
    <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      
    </tr>
    <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      
    </tr>
    <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      
    </tr>
    <tr>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>
        <div>

  <Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
ชื่อผู้รับ  </Button>
</div>
</td>
      
    </tr>
   
  </tbody>
  
</Table>
            

          </Card>
          <Card className="row border-c7 " style={{ width: "80rem" }}>
          

          <Card.Body>
              
             
            </Card.Body>
            

          </Card>
            <div>
              </div>    
              </div>
        </div>
      </div>
    </div>
   </div>
 
  );
};
export default Header;
