import style from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <div>
        <img src={props.image} alt="User avatar" />
        <p className={style.profile_p}>{props.name}</p>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{props.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{props.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
