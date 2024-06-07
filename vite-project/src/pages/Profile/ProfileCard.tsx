// import avatar from "../../assets/IL.png";
import "./Profile.css";
import img from "./elon.jpg";

export default function ProfileCard(props) {
  return (
    <div className="profile">
      <div className="profile_header"></div>
      <div className="profile_body">
        <img src={img} alt="Elon Musk" />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>

      <div className="profile_footer">Footer</div>
    </div>
  );
}
