import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './header/navigation.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Index from './contents/Index.jsx'
import Footer from './footer/footer.jsx'
import { Provider } from "react-redux";
import { store } from './state/Store.jsx'
const router = createBrowserRouter([
    {
        path:'/',
        element:<Index/>

    },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Navigation/>
        <Provider store={store}>
            <div className='hompage-body p-0'> 
                <RouterProvider router={router}/>
            </div>
        </Provider>
        <Footer/>
  </StrictMode>,
)
