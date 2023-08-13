import request from "~/util/sample/request";

export function getUserName(userId: number) {
  // @ts-ignore
  return request(`/users/${userId}`).then((user) => user.name);
}
