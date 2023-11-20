import './SEChallengeList.css'

export default function SEChallengeList () {


    return(
        <div className="seChallengeList">
            <div className="today">
                <h2>Today's Practice</h2>
                <div className="challengeDisplay">
                    <div className="details">
                        Javascript Practice #1
                    </div>
                    <div className="isCompleted">
                        Incomplete
                    </div>
                </div>
            </div>
            <div className="previous">
                <h2>Previous</h2>
                <div className="challengeDisplay">
                    <div className="details">
                        CSS Practice #1
                    </div>
                    <div className="isCompleted">
                        Feedback
                    </div>
                </div>
            </div>
        </div>
    )
}