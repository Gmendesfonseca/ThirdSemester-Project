import { QuestionType } from 'services/questions';

export type QuizParams = {
  page?: number;
  perPage?: number;
  search?: string;
};

export type Quiz = {
  company_id: string;
  created_at: string;
  description: string;
  id: string;
  is_active: boolean;
  name: string;
  questions: QuestionType[];
  updated_at: string;
};

export type QuizItem = Pick<Quiz, 'id' | 'name' | 'description' | 'questions'>;

export type QuizPayload = Pick<Quiz, 'name' | 'description'> & {
  questions: string[];
};
