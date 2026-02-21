import type { DbType } from "../db/db.types.js";

class Repository {
  constructor(readonly db: DbType) {}
}

export { Repository };
