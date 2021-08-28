import request from "@/utils/request";

export function queryRepositoryAuthorDetails({ author }) {
  //   https://api.github.com/users/kenny6520
  return request.get(`/users/${author}`, {
    accept: "application/vnd.github.v3+json",
  });
}
