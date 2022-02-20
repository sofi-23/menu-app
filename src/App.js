import './styles/main.css';
import Login from "./pages/Login/Login"
import "bootstrap/dist/css/bootstrap.min.css"
import { useAppContext } from "./context/Context"
import { Routes, Route, Outlet } from 'react-router-dom';
import MenuContainer from "./pages/Home/menu/MenuContainer"


function App() {
  
  const { loggedIn, setLoggedIn } = useAppContext()
  
  setLoggedIn(window.sessionStorage.getItem("loggedIn")) //useEffect??
  
  return (
    <>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route element= { loggedIn ? <Outlet /> : <Login />} >
          <Route path="/home" element={<MenuContainer/>} />
        </Route>
      </Routes>
      </>
  );
}

export default App;
