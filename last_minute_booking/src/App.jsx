import './App.css'
import { BrowserRouter,createBrowserRouter,Route,RouterProvider,Routes } from 'react-router-dom'
import Home from './components/Home'
import Buy_ticket from './components/Buy_ticket'
import Train_no from './components/Train_no'
import Path from './components/Path'
import Sell_ticket from './components/Sell_ticket'
import Sold from './components/Sold'
import Navbar from './components/Navbar'
import Developer_desk from './components/Developer_desk'
import Terms from './components/Terms'
import { Toaster } from 'react-hot-toast';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>

    },
    {
      path:'/buy_ticket',
      element:
      <div>
        <Navbar/>
        <Buy_ticket/>
      </div>
    },
    {
      path:'/train_no',
      element:
      <div>
        <Navbar/>
        <Train_no/>
      </div>
    },
    {
      path:'/path',
      element:
      <div>
        <Navbar/>
        <Path/>
      </div>
    },
    {
      path:'/Sell_ticket',
      element:
      <div>
        <Navbar/>
        <Sell_ticket/>
      </div>
    },
    {
      path:"/developer-desk",
      element:
      <div>
        <Navbar/>
        <Developer_desk/>
      </div>
    },
    {
      path:"/terms",
      element:
      <div>
        <Navbar/>
        <Terms/>
      </div>
    },
    {
      path:"/sucess-payment",
      element:
      <div>
        <Sold/>
      </div>
    }
  ])
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
