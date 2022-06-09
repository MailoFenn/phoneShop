import './App.css';
import 'antd/dist/antd.css';
import React, {Component} from 'react';
import Header from "../Header/Header";
import PhonePage from "../PhonePage/PhonePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "../Cart/Cart";
import CasesPage from "../CasesPage/CasesPage";
import HeadphonePage from "../HeadphonesPage/HeadphonePage";
import Footer from "../Footer/Footer";
import MainPage from "../MainPage/MainPage";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Header state={this.props.state.header}/>
                    <div className={'content'}>
                        <Routes>
                            <Route path={'/'} element={<MainPage/>}/>
                            <Route path={'/phones'} element={<PhonePage state={this.props}/>}/>
                            <Route path={'/cases'} element={<CasesPage state={this.props}/>}/>
                            <Route path={'/headphones'} element={<HeadphonePage state={this.props}/>}/>
                            <Route path={'/cart'} element={<Cart state={this.props}/>}/>
                        </Routes>
                    </div>
                    <Footer/>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}
