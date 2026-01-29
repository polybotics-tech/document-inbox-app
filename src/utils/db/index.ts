//import * as SQLite from "expo-sqlite";

//const db = await SQLite.openDatabaseAsync(FIXED_DATA.dbConfig.dbName);

export async function runFirstDbInitialization() {
  //--check if is first time opening app
}

export function insertDocumentBatch(docs: any[]) {
  return new Promise(async (resolve) => {
    let values: any[] = [];
    let indexed_at = Date.now();

    docs.forEach((doc) => {
      values.push([
        doc.path,
        doc.name,
        doc.ext,
        doc.size,
        doc.parent_dir,
        doc.modified_at,
        indexed_at,
      ]);
    });

    console.log("values: ", values);

    // await db.withExclusiveTransactionAsync(async (txn) => {
    //   txn.runAsync(SCHEMA.insertValue.documents, values);

    // });
    resolve(values);
  });
}
