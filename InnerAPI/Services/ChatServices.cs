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
