import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Dashboard from '../pages/Dashboard'
import AllMessages from "../pages/AllMessages";
import Contact from "../pages/Contact";
import Messages from "../pages/Messages";

const router = createBrowserRouter([
    {
        path : "/",
        element: <App />,
        children : [
            {
                path : "",
                element : <Home />
            },
             {
                path : 'services',
                element : <Services />
            },
            {
                path : 'login',
                element : <Login />
            },
            {
                path : 'signup',
                element : <SignUp />
            },
            {
                path: 'user',
                element : <Dashboard />,
                children : [
                    {
                        path : 'all_audio',
                        element : <AllMessages />
                    },
                ]
            },
            {
                path : 'contact',
                element : <Contact />
            },
            {
                path : 'messages',
                element : <Messages />
            },
            

        ]
    }
])

export default router