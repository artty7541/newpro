import React,{Component} from "react";
import Logout from "./logout";
import "./components/stylenavbar";
import { Link } from "react-router-dom";
//import Avatar from "@material-ui/core/Avatar";
import firebase from "./backEnd/firebase"

class NvBarLogin extends Component {
    constructor(props){
        super(props);
        this.state={
          currentUser:""
        }
      }
        async componentDidMount() {
         
         await firebase.auth().onAuthStateChanged(user => {
        
           if (user) {
             this.setState({
               currentUser: user.email
             });
            
           }
         });
     
     
    }
    render (){
        return (
            <div className="container-fluid posi">
                <nav>
                    <div className="dropdown">
                    <Link to="/login">
                        {" "}
                        <div className="dropbtn">หน้าหลัก</div>
                    </Link>
                    </div>

                    <div className="dropdown">
                    <div className="dropbtn">ลงทะเบียนพันธุ์ประวัติกระบือ</div> 
                        <div className="dropdown-content">
                        <Link to="/bufnew">
                            <div>บันทึกพันธุ์ประวัติกระบือใหม่</div>
                        </Link>
                        <Link to="/print">
                            <div>พิมพ์ใบพันธุ์ประวัติ</div>
                        </Link>
                        </div>                 
                    </div>

                    <div className="dropdown">
                    <Link to="/searchandRegistrational">
                        {" "}
                        <div className="dropbtn">ค้นหาและตรวจสอบสถานะการขึ้นทะเบียน</div>
                    </Link>
                    </div>

                    <div className="dropdown">
                    <div className="dropbtn">ตรวจสอบและติดตามสถานะการจัดส่ง</div> 
                        <div className="dropdown-content">
                        <Link to="/trace">
                            <div>ติดตามสถานะการจัดส่ง</div>
                        </Link>
                        <Link to="/imformation">
                            <div>ข้อมูลการจัดส่ง</div>
                        </Link>
                        <Link to="/finish">
                            <div>รายการที่จัดส่งเรียบร้อย</div>
                        </Link>
                        </div>                 
                    </div>

                    <div className="dropdown">
                    <div className="dropbtn">สถิติการขึ้นทะเบียน</div> 
                        <div className="dropdown-content">
                        <Link to="/???">
                            <div>ใบพันธุ์ประวัติที่ขึ้นทะเบียนเสร็จเรียบร้อย</div>
                        </Link>
                        <Link to="/???">
                            <div>ใบพันธุ์ประวัติที่รอขึ้นทะเบียน</div>
                        </Link>
                        <Link to="/???">
                            <div>ใบพันธุ์ประวัติที่รอหลักฐานเพิ่มเติม</div>
                        </Link>
                        <Link to="/???">
                            <div>ใบพันธุ์ประวัติที่กำลังจัดส่ง</div>
                        </Link>
                        <Link to="/???">
                            <div>ออกรายงานสถิติข้อมูล</div>
                        </Link>
                        </div>                 
                    </div>

                    <div className="dropdown">
                    <Link to="/????">
                        {" "}
                        <div className="dropbtn">การแจ้งเตือน</div>
                    </Link>
                    </div>

                    <div className="dropdown">
                    <Link to="/????">
                        {" "}
                        <div className="dropbtn">การตั้งค่า</div>
                    </Link>
                    </div>

                    <div className="dropdown">
                    <Link to="/????">
                        {" "}
                        <div className="dropbtn">คู่มือการใช้งาน</div>
                    </Link>
                    </div>

                    <div className="col-md-1 floatRight sigout-div ">
                        <Logout />
                    </div>


                </nav>
            </div>
        );
    }

}

export default NvBarLogin;