import './ChallengeList.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../global'
import { useEffect, useState } from 'react'

export default function SEChallengeList () {
    const [seiPrompts, setSeiPrompts] = useState([])

    useEffect(() => {
        const getSeiPrompts = async () => {
            const response = await axios.get(`${BASE_URL}challenge_prompts/`)
            setSeiPrompts(response.data)
            console.log(response)
        }
        getSeiPrompts()
    }, [])

    console.log(seiPrompts[2])

    if (seiPrompts.length < 1) return <h1>Loading...</h1>
    return(
        <div className="seChallengeList">
            <div className='designChallenge'>
                <div className='topSelect'>
                    <div className='Challenge'>
                        <div className='time'> Time Remaining: </div>
                        <Link className='titleBox' to='/UX'> UX CHALLENGE </Link>
                    </div>
                    <div className='homeTitle'> SE Design Challenge </div>
                    <div className='Challenge'>
                        <div className='time'> Time Remaining: </div>
                        <Link className='titleBox' to='/SE'> SE CHALLENGE </Link>
                    </div>
                </div>
                    <div className='promptContainer'>
                    <div className='promptBox'> Prompt Box </div>
                    <div className='submitButton'> START </div>
                </div>
            </div>

            <div className="today">
                <div className="challengeDisplay">
                    <div className="details">
                        {seiPrompts[2].name}
                    </div>
                    <div className='seChallengeBox'>
                        SE CHALLENGE
                    </div>
                    <div className="isCompleted">
                    <div className='status'>
                        Status
                    </div>
                    <div className='moreFeedback'>
                        Give More Feedback
                    </div>
                </div>
            </div>
                
            </div>
            <div className="previous">
                <div className='previousTitle'>
                    PREVIOUSLY <br/> SUBMITTED <br/> CHALLENGES
                </div>
                <div className="challengeDisplay">
                    <div className="details">
                        CSS Practice #1
                    </div>
                </div>
            </div>
        </div>
    )
}