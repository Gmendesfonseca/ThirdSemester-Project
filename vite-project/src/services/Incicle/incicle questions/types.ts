import { AnswerTypeEnum, CommentEnum, EvidenceEnum } from './enums';

export type QuestionsParams = {
  page?: number;
  perPage?: number;
  search?: string;
};

export type QuestionType = {
  id: string;
  question: string;
  answer_type: AnswerTypeEnum;
  comment: CommentEnum;
  evidence: EvidenceEnum;
  category_id: string;
  category: {
    id: string;
    name: string;
  };
};

export type QuestionPayload = Omit<QuestionType, 'id' | 'category'>;
