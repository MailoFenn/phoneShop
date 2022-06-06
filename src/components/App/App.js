import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
import Header from "../Header/Header";
import PhonePage from "../PhonePage/PhonePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "../Cart/Cart";

const App = (props) => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header state={props.state.header}/>
                <div className={'content'}>
                    <Routes>
                        <Route path={'/'} element={<PhonePage state={props}/>}/>
                        <Route path={'/cases'} element={<h1>Чехлы</h1>}/>
                        <Route path={'/headphones'} element={<h1>Наушники</h1>}/>
                        <Route path={'/cart'} element={<Cart state={props}/>}/>
                    </Routes>
                </div>
            </React.Fragment>
        </BrowserRouter>
    );
}
export default App;
