import { gql } from "@apollo/client";

const AddLyricToSongMutation = gql`
   mutation AddLyricToSong($content:String,$songId:ID){
    addLyricToSong(content:$content,songId:$songId){
        id
         lyrics{
            id
            content
         }
        
       }}
    
`
export default AddLyricToSongMutation