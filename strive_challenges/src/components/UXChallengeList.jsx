

export default function UXChallengeList () {


    return(
        <div className="uxChallengeList">
            <div className="today">
                <h2>Today's Practice</h2>
                <div className="challengeDisplay">
                    <div className="details">
                        Design Practice #1
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
                        Ideation Practice #1
                    </div>
                    <div className="isCompleted">
                        Completed
                    </div>
                </div>
            </div>
        </div>
    )
}