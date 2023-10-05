import { useState } from "react";
import { Content } from "../../../../../Utils/Models/ModelInterface";
import {
  deleteComment,
  updateComment,
} from "../../../../../Utils/ReduxStore/CommentSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Utils/ReduxStore/Hooks";
import "./CardItem.css";
import logo from "./personLogo.png";
import { Hourglass } from "react-loader-spinner";
import { StatusCode } from "../../../../../Utils/StaticFunc";

type propObj = {
  comment: Content;
};

type updateParams = {
  item: string;
  id: string;
};

const style = {
  alignSelf: "flex-end",
};

const CardItem = ({ comment }: propObj) => {
  const [editscope, setEditscope] = useState<boolean>(false);
  const [deleteItem, setDeleteItem] = useState<boolean>(false);
  const [desc, setDesc] = useState<string>(comment.item);
  const dispatch = useAppDispatch();
  const { deleteStatus, loading } = useAppSelector((state) => state.comment);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data: updateParams = {
      item: desc,
      id: comment.id.toString(),
    };
    dispatch(updateComment(data));
    setEditscope(!editscope);
  };

  const handleDelete = () => {
    dispatch(deleteComment(comment.id.toString()));
    setDeleteItem(true);
  };

  if (deleteStatus === StatusCode.SUCCESS && deleteItem) {
    return;
  }

  return (
    <div className="body__container__Item3__comment__card">
      <img src={logo} alt="cardLogo" className="card__logo" />
      {editscope ? (
        <form className="update" onSubmit={handleSubmit}>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="update__item"
          />
          <button type="submit" className="update__submit__button">
            &#10003;
          </button>
        </form>
      ) : (
        <>
          <p className="card__content">{desc}</p>
          <i
            className="material-icons editicon"
            onClick={() => setEditscope(!editscope)}
          >
            edit
          </i>
        </>
      )}
      {loading ? (
        <Hourglass height={15} width={15} wrapperStyle={style} />
      ) : (
        <i
          className="fa fa-trash-o deleteicon"
          onClick={() => handleDelete()}
        ></i>
      )}
    </div>
  );
};

export default CardItem;
