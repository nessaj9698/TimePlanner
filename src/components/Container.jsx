import Header from './Header';
import Content from './content/Content';
import Sidebar from './sidebar/Sidebar';
import testDB from '../firebase';
import React from 'react'
import { useSelector } from 'react-redux';
import SignInScreen from '../auth';


const Container = () => {
  
        return (
            <div className='container'>
                <Header />
                <Content />
               
            </div>
        )
    }
  



export default Container;