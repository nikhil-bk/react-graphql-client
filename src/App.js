import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

import RequireAuth from './components/requireAuth';
import Songs from './components/Songs';
import SongsCreate from './components/SongsCreate';
import SongDetails from './components/SongDetails';
import { useQuery } from '@apollo/client';
import CurrentUser from './queries/CurrentUser';

function App() {
   const HomePage=()=>{
    return (
      <div>
      <h3>Welcome to Songs Keeper Book</h3>
      <h5>Login to the application to make a song with your own lyrics</h5>
      </div>
    )
   }
   const { loading, error, data } = useQuery(CurrentUser);
   const location=useLocation()
   
  
  return (
    <div className="container">

        <Header />
        {console.log(data)}
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/login' element={data?.user?<Songs/>:<LoginForm/>} />
          <Route path='/signup' element={<SignupForm/>} />
          
          <Route path='/songs' element={data?.user?<Songs/>:<LoginForm/>} />
          <Route path='/songs/new' element={data?.user?<SongsCreate/>:<LoginForm/>} />
          <Route path='/songs/:id' element={data?.user?<SongsCreate/>:<LoginForm/> } />

        </Routes>
 

    </div>
  );
}

export default App;
