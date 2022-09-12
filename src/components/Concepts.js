import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GetFormData from './concepts/GetFormData';
import SbilingOne from './concepts/props/Sbiling-comunication/SbilingOne';
import SbilingTwo from './concepts/props/Sbiling-comunication/SbilingTwo';
import SendData from './concepts/props/SenddataWithprop';
import NthComponent from './concepts/useContext/NthComponent';
import UseContextHook from './concepts/useContext/UseContextjHook';
import UseEffect from './concepts/UseEffect';
import UseMemoHook from './concepts/UseMemoHook';
import UseRef from './concepts/UseRef';

function Concepts() {
    const [userValue, setUserValue] = useState("");

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Get Form Data</Tab>
                    <Tab>useMeno</Tab>
                    <Tab>useEffenct(basic)</Tab>
                    <Tab>useRef</Tab>
                    <Tab>useContext</Tab>
                    <Tab>props between parent and child</Tab>
                    <Tab>Sbiling communication</Tab>
                    <Tab>Redux(state-magement)</Tab>
                </TabList>

                <TabPanel>
                    <GetFormData />
                </TabPanel>
                <TabPanel>
                    <UseMemoHook />
                </TabPanel>
                <TabPanel>
                    <UseEffect />
                </TabPanel>
                <TabPanel>
                    <UseRef />
                </TabPanel>
                <TabPanel>
                    <div className='display_flex'>
                        <div className='displayFlex_column width_50 gap_10'>
                            <div>
                                <h3>Some Component</h3>
                            </div>
                            <div>
                            <UseContextHook />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <SendData />
                </TabPanel>
                <TabPanel>
                    <div className='display_flex'>
                        <div className='displayFlex_column width_50 gap_10'>
                            <div>
                                <h3>Sbiling One Component</h3>
                            </div>
                            <div>
                                <SbilingOne setUserValue={setUserValue}/>
                            </div>
                        </div>

                        <div className='displayFlex_column width_50 gap_10'>
                            <div>
                                <h3>Sbiling Two Component</h3>
                            </div>
                            <div>
                                <SbilingTwo userValue={userValue} />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    Redux
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Concepts;


/* 
Here I'm using react tabs form react-tabs and assigning each tab have different functional component.


*/