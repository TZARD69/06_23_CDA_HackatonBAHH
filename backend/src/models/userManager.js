const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (password, role , first_name, last_name, birth_date, phone, email,photo_url, adress, subscription_date, status) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.password,
        JSON.stringify(user.role),
        user.first_name,
        user.last_name,
        user.birth_date,
        user.phone,
        user.email,
        user.photo_url,
        user.adress,
        user.subscription_date,
        user.status,
      ]
    );
  }

  update(id, user) {
    const { role, ...userData } = user;
    const sqlSets = generateSqlSets(userData);

    return this.connection.query(
      `UPDATE ${this.table} SET ${sqlSets}, role = ? WHERE id = ?`,
      [...Object.values(userData), JSON.stringify(role), id]
    );
  }
}

module.exports = userManager;
