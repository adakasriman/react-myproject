import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TodoProject from './projects/Todo project/TodoProject';


function Projects() {
    const [isLogedIn, setIsLogedIn] = useState(sessionStorage.getItem("loginvalue"));
    return (
        <div> 
            <div className='projects_tabs'>
            <Tabs>
                <TabList>
                    <Tab>Todo Project</Tab>
                    <Tab>pratice</Tab>
                </TabList>

                <TabPanel>
                    <TodoProject />
                </TabPanel>
                <TabPanel>
                   not statted
                </TabPanel>
            </Tabs>
            </div>
            {isLogedIn === null  && <Navigate to={'/login'} />}
        </div>
    );
}

export default Projects;