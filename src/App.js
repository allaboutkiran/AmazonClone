import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
    ScrollRestoration} from "react-router-dom" ;

import { Footer } from './components/footer/Footer';
import Header from './components/header/Header'
import { HeaderBottom } from './components/header/HeaderBottom';
import Home from './pages/Home';
import { productsData } from './api/Api';

const Layout =()=>{
    return(
        <div>
            <Header/>
            
            <Outlet/>
            <Footer/>
        </div>
    )
}

function App(){
    const router= createBrowserRouter(createRoutesFromElements(
        
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} Loader={productsData}></Route>

            </Route>
        
    ))
    return(
    <div className='font-bodyFont bg-gray-100'>
        <RouterProvider router={router}>

        </RouterProvider>
        
        
    </div>
    );
}

export default App;