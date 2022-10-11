import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import AddLyricToSongMutation from '../mutations/AddLyricToSong'

function LyricCreate(props) {
    const [content,setContent]=useState('')
    const [inputRequiredError,setInputRequireError]=useState(false)
    const [addLyric,{data,loading,error}]=useMutation(AddLyricToSongMutation)
    function onSubmit(event){
        event.preventDefault()
        if(content===""){
setInputRequireError(true)
        }else{
          setInputRequireError(false)
          addLyric({
            variables:{
                content,
                songId:props.id
            }
        }).then(()=>setContent(""))
        }
       
    }
  return (
    <div>
    <form onSubmit={onSubmit.bind(this)}>
    <label>Add a Lyric</label>
    {console.log(data)}
    <input onChange={(event)=>setContent(event.target.value)} value={content}/>
    {inputRequiredError?<h6 style={{color:'red'}}>Input required*</h6>:<div></div>}
    <br/>
    <input type="submit"/>{ " "}   {loading && !data?.addLyricToSong?<h6>Adding...</h6>:<div></div>}
    
    </form>
    </div>
  )
}

export default LyricCreate