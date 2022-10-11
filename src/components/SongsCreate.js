import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CreateSongMutation from '../mutations/CreateSongMutation'
import SongsQuery from '../queries/SongsQuery'

function SongsCreate() {
    const [songTitle,setSongTile]=useState('')
    const [inputRequiredError,setInputRequireError]=useState(false)
    const navigate=useNavigate()
    const [addSong,{loading,data,error}]=useMutation(CreateSongMutation)
    function onSubmit(event){
        event.preventDefault()
        if(songTitle===""){
          setInputRequireError(true)
        }
        else{

          setInputRequireError(false)
        addSong({
            variables:{
                title:songTitle
            },
            refetchQueries:[{query:SongsQuery}]
            
        }).then(()=>
        navigate("/songs")
        ).catch(err=>console.log(err))
      }
    }
  return (
    <div>
    <Link to="/songs">Back</Link>
    <h3>Create New Song</h3>
    <form onSubmit={onSubmit.bind(this)}>
    <label>Song Title:</label>
    <input onChange={e=>setSongTile(e.target.value)} value={songTitle}/>
    
    {inputRequiredError?<h6 style={{color:'red'}}>Input required*</h6>:<div></div>}
    <br/>
    <input type='submit'/>{" "}{loading?<h6>Loading...</h6>:<div></div>}

    </form>
    </div>
  )
}

export default SongsCreate