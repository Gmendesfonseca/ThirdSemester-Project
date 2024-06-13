import { SetStateAction, useEffect, useRef, useState } from "react";
import { Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { ChatType } from "../../services/chats";

interface ChatProps {
  data: ChatType;
}

export const Chat2 = ({ data }: ChatProps) => {
  const [hovered, setHovered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> | null };
  }) => {
    setMessage(event.target.value || ""); // Provide a default value for null case
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const [avatar, setAvatar] = useState(
    "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  );

  function handleOpenButtonClicked() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.click();

    fileInput.addEventListener("change", function () {
      if (this.files && this.files.length > 0) {
        const reader = new FileReader();

        reader.addEventListener(
          "load",
          function () {
            // Check if reader.result is a string and not null before setting it
            if (typeof reader.result === "string") {
              setAvatar(reader.result);
            } else {
              // Handle non-string results, e.g., show an error or use a default image
              console.error("Failed to load image");
              // Optionally, reset the avatar to a default image
              setAvatar(
                "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              );
            }
            fileInput.remove();
          },
          false
        );

        reader.readAsDataURL(this.files[0]);
      }
    });
  }

  return (
    <>
      <div className="chat">
        <div className="chat_header">
          <Avatar
            sx={{ width: 64, height: 64 }}
            src={avatar}
            onClick={handleOpenButtonClicked}
          />
          <span>{data && data.name ? data.name : "Nome do Usuário"}</span>
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
        <div className="chat_body">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat_footer">
          <input
            type="text"
            placeholder="Digite uma mensagem"
            value={message}
            onChange={handleInputChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleSendMessage}
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
};
