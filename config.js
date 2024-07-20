const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_41_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk3LFxuICAgICAgICA4MixcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk0LFxuICAgICAgICA1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDksXG4gICAgICAgIDg0LFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICA4NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY3LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMixcbiAgICAgICAgODUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDU3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVdUhvSVBTM294R2VBS1p4Zm5lRjNSTW9SaWNSQTcwb1Z1VlFST094RlVJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFc1dWN2g1clJaT082Q0NSVTdBUXZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQxMTEzMDkxLTY3YWYtNDM4OS1iY2JiLWUyMTdlNDJkNTRkMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjYsXG4gICAgICAxNzIsXG4gICAgICA0LFxuICAgICAgMTY2LFxuICAgICAgMjAyLFxuICAgICAgMTkwLFxuICAgICAgMjI1LFxuICAgICAgODUsXG4gICAgICAyNixcbiAgICAgIDIyNCxcbiAgICAgIDEyMSxcbiAgICAgIDg0LFxuICAgICAgODYsXG4gICAgICAyMTQsXG4gICAgICAxMCxcbiAgICAgIDgsXG4gICAgICAxOTUsXG4gICAgICAxNzgsXG4gICAgICA2MyxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgMTY0LFxuICAgICAgOSxcbiAgICAgIDEsXG4gICAgICA0MSxcbiAgICAgIDExNCxcbiAgICAgIDE0MSxcbiAgICAgIDE3NixcbiAgICAgIDE1NyxcbiAgICAgIDI1NSxcbiAgICAgIDM4LFxuICAgICAgNDksXG4gICAgICAxNDgsXG4gICAgICA0NixcbiAgICAgIDIzMSxcbiAgICAgIDIyMSxcbiAgICAgIDEwOCxcbiAgICAgIDIxMyxcbiAgICAgIDQ0LFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZDQkFCTldXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDU0NDk0ODEzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzODc4Mzc4MTYxMzc2NDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YUmdQd0JFTmJIN0xRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYzVLTEZyZmxTUVQ1SExQUjRYaElaejNQdjF3eGRQdTBSMHp1YlpxYWQwaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFWUNJQWV4d3BPRkhHOGx6UFc4L0NMNk1tcmd1VVRlcGpsSnpiRjllRUlLMHkzZzdpVHVxVUpSdzVsUFVxeU9nZkVQQTBMN2M2QUcrMnNlblZ3dk1Edz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJRnVjaUp4Z2Fic2NLdEtqM2lBRVhlQXBpS0hJODN2VW5uNlNIMjJaRWV6NERqaHVzK2h2R1czR3FOOFlBK1RNSzMzaTZNdTJsWkl4U21kMHJOVGRCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDU0NDk0ODEzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0NDMyOTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
