import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

import RequireAuth from './components/requireAuth';
import Songs from './components/Songs';
import SongsCreate from './components/SongsCreate';
import SongDetails from './components/SongDetails';

function App() {
   const HomePage=()=>{
    return (
      <div>
      <h3>Welcome to Songs Keeper Book</h3>
      <h5>Login to the application to make a song with your own lyrics</h5>
      </div>
    )
   }
  
  return (
    <div className="container">

        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/signup' element={<SignupForm/>} />
          
          <Route path='/songs' element={<Songs/>} />
          <Route path='/songs/new' element={RequireAuth(SongsCreate)} />
          <Route path='/songs/:id' element={RequireAuth(SongDetails)} />

        </Routes>
 

    </div>
  );
}

export default App;
