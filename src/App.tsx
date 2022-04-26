import React from 'react';
import { Route , Routes, useRoutes, BrowserRouter as Router } from 'react-router-dom'
import Content from './Components/Content/Content';

const  App = () => {
  return (
  <>
    <Routes>
      <Route path='/Content' element={<Content/>}/>
    </Routes>
    
  </>
  )
}

export default App;