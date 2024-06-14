import { useState } from "react";
import "./Profile.css";
// import { useSession } from "../../context/SessionContext";
// import instagramIcon from "./instagramIcon.png";
// import linkedinIcon from "./linkedin.png";
// import githubIcon from "./github.png";

export default function ProfileCard(props) {
  // const { accountType } = useSession();
  const [isSettingsVisible, setSettingsVisible] = useState(false);

  const toggleSettings = () => {
    setSettingsVisible(!isSettingsVisible);
  };

  // const handleDataChange = (newData) => {
  //   setData(newData);
  // };

  return (
    <div className="content">
      <div className={`profile ${isSettingsVisible ? "hide" : ""}`}>
        <div className="profile_header">
          <button
            title="config"
            type="button"
            className=""
            onClick={toggleSettings}
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                clipRule="evenodd"
              />
            </svg> */}
          </button>
        </div>
        <div className="profile_body">
          <img src={props.avatar} alt="Foto de Perfil" />
          <h1>{props.name}</h1>
          <span>{props.email}</span>
          <p className="profileDescription">{props.description}</p>
        </div>

        {/* <div className="profile_footer">
          <a href="/home">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="/home">
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
          <a href="/home">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div> */}
      </div>
      {/* <div className={`profile_settings ${isSettingsVisible ? "show" : ""}`}>
        <h1>Alterar Dados</h1>
        <form className="profile_form">
          <label id="updateName" htmlFor="name">
            Nome
          </label>
          <input
            id="updateName"
            type="text"
            name="updateName"
            placeholder="Alterar Nome"
            value={user?.name}
          />
          <label id="updateEmail" htmlFor="email">
            E-mail
          </label>
          <input
            id="updateEmail"
            type="text"
            name="updateEmail"
            placeholder="Alterar Email"
            value={user?.email}
          />
          <label id="updateDescription" htmlFor="description">
            Descrição
          </label>
          <input
            id="updateDescription"
            type="text"
            name="updateDescription"
            placeholder="Alterar Descrição"
            value={user?.about}
          />
        </form>
      </div> */}
    </div>
  );
}
