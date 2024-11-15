import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Features from './components/Features.jsx';
import Enterprise from './components/Enterprise.jsx';
import Support from './components/Support.jsx';
import './App.css';
import './index.css';

function App() {

  return (
    <>
      {/* <Header></Header>  */}
      <Header />
     
      <Home></Home>
      {/* <Features></Features>
      <Enterprise></Enterprise>
      <Support></Support> */}
      <Footer></Footer>
    </>
  )
}

export default App
