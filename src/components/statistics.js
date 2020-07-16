import React, { Component } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import react from "react";
import "./../photo.css";
import Popup from "reactjs-popup";

import NavbarLogin from "./navbar";
import buf from "./images/background.jpg";
import { Form, Button, Row, Col,InputGroup,FormControl,Table,Card} from "react-bootstrap";

class ChartData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "ใบพันธุ์ประวัติที่ขึ้นทะเบียนเรียบร้อย",
          "ใบพันธุ์ประวัติที่รอขึ้นทะเบียน",
          "ใบพันธุ์ประวัติที่กำลังรอหลักฐานเพิ่มเติม",
          "ใบพันธุ์ประวัติที่กำลังจัดส่ง",
         
        ],
        datasets: [
          {
            label: "test01",
            data: [12, 19, 5, 7],
            backgroundColor: [
              "rgba(255, 85, 85)",
              "rgba(54, 162, 235)",
              "rgba(255, 255, 85)",
              "rgba(0, 255, 128)",
          
            ],
          },
        ],
      },
      chartData2: {
        labels: [
            "ใบพันธุ์ประวัติที่ขึ้นทะเบียนเรียบร้อย",
            "ใบพันธุ์ประวัติที่รอขึ้นทะเบียน",
            "ใบพันธุ์ประวัติที่กำลังรอหลักฐานเพิ่มเติม",
            "ใบพันธุ์ประวัติที่กำลังจัดส่ง",
       
        ],
        datasets: [
          {
            data: [12, 19, 5, 7],
            backgroundColor: [
              "rgba(255, 85, 85)",
              "rgba(54, 162, 235)",
              "rgba(255, 255, 85)",
              "rgba(0, 255, 128)",
             
            ],
          },
        ],
      },
    };
  }

  render() {
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

        <div class="center" className="coler-bg-1 border-c" >
        <div className="border-c1" >
          <div className="border-c3" style={{ backgroundColor: "#2680EB", color: "white", padding: "20px" }}>
          <h1>ค้นหา ติดตามสถานะการขึ้นทะเบียน</h1>
          </div>
          
          <p className="row"> </p>
        <p className="row"> </p>
       
          <Form.Row>
            <Form.Label column="sm" lg={2} style={{fontSize:"15px"}}>
              กรุณาเลือกการค้นหา
            </Form.Label>
            <Col>
            <Form.Control as="select" size="text">
            <option>ทั้งหมด</option>
                <option>ใบพันธุ์ประวัติที่ขึ้นทะเบียนเรียบร้อย</option>
                <option>ใบพันธุ์ประวัติที่รอขึ้นทะเบียน</option>
                <option>ใบพันธุ์ประวัติที่กำลังรอหลักฐานเพิ่มเติม</option>
                <option>ใบพันธุ์ประวัติที่กำลังจัดส่ง</option>
              </Form.Control>
            </Col>
            <Form.Label column="sm" lg={2} style={{fontSize:"15px"}}>
              ช่วงเวลา
            </Form.Label>
            <Col>
            <Form.Control as="select" size="text">
          
                <option>ทั้งหมด</option>
                <option>รายปี</option>
                <option>รายเดือน</option>
                <option>รายวัน</option>
              </Form.Control>
            </Col>
            <Form.Label column="sm" lg={2} style={{fontSize:"15px"}}>
              จังหวัด
            </Form.Label>
            <Col>
            <Form.Control as="select" size="text">
          
          <option>ทั้งหมด</option>
          <option>.....</option>
          <option>.....</option>
          <option>.....</option>
        </Form.Control>
            </Col>
               <Button type="submit" lg={2} className="btn btn-blue space">
          ค้นหา
          
        </Button>
          </Form.Row></div>
          <hr />
      <div className="center3 container-fluid">
        <Grid container spacing={1}>
         
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <Paper elevation={1}>
                <Doughnut
                  data={this.state.chartData}
                  options={{
                    responsive: true,
                    title: {
                      display: true,
                      text: "รายการทั้งหมด",
                      fontSize: 25,
                    },
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                    layout: {
                      padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                      },
                    },
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
          <hr/>
          <Grid container item xs={12} spacing={3}>
          
            <Grid item xs={4}>
              <Paper elevation={1}>
                <Bar
                  data={this.state.chartData2}
                  options={{
                    responsive: true,
                    title: {
                      display: true,
                      text: "รายการทั้งหมด",
                      fontSize: 25,
                    },
                    legend: {
                      display: false,
                    },
                    layout: {
                      padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                      },
                    },
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
      </div>
      </div>
    );
  }
}


export default ChartData;
