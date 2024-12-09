import style from "./FriendListItem.module.css";

const FriendListItem = ({ isOnline, name, avatar }) => {
  return (
    <div className={style.friend_list_item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p
        className={`${style.status} ${isOnline ? style.online : style.offline}`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
