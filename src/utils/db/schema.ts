import FIXED_DATA from "../../constants/fixed_data";

const SCHEMA = {
  createTable: {
    documents: `
        CREATE TABLE IF NOT EXISTS ${FIXED_DATA.dbConfig.dbTables.documents} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,

            path TEXT UNIQUE NOT NULL,
            name TEXT NOT NULL,
            ext TEXT NOT NULL,

            size INTEGER NOT NULL,
            parent_dir TEXT NOT NULL,
            mime_type TEXT,
            
            modified_at INTEGER NOT NULL,
            indexed_at INTEGER NOT NULL
        );
    `,
  },
  createIndex: {
    documents: `
        CREATE INDEX IF NOT EXISTS idx_ext ON ${FIXED_DATA.dbConfig.dbTables.documents}(ext);
        CREATE INDEX IF NOT EXISTS idx_size ON ${FIXED_DATA.dbConfig.dbTables.documents}(size);
        CREATE INDEX IF NOT EXISTS idx_modified_at ON ${FIXED_DATA.dbConfig.dbTables.documents}(modified_at);
        CREATE INDEX IF NOT EXISTS idx_parent_dir ON ${FIXED_DATA.dbConfig.dbTables.documents}(parent_dir);
    `,
  },
  insertValue: {
    documents: `
        INSERT OR REPLACE INTO ${FIXED_DATA.dbConfig.dbTables.documents}
        (path, name, ext, size, parent_dir, modified_at, indexed_at)
        VALUES (?,?,?,?,?,?,?)
    `,
  },
};

export default SCHEMA;
