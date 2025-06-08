import './App.css'
import { BrowserRouter,createBrowserRouter,Route,RouterProvider,Routes } from 'react-router-dom'
import Home from './components/Home'
import Buy_ticket from './components/Buy_ticket'
import Train_no from './components/Train_no'
import Path from './components/Path'
import Sell_ticket from './components/Sell_ticket'
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:
      <div>
        <Home/>
      </div>

    },
    {
      path:'/buy_ticket',
      element:
      <div>
        <Buy_ticket/>
      </div>
    },
    {
      path:'/train_no',
      element:
      <div>
        <Train_no/>
      </div>
    },
    {
      path:'/path',
      element:
      <div>
        <Path/>
      </div>
    },
    {
      path:'Sell_ticket',
      element:
      <div>
        <Sell_ticket/>
      </div>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
