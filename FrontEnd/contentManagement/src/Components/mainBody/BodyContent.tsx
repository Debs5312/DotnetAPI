import "./BodyContent.css";
import FirstItem from "./firstItem/FirstItem";
import SecondItem from "./secondItem/SecondItem";
import ThirdItem from "./thirdItem/ThirdItem";

const BodyContent = () => {
  return (
    <div className="body__container">
      <FirstItem />
      <SecondItem />
      <ThirdItem />
    </div>
  )
}

export default BodyContent;