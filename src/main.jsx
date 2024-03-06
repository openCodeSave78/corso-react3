import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import Contatti from './pages/Contatti.jsx'
import Cards from './pages/Cards.jsx'
import Card  from './pages/Card.jsx'
import CardsChildren from './pages/CardsChildren.jsx'

const router = createBrowserRouter([
{
  path:"/",
  element: <App></App>
},
{
  path:"/about",
  element: <About></About>
},
{
  path:"/contatti",
  element: <Contatti></Contatti>
},
{
  path:"/cards",
  element: <Cards></Cards>
},
{
  path:"/cards/:cardID",
  element: <Card/>,
},
{
  path:"/cards-children",
  element: <CardsChildren></CardsChildren>,
  children:[
    {
      path:":cardID",
      element:<Card/>
    },
  ],
},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
