import { Route, Routes } from 'react-router-dom'
import SEChallengeList from './SEChallengeList'

export default function Main () {


    return(
        <div className='routes-container'>
            <Routes>
                <Route path='/' element={<SEChallengeList/>} />
                
            </Routes>
        </div>
    )
}