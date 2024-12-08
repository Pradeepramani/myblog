import { useState } from 'react'
import Header from './Header/header.jsx'
import { Routes,Route } from 'react-router-dom'
import Blog from './Blog/blog.jsx'
import Body from './Body/body.jsx'
import Layout from './Layout/layout.jsx'
import Loginpage from './Createblog/loginpage.jsx'
import ProtectedRoute from './Createblog/auth.jsx'
import Createblog from './Createblog/createblog.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
<Routes>
{/* <Route path ='/'element={<Header/>}/> */}
<Route path='/' element={<Layout> <Body/></Layout>}/>
<Route path="/blog" element={<Layout><Blog /></Layout>} />
<Route path="/blog/create" element={<Layout><Blog /></Layout>} />
<Route path="/blog/login" element={<Layout><Loginpage /></Layout>} />
<Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Createblog />
                        </ProtectedRoute>
                    }
                />
</Routes>
    </div>
    </>
  )
}

export default App
