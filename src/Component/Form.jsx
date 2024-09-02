

const Form = () => {
  return (
    <div className="hero-form">
        <div className="form-heading">
            <h1>Get instant Help</h1>
            <p> Boost Your Grades with @50% Off ! Hurry Now</p>
        </div>

        <div className="input"> 
            <div className="enter-text">
            <input type="text" placeholder="Enter your Name"  />
            <input type="text" placeholder="Enter your Email..." />
            <input type="number" placeholder="+91"/>
            </div>

            <div className="check-robot">
            <input type="checkbox" name="" id="checkbox" />
            <span> i&#39;m not a robot</span>
            </div>

            <div className="agree-form">
            <input type="checkbox" name="" id=""/>
            <span className="agreement">I agree with the <span className="blue-color">Privacy Policy </span> and <span className="blue-color">Terms & Condition </span> </span>
            </div>
        <button className="form-btn">
           GET FREE QUOTE </button>
        </div>
    </div>
  )
}

export default Form;
