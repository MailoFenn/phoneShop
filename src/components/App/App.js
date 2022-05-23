import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
import Header from "../Header/Header";
import PhonePage from "../PhonePage/PhonePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header/>
                <div className={'content'}>
                    <Routes>
                        <Route path={'/'} element={<PhonePage/>}/>
                        <Route path={'/cases'} element={<h1>Чехлы</h1>}/>
                        <Route path={'/headphones'} element={<h1>Наушники</h1>}/>
                    </Routes>
                </div>
            </React.Fragment>
        </BrowserRouter>
    );
}
export default App;
