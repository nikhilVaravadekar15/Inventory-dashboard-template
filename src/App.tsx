import './App.css'
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import RootLayout from './components/layouts/RootLayout'


function App() {

  return (
    <RootLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index={true} element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RootLayout>
  )
}

export default App
