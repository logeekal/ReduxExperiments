import React from 'react';
import './Main.css';
import Empty from './MainEmpty';
import ChatWindow from './ChatWindow'
import {store} from '../store';


const Main = ({user}) => {
    
    const activeUser = store.getState().activeUser;
    
    const renderMainContent = () => {
        console.log(`activeUser ${activeUser}`)
        if(activeUser !=null){
           return <ChatWindow  user={user} activeUser={activeUser} />;
        }else{
            return <Empty user={user} activeUser={activeUser} />;
        }
    };
     

    return <main className="Main">  {renderMainContent()}   </main>;
   
};

export default Main;