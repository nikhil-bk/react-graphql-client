import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'
import DeleteSongMutation from '../mutations/DeleteSongMutation'
import SongsQuery from '../queries/SongsQuery'
import CurrentUser from '../queries/CurrentUser'
import { useNavigate } from 'react-router-dom'

function Songs() {
  const { data: currentUser } = useQuery(CurrentUser)
  const { loading, error, data } = useQuery(SongsQuery)
  const navigate = useNavigate();
  const [deleteSong, { loading: deleteLoading, data: deleteData }] = useMutation(DeleteSongMutation)

  function handleSongDelete(id) {
    console.log(id)
    deleteSong({
      variables: {
        id
      },
      refetchQueries: [{ query: SongsQuery }]
    }).then((res) => console.log(res))

  }
  function renderSongs() {
    return data?.songs?.map(({ title, id }) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>{title}</Link>
          <i className='material-icons right' onClick={() => handleSongDelete(id)}>delete</i>
        </li>
      )
    })
  }
  return (
  
      
        loading ? <div>Loading.....</div>
        :
        (
        <div>
       { console.log("this songs page")}
          <ul className='collection'>
            {renderSongs()}
          </ul>
          <Link to="/songs/new" className='btn-floating btn-large red right'>
            <i className='material-icons'>add</i>
          </Link>
        </div>
        )
        


  

  )
}

export default Songs