import {  useApolloClient, useMutation, useQuery } from '@apollo/client'
import React from 'react'
import LikeLyricMutation from '../mutations/LikeLyricMutation'
import CurrentUser from '../queries/CurrentUser'

function LyricList({ lyrics }) {
    const [likeLyric, { data, loading, error }] = useMutation(LikeLyricMutation)
    const { loading:userLoading,data:userData } = useQuery(CurrentUser);

    function handleLike(id,likes,likers) {
        console.log(likers)
        likeLyric({
            variables: {
                id,
                user:userData?.user?.email
        
            }
            // optimisticResponse:{
            //     __typename:"Mutation",
            //     likeLyric:{
            //         id:id,
            //         __typename:"LyricType",
            //         likes:likers.includes(userData.user.email)?likes-1:likes+1
            //     }
            // }
        })
    }
    return (
        <div>

            <ul className='collection'>
                {lyrics?.map(({ id, content,likes,likers }) => {
                    return (
                        <li key={id} className="collection-item">{content}
                        <div className='vote-box'>
                            <i
                                onClick={() => handleLike(id,likes,likers)}

                                className='material-icons'>thumb_up</i>
                                {likes}
                                <span>
                                   {loading?<h6>{" "}Saving...</h6>:<div></div>}
                                </span>
                                
                                </div>
                                

                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default LyricList