const AbstractManager = require("./AbstractManager");

class headhunterCompanyManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }
}

module.exports = headhunterCompanyManager;
