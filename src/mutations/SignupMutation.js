import { gql } from "@apollo/client";

const SignUpMutation = gql`
mutation SignUpMutation($email:String, $password:String){
    signup(email:$email,password:$password){
        id
        email
    }
}
`
export default SignUpMutation