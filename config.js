//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJHbmNMYTB5c2J5Z0VUTWdPTlFwd2E3dnh0SXR4VndlTk5qVWtCbUtVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYm1pdDJkbmVVWjR1WlAwZTN6NTBCc2h5Vmt3MGc4b3M0MWNZdlhWVjdrMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TG9SUllkb21acXhsTGhEcm9LNVVaYWQ2a0dUbDFyeWZNdHFWRTNhUTFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPZHFWSzhYaW11VGFnV3ZmWkYybFdDOEhrcGpGcWZVbDNCaFYxZmZ0cldzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CQ0ovRFp4bEpWSm9sM2dVWi9PemJHOWhsendmNWZPdmdJSVoybzhIa3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik81a3hsY2ZSR3NkZUl4L1hyazdNWlpJdWs5bHBCUDdOQlk1dXY5QkpZVXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBoVmFmVXBGN0VicStnaVVwZjA2Mjd2QW01Y1RTSlp2UmRReHNWZm1Wdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9JVFBxNjVvTVJTQnV5NGlMZktPVndLZmpUaS9jRUVtZ2Y5aS9NbXRETT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZiMmZIT3cwaHFPQU85NlplaXBvNWhxSWxiRnVPczlsWGV1WWxFdFhGU3B1OUUyMm1GcERQWTNIVlhyaHJoeUJhcU00bUl0S2tDMUNVazc1RUxtU0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJOK1J0UWlCdHBvNVZmQzJIMW96aXduS1A4cUt4MUxVNnlVVDJWU01MOFpRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoSWJlcjk4M1NJZU5oLTFhMFR1THhnIiwicGhvbmVJZCI6IjJmM2FhYzQ3LTdkODktNDJkNS04OWU3LWJhZjQ5MjU4MmNhNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnNEN3eUhJTWQ0Y3BGQzFHdWJxN1UvOG1jamc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUitGM1VLWEg0ajF5YlgyK054eTg1WElPOG80PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNENVpYWVlSIiwibWUiOnsiaWQiOiI5NDc1MjQ3MzM1ODoxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLcTh2VElRbkxlSHRRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOdjhCc0c5UkpZM09yekJNQ1ZSU0tWdkwxVTBNaW1DMTBzZHU4NldxcGhJPSIsImFjY291bnRTaWduYXR1cmUiOiJIS3ordE5OdzUrTEpSeWgzQklnS0pSOEZtUVBnb2g5VXdpS0VncVpvbHMvWHRtNEUxU1FHSTJOeUE0WFNzejVBeDBQRHp3dlFYb2EwLy9ta0YwV0NEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRUxxTkxGOURiTi9JdDBNTTFjaXljUEo5WlFCMlJtM2tQNTFZUFJVSHo3UXZORjlKbHA4WUZkdUM5T3FLTlhFaVN2cnRtZkFaRkpFaGdObnd6dmx4QUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MjQ3MzM1ODoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRiL0FiQnZVU1dOenE4d1RBbFVVaWxieTlWTkRJcGd0ZExIYnZPbHFxWVMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE4ODM1NjB9|
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJHbmNMYTB5c2J5Z0VUTWdPTlFwd2E3dnh0SXR4VndlTk5qVWtCbUtVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYm1pdDJkbmVVWjR1WlAwZTN6NTBCc2h5Vmt3MGc4b3M0MWNZdlhWVjdrMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TG9SUllkb21acXhsTGhEcm9LNVVaYWQ2a0dUbDFyeWZNdHFWRTNhUTFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPZHFWSzhYaW11VGFnV3ZmWkYybFdDOEhrcGpGcWZVbDNCaFYxZmZ0cldzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CQ0ovRFp4bEpWSm9sM2dVWi9PemJHOWhsendmNWZPdmdJSVoybzhIa3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik81a3hsY2ZSR3NkZUl4L1hyazdNWlpJdWs5bHBCUDdOQlk1dXY5QkpZVXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBoVmFmVXBGN0VicStnaVVwZjA2Mjd2QW01Y1RTSlp2UmRReHNWZm1Wdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9JVFBxNjVvTVJTQnV5NGlMZktPVndLZmpUaS9jRUVtZ2Y5aS9NbXRETT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZiMmZIT3cwaHFPQU85NlplaXBvNWhxSWxiRnVPczlsWGV1WWxFdFhGU3B1OUUyMm1GcERQWTNIVlhyaHJoeUJhcU00bUl0S2tDMUNVazc1RUxtU0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJOK1J0UWlCdHBvNVZmQzJIMW96aXduS1A4cUt4MUxVNnlVVDJWU01MOFpRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoSWJlcjk4M1NJZU5oLTFhMFR1THhnIiwicGhvbmVJZCI6IjJmM2FhYzQ3LTdkODktNDJkNS04OWU3LWJhZjQ5MjU4MmNhNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnNEN3eUhJTWQ0Y3BGQzFHdWJxN1UvOG1jamc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUitGM1VLWEg0ajF5YlgyK054eTg1WElPOG80PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNENVpYWVlSIiwibWUiOnsiaWQiOiI5NDc1MjQ3MzM1ODoxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLcTh2VElRbkxlSHRRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOdjhCc0c5UkpZM09yekJNQ1ZSU0tWdkwxVTBNaW1DMTBzZHU4NldxcGhJPSIsImFjY291bnRTaWduYXR1cmUiOiJIS3ordE5OdzUrTEpSeWgzQklnS0pSOEZtUVBnb2g5VXdpS0VncVpvbHMvWHRtNEUxU1FHSTJOeUE0WFNzejVBeDBQRHp3dlFYb2EwLy9ta0YwV0NEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRUxxTkxGOURiTi9JdDBNTTFjaXljUEo5WlFCMlJtM2tQNTFZUFJVSHo3UXZORjlKbHA4WUZkdUM5T3FLTlhFaVN2cnRtZkFaRkpFaGdObnd6dmx4QUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MjQ3MzM1ODoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRiL0FiQnZVU1dOenE4d1RBbFVVaWxieTlWTkRJcGd0ZExIYnZPbHFxWVMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE4ODM1NjB9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "😚",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
