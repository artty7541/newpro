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
                ค้นหาโดยเลขประจำฝูง
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
          <p className="row"> </p>
          <Card className="border-c5" style={{ width: "25rem" }}>
          < Card.Title style={{backgroundColor: "#1900ff" ,color: "white"}}>โปรไฟล์</Card.Title>

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
          </Card>
        
            <div>
              </div>    
        </div>
      </div>
    </div>
  );
};
export default Header;
