import { gql } from "@apollo/client";

const  LogoutMutation= gql`
mutation{
    logout{
        id
        email
    }
}
`
export default LogoutMutation