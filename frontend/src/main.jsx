import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Length from '../components/length'
import Weight from '../components/weight'
import Temperature from '../components/temperature'
import Result from '../components/result.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "length",
                element: <Length/>
            },
            {
                path: "weight",
                element: <Weight/>
            },
            {
                path: "temperature",
                element: <Temperature/>
            },
            {
                path: "result",
                element: <Result/>
            },
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
