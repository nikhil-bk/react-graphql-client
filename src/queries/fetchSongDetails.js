import { gql } from "@apollo/client";

const  fetchSongDetails= gql`

query Song($id:ID!){
    song(id:$id){
      id
      title
      lyrics{
        id
        content
        likes
        likers
      }
    }
  }

`
export default fetchSongDetails