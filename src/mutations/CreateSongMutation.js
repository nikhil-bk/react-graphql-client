import { gql } from "@apollo/client";

const CreateSongMutation = gql`
   mutation AddSong($title:String){
      addSong(title:$title){
        id
        title
        
       }}
    
`
export default CreateSongMutation