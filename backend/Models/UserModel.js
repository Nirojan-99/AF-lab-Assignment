class User {
  constructor(id, name, email, password, mobile, address, role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.mobile = mobile;
    this.address = address;
    this.role = role;
  }
}

module.exports = User;
