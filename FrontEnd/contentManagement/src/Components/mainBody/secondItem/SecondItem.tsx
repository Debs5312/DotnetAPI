import { useState } from "react";
import "./SecondItem.css";
import { useAppDispatch } from "../../../Utils/ReduxStore/Hooks";
import { addComment } from "../../../Utils/ReduxStore/CommentSlice";

const SecondItem = () => {
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault()
    dispatch(addComment(comment))
    setComment('');
  }

  return (
    <div className="body__container__Item2">
        <p className="body__container__Item2__desc">
          Let us know your experience..
        </p>
        <form onSubmit={handleSubmit} className="body__container__Item2__form">
          <input 
            type="text" 
            className="form__textInput" 
            placeholder="Enter your comment here..."
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
          />
          <button type="submit" className="form__button">Submit</button>
        </form>
      </div>
  )
}

export default SecondItem;