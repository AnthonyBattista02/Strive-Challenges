import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../global'

export default function ChallengePage () {
    const [seiPrompts, setSeiPrompts] = useState([])

    useEffect(() => {
        const getSeiPrompts = async () => {
            const response = await axios.get(`${BASE_URL}challenge_prompts/`)
            setSeiPrompts(response.data)
            console.log(response)
        }
        getSeiPrompts()
    }, [])
    
    console.log(seiPrompts[0])

    if (seiPrompts.length < 1) return <h1>Loading...</h1>
    return(
        <div>
            <div className='promptContainer'>
                <div className='promptBox'> {seiPrompts[2].prompt} </div>
                <textarea Style='height: 294px; vertical-align: super' className="code" placeholder="Type or Copy/Paste Code Answer Here"/>
                <Link to='/GiveFeedback' Style='margin-top: 15px; margin-right: 0px' className='submitButton'> Submit </Link>
            </div>
        </div>
    )
}