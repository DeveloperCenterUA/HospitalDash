import React from 'react';
import {Typography} from "antd";
import './ContactPanel.css';

const {Title, Text} = Typography;

const ContactPanel = () => {
    return <div className="important-contacts">
        <Title>Other Important Contacts</Title>
        <div className="contacts">
            <div>
                <Text> Hotline: +0000</Text>
            </div>
            <div>
                <Text>Epidemiology Unit: +0000</Text>
            </div>
            <div>
                <Text>Quarantine Unit: +0000</Text>
            </div>
            <div>
                <Text>Disaster Management Unit: +0000</Text>
            </div>
        </div>
    </div>;
};

export default ContactPanel;
