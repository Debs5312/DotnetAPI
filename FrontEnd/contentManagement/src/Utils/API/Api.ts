import axios, { AxiosResponse } from "axios";
import { Content } from "../Models/ModelInterface";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Content-Type": "application/json",
    timeout: 1500,
  },
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: string) =>
    instance.post(url, body).then(responseBody),
  put: (url: string, body: string) =>
    instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const CommentAPI = {
  getComments: (): Promise<Content[]> => requests.get("ContentApi/"),
  getAComment: (id: string): Promise<Content> =>
    requests.get(`ContentApi/${id}`),
  createComment: (post: string): Promise<Content> =>
    requests.post("ContentApi/addContent", post),
  updateComment: (post: string, id: string): Promise<Content> =>
    requests.put(`ContentApi/updateContent/${id}`, post),
  deleteComment: (id: string): Promise<Content> =>
    requests.delete(`ContentApi/deleteContent/${id}`),
};
