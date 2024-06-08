// import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import img from "./profileAvatar.png";

// import { useState } from 'react';

export default function Profile() {
  // const [image, setImage] = useState('');
  // const navigate = useNavigate();

  return (
    <>
      <ProfileCard
        name="Elon Musk"
        description="O empresário Elon Musk é fundador e CEO da empresa de foguetes SpaceX; CEO da marca de carros elétricos Tesla; fundador e CEO da Neuralink (que implantou um chip no cérebro de humanos); cofundador, presidente da SolarCity (specializada em serviços de energia solar) e proprietário da rede social X (ex-Twitter)."
        avatar={img}
        email={"jonas_jm@live.com"}
      ></ProfileCard>
    </>
  );
}
