class UsersManagerFS {
  constructor() {
    this.path = '';
  }

  async createUser(user) {
    this.users.push(user);
  }

  async getUserBy(filter) {
    return this.users.find((user) => user.id === id);
  }

  async getUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  async getUsers() {
    return this.users;
  }
}