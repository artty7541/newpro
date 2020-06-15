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
      <div class="center" className="coler-bg7 border-c">
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
          <p className="row"> </p>
          <p
            style={{
              backgroundColor: " #5706D1",
              padding: "10px",
              color: "white",
            }}
          >
            ผลการค้นหา
          </p>
          
          
            
            <div className="col-md-4">
              
           
          <div className="col-md-4">
            <Card
              className="r-margintop border-c17 "
              style={{ width: "20rem", padding: "10px" }}
            > <Card.Title  style={{ backgroundColor: "#1900ff", color: "white", padding: "20px" }}>ที่อยู่ในการจัดส่ง</Card.Title>
              <Card.Body>
                <Row>
                  <Col>ชื่อ-นามสกุล :</Col>
                  <Col>ณัฐนันท์ เรือนมูล</Col>
                </Row>
                <Row>
                  <Col>ที่อยู่ :</Col>
                  <Col>-</Col>
                </Row>
                <Row>
                  <Col>เบอร์โทร :</Col>
                  <Col>-</Col>
                </Row>
              </Card.Body>

             
            </Card>

           

              <Card
                className=" border-c18"
                style={{ width: "80rem", padding: "10px" }}
              ><Card.Title  style={{ backgroundColor: "#1900ff", color: "white", padding: "20px" }}>สถานะการจัดส่ง</Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr style={{ backgroundColor: "#2680EB", color: "white" }}>
                      <th>วันที่/เวลา</th>
                      <th>หน่วยงาน</th>
                      <th>คำอธิบาย</th>
                      <th>เวลาจำหน่าย</th>
                      <th></th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                     
                      <td>
                       
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                     
                      <td></td>

                      
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                     
                      <td></td>

                      
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                     
                      <td> <div>
                          <Button
                            type="button"
                            className="btn btn-danger"
                            data-toggle="modal"
                            data-target="#myModal"
                          >
                            ผู้้รับ{" "}
                          </Button>
                        </div></td>

                      
                    </tr>
                  </tbody>
                </Table>
              </Card>
             
         </div>
         <div>  <Card
              className="r-margintop border-c20 "
              style={{ width: "80rem", padding: "10px" }}
            > 
              <Card.Body>
                
              </Card.Body>

             
            </Card>
</div>
              </div>
            </div>
          </div>
    </div>
  );
};
export default Header;
