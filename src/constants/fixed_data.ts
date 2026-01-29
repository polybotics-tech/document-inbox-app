//import RNFS from "react-native-fs";
//import { Paths } from "expo-file-system";

const FIXED_DATA = {
  onboardingMeta: [
    {
      heading: "Crafted for Organized Viewing",
      description:
        "Our sweaters are thoughtfully designed with premium fabrics to keep you warm, cozy, and fashionable.",
      thumbnail: require("../../assets/images/onboarding/onboard-1.jpg"),
    },
    {
      heading: "Sustainable, Soft, and Timeless",
      description:
        "Our sweaters are thoughtfully designed with premium fabrics to keep you warm, cozy, and fashionable.",
      thumbnail: require("../../assets/images/onboarding/onboard-2.jpg"),
    },
    {
      heading: "Sustainable, Soft, and Timeless",
      description:
        "Our sweaters are thoughtfully designed with premium fabrics to keep you warm, cozy, and fashionable.",
      thumbnail: require("../../assets/images/onboarding/onboard-3.jpg"),
    },
  ],
  dbConfig: {
    dbName: "docinbox_db",
    dbTables: {
      documents: "documents",
    },
  },
  documentConfig: {
    supportedExtensions: ["pdf", "doc", "docx", "txt"],
    blacklistedDirs: ["/Android/data", "/Android/obb", "/.cache", "/cache"],
    rootDirs: [
      // RNFS.ExternalStorageDirectoryPath + "/Documents",
      // RNFS.ExternalStorageDirectoryPath + "/Download",
      // Paths.documentDirectory,
      // Paths.downloadDirectory,
    ],
  },
};

export default FIXED_DATA;
