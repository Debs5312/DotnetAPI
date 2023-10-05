import AboutPage from "./about/AboutPage";
import ContentPage from "./content/ContentPage";
import "./ThirdItem.css";

const ThirdItem = () => {
  return (
    <div className="body__container__Item3">
      <ContentPage />
      <AboutPage />
    </div>
  )
}

export default ThirdItem;