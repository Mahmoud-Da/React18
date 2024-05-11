import apiClient from "./api-client";

interface Users {
  id: number;
  name: string;
  email: string;
}

class UserService {
  getAllUsers() {
    const controler = new AbortController();
    const request = apiClient.get<Users[]>("/users", {
      signal: controler.signal,
    });
    return { request, cancel: () => controler.abort() };
  }

  creatUser(user: Users) {
    return apiClient.post("/users", user);
  }

  updateUser(user: Users) {
    return apiClient.patch("/users" + user.id, user);
  }

  deleteUser(id: number) {
    return apiClient.delete("/users" + id);
  }
}

export default new UserService();
