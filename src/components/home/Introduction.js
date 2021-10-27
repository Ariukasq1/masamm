import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

export const Introduction = () => {
  return (
    <Row className="introduction">
      <Col span={12}>
        <p>МАСАМ төслийн хоёр дахь үе шат</p>
        <h2>
          Монгол Улсад ил тод байдал, оролцоог сайжруулахын төлөө нийгмийн эгэх
          хариуцлагыг уялдуулах нь
        </h2>
        <button>
          MASAM II танилцуулга <ArrowRightOutlined />
        </button>
      </Col>
      <Col span={12}>
        <img src="images/image1.png" />
      </Col>
    </Row>
  );
};
