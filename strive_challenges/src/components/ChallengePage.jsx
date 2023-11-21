import {Link} from 'react-router-dom'

export default function ChallengePage () {


    return(
        <div>
            <div className='promptContainer'>
                <div className='promptBox'> Prompt Box </div>
                <textarea Style='height: 294px; vertical-align: super' className="code" placeholder="Type or Copy/Paste Code Answer Here"/>
                <Link to='/' Style='margin-top: 15px; margin-right: 0px' className='submitButton'> Submit </Link>
            </div>
        </div>
    )
}