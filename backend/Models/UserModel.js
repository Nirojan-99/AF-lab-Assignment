class User {
  constructor(id, name, email, password, mobile, address, role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.mobile = mobile;
    this.address = address;
    this.role = role;
    this.cart = [];
    this.favorites = [];
  }
  getCart = () => {
    return this.cart;
  };
  setCart = (data) => {
    for (var i = 0; i < this.cart.length; i++) {
      if (this.cart[i] === data) {
        return false;
      }
    }
    this.cart.push(data);
  };

  removeItem = (data) => {
    for (var i = 0; i < this.cart.length; i++) {
      if (this.cart[i] === data) {
        this.cart.splice(i, 1);
        return true;
      }
    }
    return false;
  };
  deleteCart = () => {
    this.cart = [];
  };
  getFavorites = () => {
    return this.favorites;
  };
  setFavorites = (data) => {
    this.favorites.push(data);
  };
  removeFavorite = (data) => {
    for (let i = 0; i < this.favorites.length; i++) {
      if (this.favorites[i] === data) {
        this.favorites.splice(i, 1);
        return true;
      }
    }
    return false;
  };
}

module.exports = User;
