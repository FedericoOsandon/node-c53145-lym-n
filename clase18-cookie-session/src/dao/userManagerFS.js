class UsersManagerFS {
  constructor() {
    this.path = '';
  }

  async addUser(user) {
    this.users.push(user);
  }

  async getUserById(id) {
    return this.users.find((user) => user.id === id);
  }

  async getUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  async getUsers() {
    return this.users;
  }
}