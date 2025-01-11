//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZuZ3FWTUFoRE93bm1RT2t2UUVSVW9ncWFXTWwxcU9lQ2xSdS95ZnVrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm9RY0pNUit4WjY0NnVHaTBkNFdrWndqNDl3ZWtOeUNMaHJQbmZjeDUzND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTzFFL3NQT1NBVnd3d1JISXUxN0gxdThmcXVnNlFFZ0pHYWRyd3poOWw4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwR2IxbUJjbGdmWVFYOWdVcXpsc3c3TVJZNnZBamI5NkZKUGhCWlBKMlI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLWjRpNTZmcHE0em55Sk1xU0FHZW82UVkwUmZseWszM1NLKzh2UUw2RWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhlWlZnNnI2RTZpZDd1Zm9IUGRUam5DVE5RWmFFZnppNDhta0o3SWRybnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU4rWlJJWFJsN2FpalliWlQ5T1ByaWN2aWc5cjY5NFFVOVdCVXNLM1RIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVlCVVVST09veW5EWjRRQU41aDlVNm43bmF6VzJPQXBWYVo5aklDTTZpQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR1RXc5ZmpYbDhQZGYvM0FBLzYrNlEwVlluUEduQ2U1dnBFM2gyR0VicUhVUHo5NTdrWnVGN2tXWmxMZll3MDU0TEJ4T0xoZTNaYjQ3ZE1VNUdzUmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiI3V0FrbGNUY2c4NTdXR0VUdnhMUklGOVNVSEJWajJyVWw4eFlCY1FkUHhBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MiwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfU1I1cmNQMFFuT0lWUFRiUzBMX3RRIiwicGhvbmVJZCI6IjAzNzE3MDVmLTk4YWMtNDJkYS05MjZlLTIyYzA4NWE3Yjk2NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5d2pwTUpna0M0Q29ZYzRhNCsxQW1KMUpvbFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGFXaVlSbDB0eWZNM0hLQTYwRHM0b3FEWlpzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFXQ1BDRFlEIiwibWUiOnsiaWQiOiIyMzQ4MTY5NzY1MjE4OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkbDg8ORIEtNT05FWSBFWENIQU5HReKAvO+4j+KAvO+4j+KAvO+4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGJWME5BTUVJT21pTHdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQTJYNDNmcXdrbWxvK0x1VTY0eGF2VFV1SHp6QzhkeS9keDBkNW5ObzJXTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicm5jakp4NEI2UjBScnhaWUtrTENaaXovdnZnZ2hFYzE3bld6Q1lzbVhEdW9pc1F5SGZMOVFVVFdaRGRHSzNkOGY5QzhuSEVWeEZqWmxZNk5odmM1aUE9PSIsImRldmljZVNpZ25hdHVyZSI6IkdNa3B6VEZrUXY4Y1VGbWVZOXdrLy9QVHc3OXBDUmZmQjFHSHN5b0pLLys0SVh1VmQrTVhVRWhNOVJhUUcydEhhYUxLZkZWNjduNkxXS2tEbWF5WmhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE2OTc2NTIxODoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRTmwrTjM2c0pKcGFQaTdsT3VNV3IwMUxoODh3dkhjdjNjZEhlWnphTmxqIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2NTc3ODExLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUMzUSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
