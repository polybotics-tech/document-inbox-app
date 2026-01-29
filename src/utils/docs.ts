import FIXED_DATA from "../constants/fixed_data";
//import RNFS from "react-native-fs";
//import { File, Directory, Paths } from "expo-file-system";
import { useDimensions } from "@/src/hooks";
import { insertDocumentBatch } from "@/src/utils/db";
import { PermissionsAndroid } from "react-native";

export function isBlacklisted(path: string) {
  return FIXED_DATA.documentConfig.blacklistedDirs.some((dir) =>
    path.includes(dir),
  );
}

export async function walkDir(
  dirPath: string,
  onFile?: (doc: any) => Promise<any>,
) {
  if (isBlacklisted(dirPath)) return;

  let entries: any[] = [];

  try {
    //entries = await RNFS.readDir(dirPath);
  } catch (error) {
    console.log("err: ", error);
    return;
  }

  for (const entry of entries) {
    if (entry.isDirectory()) {
      await walkDir(entry.path, onFile);
    } else if (entry.isFile()) {
      const fileExtension = entry.name.split(".").pop()?.toLowerCase();

      if (FIXED_DATA.documentConfig.supportedExtensions.includes(fileExtension))
        onFile(entry);
    }
  }
}

export async function indexDocuments(rootDirs: string) {
  const batchSize = 50;
  let batch: any[] = [];

  for (const dir of rootDirs) {
    await walkDir(dir, async (doc) => {
      batch.push({
        path: doc.path,
        name: doc.name,
        ext: doc.name.split(".").pop()?.toLowerCase(),
        size: doc.size,
        parent_dir: dir,
        modified_at: new Date(doc.mtime).getTime(),
      });

      if (batch.length >= batchSize) {
        await insertDocumentBatch(batch);
        batch = [];
        await new Promise((r) => setTimeout(r, 0));
      }
    });
  }

  if (batch.length) {
    await insertDocumentBatch(batch);
  }
}

export async function scanDocuments() {
  let docs = [];

  for (const dir of FIXED_DATA.documentConfig.rootDirs) {
    try {
      //const files = await Directory(dir).readDir;
      const files: any[] = [];
      console.log("dir: ", dir, " ------- ");
      console.log("files: ", files);

      docs.push(...files);
    } catch (error) {
      //
      console.log("err: ", error);
    }
  }

  return docs.filter((doc) =>
    FIXED_DATA.documentConfig.supportedExtensions.includes(
      doc.name.split(".").pop()?.toLowerCase(),
    ),
  );
}

export function useRequestStoragePermissions() {
  const { isIOS } = useDimensions();

  if (isIOS) return;

  let result = async () => {
    try {
      return await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
    } catch (error) {
      //
      console.log("req err: ", error);
      return false;
    }
  };

  return result;
}

export async function checkStoragePermissions() {
  let hasReadPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  );

  if (hasReadPermission) return true;

  return false;
}
