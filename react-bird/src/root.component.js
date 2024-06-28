import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

export default function Root(props) {
  return (
    <div>
      <BrowserRouter basename='/react'>

        <div>
          <Link to={'/'}>React首页</Link>
          <Link to={'/about'}>React关于</Link>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
