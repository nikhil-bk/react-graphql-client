import { gql } from "@apollo/client";

const  SongsQuery= gql`
{
    songs{
        id
        title
        
    }
}
`
export default SongsQuery