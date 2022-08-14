import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GetFormData from './concepts/GetFormData';
import UseContextHook from './concepts/useContext/UseContextjHook';
import UseMemoHook from './concepts/UseMemoHook';

function Concepts() {

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Get Form Data</Tab>
                    <Tab>UseMeno</Tab>
                    <Tab>UseContext</Tab>

                </TabList>

                <TabPanel>
                    <GetFormData />
                </TabPanel>
                <TabPanel>
                    <UseMemoHook />
                </TabPanel>
                <TabPanel>
                    <UseContextHook />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Concepts;