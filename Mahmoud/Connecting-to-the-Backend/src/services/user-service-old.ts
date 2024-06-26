import apiClient from "./api-client";
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
class UserService {
  getAllUsers() {
    const controller = new AbortController();

    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
  deleteUser(id: number) {
    return apiClient.delete("/users/" + id);
  }
  createUser(user: User) {
    return apiClient.post("/users", user);
  }
  updateUser(user: User) {
    return apiClient.patch(
      "https://jsonplaceholder.typicode.com/users/" + user.id,
      user
    );
  }
}

export default new UserService();
