import './ChallengeList.css'
import { Link } from 'react-router-dom'

export default function UXChallengeList () {


    return(
        <div className="seChallengeList">
            <div className='designChallenge'>
                <div className='topSelect'>
                    <div className='Challenge'>
                        <div className='time'> Time Remaining: </div>
                        <Link className='titleBox' to='/UX'> UX CHALLENGE </Link>
                    </div>
                    <div className='homeTitle'> UX Design Challenge </div>
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
                        Javascript Practice #1
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