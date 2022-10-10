import { gql } from "@apollo/client";

const LikeLyricMutation = gql`
   mutation LikeLyric($id:ID,$user:String){
    likeLyric(id: $id,user:$user){
        id
        likes
       }}
    
`
export default LikeLyricMutation