import "./AboutPage.css";
import logo from "./prayer-namaste.jpg";

const AboutPage = () => {
  return(
    <div className="body__container__Item3__contact">
        <h2 className="item3__heading">About US</h2>
        <p className="item3__para1">
          A well-developed and authenticated plan will enable the event 
          management team to ensure better satisfaction of customers’ needs. 
          Various resources that are necessary for a particular even are also 
          delivered in time. The delays that are witnessed in most of the events 
          are therefore eliminated through proper planning. 
          The team is not caught unaware by various demands from customers.
        </p>
        <div className="item3__para2">
          <p className="item3__para2__key">Event Management &nbsp;&nbsp;- </p>
          <p className="item3__para2__value">Ujjibon Pvt. Ltd</p>
        </div>
        <div className="item3__para3">
          <p className="item3__para3__key">Contact Number&nbsp;(toll free) &nbsp;&nbsp;- </p>
          <p className="item3__para3__value">1800-378-408</p>
        </div>
        <p className="item3__para4">
          53/17/A Bidyayatan Sarani,North 24 Parganas
          P.O. - Alambazar, West Bengal, Kolkata -700035
        </p>
        <img src={logo} alt="Namaste" className="item3__para5"/>
        <button type="submit" className="item3__para6">Follow us for more</button>
      </div>
  )
}

export default AboutPage;