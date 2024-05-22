import React, { useState } from 'react';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import MyComponent from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home isLogin={isLogin} setIsLogin={setIsLogin}/>,
        },
        {
            path: "/signin",
            element: <MyComponent setIsLogin={setIsLogin}/>,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
    ]);
    return (
        <div className='bg-black min-h-screen'>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

