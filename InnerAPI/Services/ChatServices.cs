using InnerAPI.Dtos.Chat;
using InnerAPI.Models;
using System.Collections.Generic;
using System.Linq;


namespace InnerAPI.Services
{
    public class ChatService
    {
        //   type ChatType = {
        //   id: string;
        //   user1: UserType;         //só no back
        //   user2: UserType;         //só no back
        //   name: string;            //Nome do user != meu id
        //   description: string;     //Ultima mensagem enviada
        //   messages: MessageType[]; //Isso é um array de mensagens
        //   image: string;           //Imagem do user != meu id
        //   updated_at: string;
        // };

        // export type MessageType = {
        //   id: string;
        //   text: string;
        //   creatorName: number;
        //   creatorImage: string;
        //   creatorAccountType: AccountType;
        //   created_at: string;
        // };

        // export enum AccountType {
        //   HEADOFFICE = 'HEADOFFICE',
        //   BRANCH = 'BRANCH',
        //   PROFESSOR = 'PROFESSOR',
        //   STUDENT = 'STUDENT',
        // }

        private readonly Dictionary<int, Chat> _chats = new();
        private readonly Dictionary<int, List<Message>> _messages = new();
        private int _nextChatId = 1;
        private int _nextMessageId = 1;


        public IEnumerable<Chat> GetChats() => _chats.Values;

        public Chat? GetChatById(int id) => _chats.TryGetValue(id, out var chat) ? chat : null;

        public Chat Register(RegisterChatDto newChat)
        {
            var chat = new Chat
            {
                Id = _nextChatId++,
                UserId1 = (int)newChat.IdUser1,
                UserId2 = (int)newChat.IdUser2,
                DateCreation = DateTime.Now
            };
            _chats[chat.Id] = chat;
            _messages[chat.Id] = new List<Message>();
            return chat;
        }

        public Chat? Update(int id, Chat updatedChat)
        {
            if (!_chats.ContainsKey(id)) return null;

            _chats[id] = updatedChat;
            return updatedChat;
        }

        public bool Delete(int id)
        {
            if (!_chats.Remove(id)) return false;

            _messages.Remove(id);
            return true;
        }

        public void SendMessage(int chatId, int senderId, string text)
        {
            if (!_chats.ContainsKey(chatId)) return;

            var message = new Message
            {
                Id = _nextMessageId++,
                ChatId = chatId,
                SenderId = senderId,
                Text = text,
                Timestamp = DateTime.Now
            };

            if (!_messages.ContainsKey(chatId))
            {
                _messages[chatId] = new List<Message>();
            }
            _messages[chatId].Add(message);
        }

        public IEnumerable<Message> GetMessages(int chatId)
        {
            return _messages.TryGetValue(chatId, out var messages) ? messages : Enumerable.Empty<Message>();
        }
    }
}


// using System;
// using System.Collections.Generic;
// using System.Linq;
// using InnerAPI.Dtos.Chat;
// using InnerAPI.Models;
// using InnerAPI.Utils;

// namespace InnerAPI.Services
// {
//     public class ChatServices
//     {
//         private readonly SharedService _sharedService;

//         public ChatServices(SharedService sharedService)
//         {
//             _sharedService = sharedService;
//         }

//         // Método para obter todos os chats de um usuário
//         public IEnumerable<Chat> GetChatsForUser(int userId)
//         {
//             return _sharedService.Chats.Where(chat => chat.UserId == userId);
//         }

//         // Método para registrar um novo chat
//         public Chat RegisterChat(RegisterChatDto newChatDto)
//         {
//             // Verifica se o usuário já tem um chat com o destinatário
//             if (_sharedService.Chats.Any(chat => chat.UserId == newChatDto.UserId && chat.RecipientId == newChatDto.RecipientId))
//             {
//                 throw new Exception("Um chat entre esses usuários já existe.");
//             }

//             // Cria um novo chat
//             var newChat = new Chat
//             {
//                 UserId = newChatDto.UserId,
//                 RecipientId = newChatDto.RecipientId
//             };

//             // Adiciona o novo chat à lista de chats
//             _sharedService.Chats.Add(newChat);

//             // Retorna o chat registrado
//             return newChat;
//         }

//         // Método para enviar uma mensagem em um chat
//         public void SendMessage(int chatId, string message)
//         {
//             // Verifica se o chat existe
//             var chat = _sharedService.Chats.FirstOrDefault(c => c.Id == chatId);
//             if (chat == null)
//             {
//                 throw new ArgumentException("Chat não encontrado.");
//             }

//             // Adiciona a mensagem ao chat
//             chat.Messages.Add(new Message
//             {
//                 Text = message,
//                 Timestamp = DateTime.UtcNow
//             });
//         }

//         // Método para buscar mensagens em um chat
//         public IEnumerable<Message> GetMessages(int chatId)
//         {
//             // Verifica se o chat existe
//             var chat = _sharedService.Chats.FirstOrDefault(c => c.Id == chatId);
//             if (chat == null)
//             {
//                 throw new ArgumentException("Chat não encontrado.");
//             }

//             // Retorna as mensagens do chat
//             return chat.Messages;
//         }

//         // Método para deletar um chat
//         public void DeleteChat(int chatId)
//         {
//             // Verifica se o chat existe
//             var chat = _sharedService.Chats.FirstOrDefault(c => c.Id == chatId);
//             if (chat == null)
//             {
//                 throw new ArgumentException("Chat não encontrado.");
//             }

//             // Remove o chat da lista de chats
//             _sharedService.Chats.Remove(chat);
//         }
//     }
// }
