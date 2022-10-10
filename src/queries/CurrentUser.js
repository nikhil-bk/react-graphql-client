import { gql } from "@apollo/client";

const  CurrentUser= gql`
{
    user{
        id
        email
    }
}
`
export default CurrentUser