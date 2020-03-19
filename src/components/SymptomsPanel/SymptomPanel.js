import React from 'react';
import {Col, Row, Typography} from 'antd';
import PanelItem from "../PanelItem/PanelItem";

const {Title, Text} = Typography;

const SymptomPanel = () => {
    return <div>
        <Title>Головні симптоми</Title>
        <Text>Це найпоширеніші симптоми COVID-19. Деякі люди заражаються, але не розвиваються
             будь-які симптоми і не відчувають себе погано. Більшість людей (близько 80%) одужують хворобу без
             потребують спеціального лікування.</Text>
        <div>
            <Row>
                <Col style={{ textAlign: 'center', marginTop: '30px' }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <img src="http://hpb.health.gov.lk/media/feature/1.png" alt=""/>
                    <Title level={3}>Лихоманка</Title>
                </Col>
                <Col style={{ textAlign: 'center', marginTop: '30px' }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <img src="http://hpb.health.gov.lk/media/feature/2.png" alt=""/>
                    <Title level={3}>Кашель і чхання</Title>
                </Col>
                <Col style={{ textAlign: 'center', marginTop: '30px' }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <img src="http://hpb.health.gov.lk/media/feature/3.png" alt=""/>
                    <Title level={3}>Біль у горлі</Title>
                </Col>
                <Col style={{ textAlign: 'center', marginTop: '30px' }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <img src="http://hpb.health.gov.lk/media/feature/4.png" alt=""/>
                    <Title level={3}>Чхання і нежить </Title>
                </Col>
                <Col style={{ textAlign: 'center', marginTop: '30px' }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
                    <img src="http://hpb.health.gov.lk/media/feature/9.png" alt=""/>
                    <Title level={3}>Утруднення дихання</Title>
                </Col>
            </Row>
        </div>

    </div>
};

export default SymptomPanel;
