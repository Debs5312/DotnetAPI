import "./ContentPage.css";
import CardItem from "./cardItem/CardItem";
import { useAppSelector } from "../../../../Utils/ReduxStore/Hooks";


const ContentPage = () => {
  const data = useAppSelector((state) => state.comment.value);
  
  return(
    <div className="body__container__Item3__comment">
      {data.map((comment,index) => 
        <CardItem key={index} comment={comment} />
      )}
    </div>
  )
}

export default ContentPage;