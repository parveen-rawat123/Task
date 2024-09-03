
// export const Arr = [1,2,3];

import styled from "styled-components";


const AboutTwo = () => {
  return (
    <div className="card">
      <CardItem className="card-item" data-number="01">
        <img src="card1.png" alt="" />
        <h3>Detailed Inputs</h3>
        <p>
          Ordering from us is super easy! All you have to do is fill out the
          detail form with everything you want our management assignment expert
          to take care of and hit the next button to proceed towards the payment
          window.
        </p>
      </CardItem>
      <CardItem className="card-item" data-number="02">
        <img src="card2.png" alt="" />
        <h3> Payment</h3>
        <p>
          Once you reach the payment window, you will see multiple options to
          make a payment. If you have a discount code then, simply enter the
          code and receive affordable management assignment help from the best
          experts in Australia.
        </p>
      </CardItem>
      <CardItem className="card-item" data-number="03">
        <img src="card3.png" alt="" />
        <h3> Download The Solutions</h3>
        <p>
          As soon as you make a payment, your order gets confirmed and is
          instantly transferred to the content department.  ensures to churn out the best content and delivery
          of error free management assignments online!
        </p>
      </CardItem>
    </div>
  );
};

const CardItem = styled.div`
  &::before {
  content: attr(data-number);
  border: 1px solid rgba(128, 128, 128, 0.509);
  background-color: white;
  z-index: 2;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  left: -11px;
  top: -11px;
}


`


export default AboutTwo;

