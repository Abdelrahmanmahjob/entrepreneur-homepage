import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import BusinessIdeas from './components/BusinessIdeas.jsx'
import PostDetails from './components/PostDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/business-ideas" element={<BusinessIdeas />} />
        <Route path="/post-details" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
