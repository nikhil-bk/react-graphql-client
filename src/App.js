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
import { useLazyQuery, useQuery } from '@apollo/client';
import CurrentUser from './queries/CurrentUser';
import { useEffect } from 'react';
import LyricCreate from './components/LyricCreate';
import LyricList from './components/LyricList';
import ProtectedRoute from './ProtectedRoute';

function App() {
   const HomePage=()=>{
    return (
      <div>
      <h3>Welcome to Songs Keeper Book</h3>
      <h5>Login to the application to make a song with your own lyrics</h5>
      </div>
    )
   }
   const {data} = useQuery(CurrentUser)

   
   
  
  return (
    <div className="container">
    {console.log(data)}

        <Header />
        {console.log(data)}
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginForm user={data}/>}/>
          <Route path='/signup' element={<SignupForm/>} />
          
          <Route path='/songs' element={<ProtectedRoute name="Songs" data={data}><Songs/></ProtectedRoute>} />
          <Route path='/songs/new' element={<ProtectedRoute name="SongsCreate"data={data}><SongsCreate/></ProtectedRoute>} />
          <Route path='/songs/:id' element={<ProtectedRoute name="SongDetails"data={data}><SongDetails/></ProtectedRoute> } />

        </Routes>
 

    </div>
  );
}

export default App;
