import { gql } from "@apollo/client";

const DeleteSongMutation = gql`
   mutation DeleteSong($id:ID){
      deleteSong(id:$id){
        id
        
       }}
    
`
export default DeleteSongMutation