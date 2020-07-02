import React from "react";
import "./../photo.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
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

        <div className="col-1 font-right ">
          
          <Link to="/login">
            <button className="button">เข้าสู่ระบบ</button>
          </Link>
        </div>
        <div className="col-1 font-right">
          <Link to="/regis">
            <button className="button">สมัครสมาชิก</button>
          </Link>
        </div>
      </div>
      <div className="photo ">

        <div className="center ">
          <Form className="coler-bg ">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="size-font3">ลงชื่อเข้าใช้</Form.Label>
              <p></p>
              <p></p>
              <p></p>
              <Form.Control type="email" placeholder="ชื่อผู้ใช้" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control type="password" placeholder="รหัสผ่าน" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="จำรหัสผ่าน" />
              <p> </p>
            </Form.Group>
            <Link to="/dash">
              <Button variant="primary" type="submit">
                เข้าสู่ระบบ
              </Button>
            </Link>
          </Form>
       
          </div> 
          </div>
      <Footer />
    </div>  
  );
};
export default Header;
//<h1 } >ระบบจัดเก็บพันธุ์ประวัติและออกใบพันธุ์ประวัติกระบือออนไลน์</h1></div>
