export const METHOD = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  DELETE: "DELETE",
} as const;

export type Method = (typeof METHOD)[keyof typeof METHOD];

export type ResponseOption = Record<string, never>;

export type Response = {
  statusCode: number;
  data: unknown;
  option?: ResponseOption;
};

export type Endpoint = {
  path: string;
  response: Partial<Record<Method, Response>>;
};
