import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GetFormData from './concepts/GetFormData';
import UseContextHook from './concepts/useContext/UseContextjHook';
import UseEffect from './concepts/UseEffect';
import UseMemoHook from './concepts/UseMemoHook';
import UseRef from './concepts/UseRef';

function Concepts() {

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Get Form Data</Tab>
                    <Tab>useMeno</Tab>
                    <Tab>useContext</Tab>
                    <Tab>useEffenct(basic)</Tab>
                    <Tab>useRef</Tab>
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
                <TabPanel>
                    <UseEffect />
                </TabPanel>
                <TabPanel>
                    <UseRef />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Concepts;


/* 
Here I'm using react tabs form react-tabs and assigning each tab have different functional component.


*/