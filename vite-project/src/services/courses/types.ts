export type CourseType = {
  id: number;
  name: string;
  description: string;
  workload: number;
  period: number;
};

export type CourseListType = {
  id: number;
  name: string;
  description: string;
  workload: number;
  period: number;
  options: JSX.Element;
};

export type RegisterCourseParams = {
  name: string;
  description: string;
  workload: number;
  period: number;
};

export type UpdateCourseParams = {
  id: number;
  name: string;
  description: string;
  workload: number;
  period: number;
};
