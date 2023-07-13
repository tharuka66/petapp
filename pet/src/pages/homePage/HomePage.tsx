import React from 'react';
import {Col, Row} from "antd";
import ServiceCollapse from "./ServiceCollapse";



const HomePage: React.FC = () => {

    return <>
        <Row>
           <Col lg={12} md={12} sm={24} xs={24} xl={12}>
<ServiceCollapse/>
           </Col>
           <Col lg={12} md={12} sm={24} xs={24} xl={12}>
               <div className='collapseDivBGImage'></div>
           </Col>
        </Row>
    </>;
};
export default HomePage;