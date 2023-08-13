import { User } from "~/util/sample/request";

const users: { [key: number]: User } = {
  4: { name: "tetty" },
  5: { name: "tetty2" },
};

export default function request(url: string) {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr("/users/".length), 10);
    process.nextTick(() =>
      users[userID]
        ? resolve(users[userID])
        : reject({
            error: `User with ${userID} not found.`,
          }),
    );
  });
}
