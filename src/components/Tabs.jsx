import React, { useState } from 'react';
import TabButton from './tab/tab-button/TabButton';
import TabContent from './tab/tab-content/TabContent';

const Tabs = () => {

  
   const tabs = [
    {
        id: 1,
        tabTitle: 'Tab 1',
        title: 'Title 1',
    },
    {
        id: 2,
        tabTitle: 'Tab 2',
        title: 'Title 2',
    },
    {
        id: 3,
        tabTitle: 'Tab 3',
        title: 'Title 3',
       
    },
    {
        id: 4,
        tabTitle: 'Tab 4',
        title: 'Title 4',
    },
   
   ];
   const [tabIndex, setTabIndex] = useState(0);
   const onTabClick = (index)=>{
        setTabIndex(index);
   }
   
    return (
        <div className='container'>
            <TabButton tabs={tabs} activeTabIndex={tabIndex} onTabClick={onTabClick}/>
            <TabContent tabs={tabs} activeTabIndex={tabIndex}/>
            {/* TODO Add tabs here */}
        </div>
    );
}

export default Tabs;
