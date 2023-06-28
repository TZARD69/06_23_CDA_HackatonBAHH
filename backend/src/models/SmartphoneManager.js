const AbstractManager = require("./AbstractManager");

class SmartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "smartphone" });
  }

  insert(smartphone) {
    return this.connection.query(
      `insert into ${this.table} (model, os, ram_memory, storage, screen_size, network, charger) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        smartphone.model,
        smartphone.os,
        smartphone.ram_memory,
        smartphone.storage,
        smartphone.screen_size,
        smartphone.network,
        smartphone.charger,
      ]
    );
  }

  update(smartphone) {
    return this.connection.query(
      `update ${this.table} set model = ?, os = ?, ram_memory = ?, storage = ? , screen_size = ?, network = ?, charger = ? where id = ?`,
      [
        smartphone.model,
        smartphone.os,
        smartphone.ram_memory,
        smartphone.storage,
        smartphone.screen_size,
        smartphone.network,
        smartphone.charger,
        smartphone.id,
      ]
    );
  }
}

module.exports = SmartphoneManager;
