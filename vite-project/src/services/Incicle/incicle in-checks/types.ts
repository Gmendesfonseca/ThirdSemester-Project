import { InCheckRepeat } from './enums';

export type InChecksParams = {
  page?: number;
  perPage?: number;
  search?: string;
  finished?: boolean;
};

export type EvaluationSector = {
  id: string;
  name: string;
  pivot: {
    created_at: string;
    evaluation_id: string;
    sector_id: string;
  };
};

export type EvaluationUnit = Pick<EvaluationSector, 'id' | 'name'> & {
  pivot: Pick<EvaluationSector['pivot'], 'created_at' | 'evaluation_id'> & { unit_id: string };
};

export type InCheckEvaluation = {
  id: string;
  title: string;
  description: string;
  message: string;
  start: string;
  end: string;
  view_categories: boolean;
  repeat: InCheckRepeat;
  quiz_id: string;
  responsible: any[];
  managers: any[];
  units: EvaluationUnit[];
  sectors: EvaluationSector[];
};

export type InCheckEvaluationItem = Pick<InCheckEvaluation, 'id' | 'title' | 'start' | 'end' | 'sectors' | 'units'>;

export type InCheckEvaluationPayload = Omit<InCheckEvaluation, 'id' | 'sectors' | 'units'> & {
  sectors: string[];
  units: string[];
};
