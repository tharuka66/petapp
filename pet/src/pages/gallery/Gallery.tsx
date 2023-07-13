import React from 'react';
import {Col, Image, Row} from 'antd';

const Gallery: React.FC = () => (
    <Row>
<Col lg={24} md={24} sm={24} xs={24} xl={24}>
    <h1>Our Gallery</h1>
    <Image.PreviewGroup
        preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
        }}
    >
        <Image className='galleryImageDiv' width='25%' src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
        <Image className='galleryImageDiv' width='25%' src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
        <Image className='galleryImageDiv' width='25%' src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
        <Image className='galleryImageDiv' width='25%' src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
        <Image className='galleryImageDiv' width='25%' src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
        <Image className='galleryImageDiv' width='25%' src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
        <Image className='galleryImageDiv' width='25%' src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
        <Image className='galleryImageDiv' width='25%' src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />

    </Image.PreviewGroup>
</Col>
    </Row>

);

export default Gallery;