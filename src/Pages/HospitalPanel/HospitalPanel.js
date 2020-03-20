import React from 'react';
import {Card, Col, Row, Tooltip, Typography} from 'antd';
import {TwitterTimelineEmbed} from "react-twitter-embed";
import './HospitalPanel.css';

const {Title, Text} = Typography;

const HospitalPanel = ({data}) => {

    return <div className="hospital-panel">
        <Title level={2}>Поточний стан лікарень</Title>
        <Row>
              <Col xs={{span: 24}} sm={{span: 24}} md={{span: 20}} style={{marginTop: '25px'}}>
                  <Row>
                      {data.map(item => {
                          console.log(item);
                        const titleNode = <Tooltip placement="bottomLeft" title={item.legal_entity_name}>
                            <Text>{item.legal_entity_name}</Text>
                        </Tooltip>;
                        return <Col key={item.legal_entity_id + '' + item.division_id} xs={{span: 24}} sm={{span: 11}} md={{span: 5}}
                                    style={{marginRight: '20px', marginBottom: '20px'}}>
                            <Card title={titleNode}>
                                <div>
                                    <Text>division_settlement_type { item.division_settlement_type }</Text>
                                    <div>
                                        <Text>division_settlement_type { item.division_settlement_type }</Text>
                                    </div>
                                </div>

                                <div>
                                    <Text>division_name { item.division_name }</Text>
                                    <div>
                                        <Text>ehealth_division_lng { item.ehealth_division_lng }</Text>
                                        <Text>ehealth_division_lat { item.ehealth_division_lat }</Text>
                                    </div>
                                </div>
                            </Card>
                        </Col>;
                    })}
                </Row>
            </Col>
            <Col xs={{span: 24}} md={{span: 4}}>
              
            </Col>
        </Row>
    </div>;
};

export default HospitalPanel;
