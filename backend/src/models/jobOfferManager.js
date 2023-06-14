const AbstractManager = require("./AbstractManager");

const generateSqlSets = require("../services/generateSqlSets");

class JobOfferManager extends AbstractManager {
  constructor() {
    super({ table: "job_offers" });
  }

  publication;

  insert(offer) {
    return this.connection.query(
      `insert into ${this.table} (name, location, job_description, status, edition_date, contract_type, salary_min, salary_max, headhunter_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        offer.name,
        offer.location,
        offer.job_description,
        offer.status,
        offer.edition_date,
        offer.contract_type,
        offer.salary_min,
        offer.salary_max,
        offer.headhunter_id,
      ]
    );
  }

  update(id, offer) {
    const sqlSets = generateSqlSets(offer);

    return this.connection.query(
      `UPDATE ${this.table} SET ${sqlSets} WHERE id = ?`,
      [...Object.values(offer), id]
    );
  }
}

module.exports = JobOfferManager;
