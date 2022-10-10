import { useQuery } from '@apollo/client'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import fetchSongDetails from '../queries/fetchSongDetails'
import LyricCreate from './LyricCreate'
import LyricList from './LyricList'
function SongDetails() {


    const { id } = useParams()
    const { loading, data, error } = useQuery(fetchSongDetails, {
        variables: { id }
    })

    return (
        loading ? <div>Loading...</div> : (

            <div>
                <Link to="/songs">
                    Back</Link>
                    {console.log(data)}
                <h3>{data.song.title}</h3>
                <LyricList lyrics={data.song.lyrics}/>
                <LyricCreate id={id} />
            </div>



        )
    )
}

export default SongDetails