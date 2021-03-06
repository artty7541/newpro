import React from "react";
import "./styenavbar.css";
import { Link } from "react-router-dom";
import Logout from "../logout";
//react------ HOOK
export default function NavbarLogin() {
  return (
   
      <nav className="row">
        <div className="dropdown">
          <Link to="/dash">
            <div className="dropbtn">หน้าหลัก</div>
          </Link>
        </div>

        <div className="dropdown">
          <div className="dropbtn">บันทึกทะเบียนประวัติ</div>
          <div className="dropdown-content">
            <Link to ="/bufnew"><div>บันทึกพันธุ์ประวัติกระบือใหม่</div></Link>
            <Link to ="/print"><div>พิมพ์ใบพันธิ์ประวัติ</div></Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to = "/searchandRegistrational">
          <div className="dropbtn">ค้นหาและตรวจสอบสถานะการขึ้นทะเบียน</div>
          </Link>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ตรวจสอบและติดตามสถาะการจัดส่ง</div>
          <div className="dropdown-content">
            <a href="/trace">ติดตามสถานะการจัดส่ง</a>
            <a href="/information">ข้อมูลการจัดส่ง</a>
            <a href="/finish">รายการจัดส่งที่ดำเนินการเรียนร้อย</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">สถิติการขึ้นและออกรายงาน</div>
          <div className="dropdown-content">
            <a href="/statistics">สถิติ</a>
            <a href="/report">ออกรายงาน</a>
          </div>
        </div>

        <div className="dropdown">
          <Link to = "/????">
          <div className="dropbtn">การแจ้งเตือน</div>
          </Link>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ตั้งค่า</div>
          <div className="dropdown-content">
            <a href="/usersetting">ตั้งค่าข้อมูลผู้ใช้</a>
            <a href="/profilesetting">ตั้งค่าโปรไฟล์(ข้อมูลส่วนตัว)</a>
          </div>
        </div>

        <div className="dropdown">
          <Link to = "/instructionmanual">
          <div className="dropbtn">คู่มื่อการใช้งาน</div>
          </Link>
        </div>

        <div className="dropdown floatRight ">
          <div>
            <Logout/>
          </div>
        </div>

      </nav>
    
  );
}
