import { PostType } from './types';
import { api } from '../api';

// GET
export function getPost(id: number): Promise<PostType> {
  return api.get<PostType>(`/post/${id}`).then((response) => {
    if (response.status !== 200) {
      throw new Error('Post not found');
    }
    return response.data;
  });
}

// POST
export function createPost(postData: PostType): Promise<PostType> {
  return api.post<PostType>('/post', postData).then((response) => {
    if (response.status !== 201) {
      throw new Error('Error creating post');
    }
    return response.data;
  });
}

// PUT
export function updatePost(id: number, postData: PostType): Promise<PostType> {
  return api.put<PostType>(`/post/${id}`, postData).then((response) => {
    if (response.status !== 200) {
      throw new Error('Error updating post');
    }
    return response.data;
  });
}

// DELETE
export function deletePost(id: number): Promise<void> {
  return api.delete(`/post/${id}`).then((response) => {
    if (response.status !== 204) {
      throw new Error('Error deleting post');
    }
  });
}

// GET ALL
export function getAllPosts(): Promise<PostType[]> {
  return api.get<PostType[]>('/post').then((response) => {
    if (response.status !== 200) {
      throw new Error('Error getting posts');
    }
    return response.data;
  });
}
