import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GetFormData from './concepts/GetFormData';

function Concepts() {

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Get Form Data</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                   <div>
                    <GetFormData />
                   </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Concepts;