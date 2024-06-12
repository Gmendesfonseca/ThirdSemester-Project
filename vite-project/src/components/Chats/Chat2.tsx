import { useState } from "react";
import { Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Chat2() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleDropdownOpen = () => {
    // Code to open the dropdown with 3 options
  };

  return (
    <>
      <div className="chat">
        <div className="chat_header">
          <Avatar
            sx={{ width: 64, height: 64 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <span>Chat With Elon Musk</span>
          <button className="chatElipsis" onClick={handleDropdownOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </button>
        </div>
        <div className="chat_body"></div>
        <div className="chat_footer">
          <input type="text" placeholder="Digite uma mensagem" />
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {hovered ? (
              <SendIcon className={hovered ? "rotate" : ""} />
            ) : (
              "Enviar"
            )}
          </button>
        </div>
      </div>
    </>
  );
}
