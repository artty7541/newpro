import React from "react";
import "./styenavbar.css";
//react------ HOOK
export default function NavbarLogin() {
  return (
    <div>
      <nav className="row">
        <div className="dropdown">
          <div className="dropbtn">หน้าหลัก</div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">บันทึกทะเบียนประวัติ</div>
          <div className="dropdown-content">
            <a href="/bufnew">บันทึกพันธุ์ประวัติกระบือใหม่</a>
            <a href="/search">ค้นหาและตรวจสอบ</a>
            <a href="/print">พิมพ์ใบพันธิ์ประวัติ</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ตรวจสอบสถานะ</div>
          <div className="dropdown-content">
            <a href="/Registration">สถานะการขึ้นทะเบียน</a>
          </div>
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
          <div className="dropbtn">สถิติการขึ้นทะเบียน</div>
          <div className="dropdown-content">
            <a href="/finishregister">
              ใบพันธุ์ประวัติที่ขึ้นทะเบียนเสร็จเรียบร้อย
            </a>
            <a href="/wait">ใบพันธุ์ประวัติที่รอขึ้นทะเบียน</a>
            <a href="/waitother">ใบพันธุ์ประวัติที่กำลังรอหลักฐานเพิ่มเติม</a>
            <a href="/Shipping">ใบพันธุ์ประวัติที่กำลังจัดส่ง</a>
            <a href="/report">ออกรายงาน</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">การแจ้งเตือน</div>
          <div className="dropdown-content">
            <a href="/notification">การแจ้งเตือน</a>
          </div>
        </div>
        
        <div className="dropdown">
          <div className="dropbtn">คู่มือการใช้งาน</div>
          <div className="dropdown-content">
            <a href="/instructionmanual">คู่มือการใช้งาน</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ตั้งค่า</div>
          <div className="dropdown-content">
            <a href="/usersetting">ตั้งค่าข้อมูลผู้ใช้</a>
            <a href="/profilesetting">ตั้งค่าโปรไฟล์(ข้อมูลส่วนตัว)</a>
            <a href="/out">ออกจากระบบ</a>
          </div>
        </div>

        
        <div className="col floatRight"></div>
      </nav>
    </div>
  );
}
