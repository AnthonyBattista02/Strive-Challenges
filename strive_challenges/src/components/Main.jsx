import { Route, Routes } from 'react-router-dom'
import SEChallengeList from './SEChallengeList'
import UXChallengeList from './UXChallengeList'
import ChallengePage from './ChallengePage'
import GiveFeedback from './GiveFeedback'
import MyFeedback from './MyFeedback'

export default function Main () {


    return(
        <div className='routes-container'>
            <Routes>
                <Route path='/SE' element={<SEChallengeList/>} />
                <Route path='/UX' element={<UXChallengeList/>} />
                <Route path='/Challenge' element={<ChallengePage/>} />
                <Route path='/GiveFeedback' element={<GiveFeedback/>} />
                <Route path='/Feedback' element={<MyFeedback/>} />
            </Routes>
        </div>
    )
}