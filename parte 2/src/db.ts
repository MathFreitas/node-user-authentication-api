import { Pool } from "pg";

const connectionString = 'postgres://fopyshbm:CcXRYdkLVmBaErPEqdEefxVSHgbxUwMb@kesavan.db.elephantsql.com/fopyshbm';

const db = new Pool({ connectionString });

export default db;