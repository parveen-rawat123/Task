import { Star } from "../utils/Star"

const Review = () => {
  return (
    <div className="outer-rating">
        <div className="inner-rating">
        <div className="trustedby">
            Trusted By
        </div>

        <div className="company"> 
            <div>
            <img src="one.png" alt=""/>
            </div>
            <div>
             <Star/>
            <p>Sitejabber</p>
            </div>
        </div>
        <div className="company"> 
            <div>
            <img src="two.png" alt="" />
            </div>
            <div>
            <Star/>
            <p>ResellerRatings</p>
            </div>
        </div>
        <div className="company"> 
            <div>
            <img src="three.png" alt="" />
            </div>
            <div>
            <Star/>
            <p>ManagementAssignmentHelp</p>
            </div>
        </div>
        <div className="company"> 
            <div>
            <img src="four.png" alt="" />
            </div>
            <div>
            <Star/>
            <p>Google</p>
            </div>
        </div>
        <div className="company"> 
            <div>
            <img src="five.png" alt="" />
            </div>
            <div>
            <Star/>
            <p>Trustpilot</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Review
