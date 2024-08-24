import { useContext } from 'react';
import './App.css';
import CreateForm from './CreateForm';
import Footer from './Footer';
import Header from './Header';
import { ModalContext } from './context';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import BlogPost from './BlogPost';
import NotFound from './NotFound';

function App() {
  // eslint-disable-next-line
  const {isOpen} = useContext(ModalContext)
  return (
    <div className="app">
      <Header />
      {isOpen && <CreateForm /> }
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts/:id' element={<BlogPost />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
    </div>
  );
}

export default App;
