import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return <BrowserRouter>
  <div>
    <header>
    <h1>Sample Project</h1>
    <span style={{flex: 1}}/>
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="gallery">Gallery</Link>
    </nav>
    </header>

    <Routes>
    <Route index element={<HomePage/>}/>
    <Route path="about"  element={<AboutPage/>}/>
    <Route path="gallery" element={<GalleryPage/>}/>
    <Route path="*" element={<ErrorPage/>}/>
    
    
      
    

    </Routes>
   
    

    
    
  </div>
  </BrowserRouter>
  
}

function HomePage(){
  return <div className="contents">
  <h2>Home Page</h2>
  <p>Hello I'am Arun Thankaiah</p>
</div>;
}

function AboutPage(){
  return <div className="contents">
    <h2>About Page</h2>
    <p>I'am a Full Stack Web Devloper</p>
  </div>
}

function GalleryPage(){
  return <div className="contents">
    <h2>Gallery Page</h2>
    
  </div>
}

function ErrorPage(){
  return <div className="contents">
    <h2>404</h2>
    <p>Page not found</p>
    
  </div>
}



