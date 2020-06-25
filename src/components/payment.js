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
        <div class="center" className="coler-bg6 border-c">
          <div className="border-c1">
            <div
              className="border-c3"
              style={{
                backgroundColor: "#2680EB",
                color: "white",
                padding: "20px",
              }}
            >
              <h1>ชำระเงิน</h1>
            </div>   
            
            <div  className="col-md-4 ">
              <Card
                className="r-margintop border-c9 "
                style={{
                  width: "40rem",
                  backgroundColor: "#2680EB",
                  color: "white",
                  padding: "10px",left:"-5px"
                }}
              >
                <Card.Title>เลือกวิธีการชำระเงิน</Card.Title>
              </Card>
              <div className="col-md-4">
            <Card
              className="r-margintop border-c22"
              style={{ width: "15rem", padding: "10px" }}
            >
              <Card.Body>
               
                <Row>
                  <Col>ชำระเงินที่ตู้ ATM</Col>
      
                </Row>
              </Card.Body>

            </Card>
            <Card
              className="r-margintop border-c23"
              style={{ width: "15rem", padding: "7px" }}
            >
              <Card.Body>
               
                <Row>
                  <Col>ชำระเงินผ่านโมบายแบงค์กิ้ง</Col>
             
                </Row>
              </Card.Body>

            </Card>
            <div  className="col-md-4 ">
              <Card
                className="r-margintop border-c9 "
                style={{
                  width: "40rem",
                  backgroundColor: "#2680EB",
                  color: "white",
                  padding: "10px",left:"1000px"
                }}
              >
                <Card.Title>สรุปการสั่งซื้อ</Card.Title>
              </Card>
              <Card
              className="r-margintop border-c24"
              style={{ width: "40rem", padding: "7px" }}
            >
              <Card.Body>
               
                <Row>
                  <Col>จำวนวน :</Col>
                  <Col>- รายการ</Col>
                </Row>
                <Row>
                  <Col>เลขประจำฝูง :- ชื่อกระบือ :- ปรพเภท : จดทะเบียน </Col>
                  <Col>ราคา-บาท</Col>
                </Row>
                <Row>
                  <Col>รวมทั้งสิ้น :</Col>
                  <Col>- บาท</Col>
                </Row>
              </Card.Body>
           
            </Card>   
            <Card
                className="r-margintop border-c25 "
                style={{
                  width: "40rem",
                  backgroundColor: "#2680EB",
                  color: "white",
                  padding: "10px"
                }}
              >
                <Card.Title>กรุณาเลือกธนาคาร</Card.Title>
              </Card>
              <Card
              className="r-margintop border-c26"
              style={{ width: "12rem", padding: "7px" }}
            >
              <Card.Body>
               
                <Row>
                  <Col>ธนาคารกสิการไทย </Col>
                
                </Row>
               
              </Card.Body>
           
            </Card>   
            <Card
              className="r-margintop border-c27"
              style={{ width: "12rem", padding: "7px" }}
            >
              <Card.Body>
               
                <Row>
                  <Col>ธนาคารไทยพาณิชย์ </Col>
                
                </Row>
               
              </Card.Body>
           
            </Card>   
            <Card
              className="r-margintop border-c28"
              style={{ width: "12rem", padding: "7px" }}
            >
              <Card.Body>
               
                <Row>
                  <Col>ธนาคารกรุงเทพ </Col>
                
                </Row>
               
              </Card.Body>
           
            </Card>   
            <Card
              className="r-margintop border-c29"
              style={{ width: "12rem", padding: "7px" }}
            >
              <Card.Body>
               
                <Row>
                  <Col>ธนาคารกรุงไทย </Col>
                
                </Row>
               
              </Card.Body>
           
            </Card>   
            <Card
              className="r-margintop border-c30"
              style={{ width: "12rem", padding: "7px" }}
            >
              <Card.Body>
               
                <Row>
                  <Col>ธนาคารกรุงศรี </Col>
                
                </Row>
               
              </Card.Body>
           
            </Card>   
            <Card
              className="r-margintop border-c31"
              style={{ width: "12rem", padding: "7px" }}
            >
              <Card.Body>
               
                <Row>
                  <Col>ธนาคารออมสิน </Col>
                
                </Row>
               
              </Card.Body>
           
            </Card>   
              </div>
      </div>
     </div>
    </div>
</div>
  </div>
</div>  
);
};
export default Header;

