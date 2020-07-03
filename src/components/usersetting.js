import React from "react";
import "./../photo.css";
import Footer from "./Footer";
import { Form, Button, Row, Col } from "react-bootstrap";
import NavbarLogin from "./navbar";
const Header = () => {
  return (
    <div className="container-fluid ">
      
      <div
        className="row "
        style={{ backgroundColor: "#1900ff", color: "white", padding: "20px" }}
      >
        <div className="col ">
          <div className="row size-font">
            การขึ้นทะเบียนกระบือและออกใบพันธุ์ประวัติกระบือออนไลน์
          </div>
          <div className="row size-font-eng">
            {" "}
            Buffalo Registration and Pedigree Online
          </div>
        </div>
      </div>
    <NavbarLogin/>
      <div class="center" className="coler-bg1 border-c">
        <div className="border-c1">
          <div className="border-c3" style={{ backgroundColor: "#2680EB", color: "white", padding: "20px" }}><h1>แก้ไขข้อมูลส่วนตัว</h1></div>
        
        <p></p>
        <p style={{color:"red"}}>* กรุณากรอกข้อมูลส่วนตัว</p>
        <p></p>
        <div>
          <Form.Row> 
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              * ชื่อผู้ใช้
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรุณากรอกชื่อผู้ใช้งาน"
              />
            </Col> 
           
          </Form.Row>
          <p></p>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
             * รหัสผ่าน
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรุณากรอกรหัสผ่าน"
              />
            </Col>
          </Form.Row>
          <p></p>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
            * ยืนยันรหัสผ่าน
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรุณายืนยันรหัสผ่าน"
              />
            </Col>
          </Form.Row>
          <p></p>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              * ชื่อ
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรุณากรอกชื่อ" />
            </Col>
          </Form.Row>
          <p></p>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              * นามสกุล
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรุณากรอกนามสกุล"
              />
            </Col>
            
          </Form.Row>
          <p></p>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              * เพศ
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือกเพศ..</option>
                <option>ชาย</option>
                <option>หญิง</option>
              </Form.Control>
            </Col>

          </Form.Row>
          <p></p>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              * เลขบัตรประชาชน
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรุณากรอกเลขบัตรประชาชน" />
            </Col>
          </Form.Row>
          <p></p>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              * เบอร์โทรศัพท์
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรุณากรอกเบอร์โทรศัพท์" />
            </Col>
          </Form.Row>
          <p></p>
          <Form.Row>
          <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              * ที่อยู่
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="" />
            </Col>
          <Form.Label columm="sm" lg={2} style={{fontSize:"20px"}}>
              จังหวัด
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือก..</option>
                <option>เชียงราย</option>
                <option>พะเยา</option>
              </Form.Control>
            </Col>

            <Form.Label columm="sm" lg={2} style={{fontSize:"20px"}}>
             อำเภอ
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือก..</option>
                <option>เมือง</option>
              </Form.Control>
            </Col>

            <Form.Label columm="sm" lg={2} style={{fontSize:"20px"}}>
             ตำบล
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือก..</option>
                <option>แม่กา</option>
              </Form.Control>
            </Col>
  </Form.Row>
  <p></p>
  
  <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ช่องทากการติดต่อ
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือก..</option>
                <option>E-mail</option>
                <option>Facebook</option>
                <option>Line</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรุณากรอกรายละเอียด" />
            </Col>
            
           
          </Form.Row>
          <hr/>
<Col  className="text-center ">
                <h1 style={{fontSize:"30px"}}> แก้ไขรูปโปรไฟล์</h1>
               
                <div>
                  <div className="container-fluid boxImgFrom  ">
          
                    
                    <input
                      type="file"
                      name="avatar"
                      onChange={event => this.fileChangedHandler(event)}
                    />
                  </div>
                  
                </div>
                
              </Col>
              
        </div>        <p></p>
<hr/>
<div className="border-c1">
          <div className="border-c3" style={{ backgroundColor: "#2680EB", color: "white", padding: "20px" }}><h1>แก้ไขข้อมูลฟาร์ม</h1></div>
          <p></p>
        <p style={{color:"red"}}>* กรุณากรอกข้อมูลฟาร์ม</p>
        <p></p>
        <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ชื่อฟาร์ม
            </Form.Label>
            
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรุณากรอกชื่อฟาร์ม"
              />
            </Col>
            
          </Form.Row>
          <p></p>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ที่ตั้งฟาร์ม/สถานที่ผลิต
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรุณากรอกรหัสผ่าน"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              พิกัดฟาร์ม
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="ละติจูด"
              />
            </Col>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="ลองติจูด"
              />
            </Col>
          </Form.Row>
          <p></p>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              จำนวนกระบือที่เลี้ยง
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรุณากกรอกจำนวนกระบือที่เลี้ยง" />
            </Col>
          </Form.Row>
          <p></p>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              วัตถุประสงค์ในการเลี้ยงกระบือ
            </Form.Label>
            <Col>
              <Form.Control
                size="text"
                type="text"
                placeholder="กรุณากรอกวัตถุประสงค์"
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              การรับรองมาตรฐาน
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือก..</option>
                <option>....</option>
                <option>....</option>
              </Form.Control>
            </Col>

          </Form.Row>
          <p></p>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              การรับรองการปลอดโรค
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือก..</option>
                <option>....</option>
                <option>....</option>
              </Form.Control>
            </Col>

          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              การรับรองฟาร์มปลอดสาร
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือก..</option>
                <option>....</option>
                <option>....</option>
              </Form.Control>
            </Col>

          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              ข้อมูลแรงงาน
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรุณากรอกแรงงาน(คน)" />
            </Col>
          </Form.Row>
          <p></p>
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              การจัดการอาหาร
            </Form.Label>
            <Col>
              <Form.Control as="select" size="text">
                <option>กรุณาเลือก..</option>
                <option>....</option>
                <option>....</option>
              </Form.Control>
            </Col>

          </Form.Row>
          <p></p>
          <Form.Row>
          <Form.Label column="sm" lg={2} style={{fontSize:"20px"}}>
              พื้นที่ในการเลี้ยง
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรอกไร่" />
            </Col>
          <Form.Label columm="sm" lg={2} style={{fontSize:"20px"}}>
              
            </Form.Label>
            <Col>
              <Form.Control size="text" type="text" placeholder="กรอกงาน" />
              
            </Col>

            <Form.Label columm="sm" lg={2} style={{fontSize:"15px"}}>
              
            </Form.Label>
            <Col>
            <Form.Control size="text" type="text" placeholder="กรอกตารางวา" />
            </Col>

            
  </Form.Row>
  <hr/>
          </div> 
          <h1 style={{fontSize:"30px"}}>แก้ไขรูปฟาร์ม</h1>
<Col  className="text-center ">
                <div>
                  <div className="container-fluid boxImgFrom  ">
                 
                    
                    <input
                      type="file"
                      name="avatar"
                      onChange={event => this.fileChangedHandler(event)}
                    />
                  </div>
                </div>
              </Col>
              <Col className="text-center ">
                <div>
                
                </div>
              </Col>
              <hr/>
        <Button type="submit" className="btn btn-blue space">
          ยืนยัน
        </Button>
        <Button type="cancel" className="btn btn-danger">
          ยกเลิก
        </Button>
       
      </div> 
      </div>    
    </div>
    
  );
};
export default Header;
//<h1 } >ระบบจัดเก็บพันธุ์ประวัติและออกใบพันธุ์ประวัติกระบือออนไลน์</h1></div>
