//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUdpRE45a0hvem5kdWRTNWU4UTRqVnFydFhSNjNmZWsyR0xoTUlLUVVIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHdZY0N0K0pLVjkvejhqRU9XVnRva2kxelRmL1JGd2pYLytHb0FJL1hqaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTGdaMUVITisxZ0xwSzNTbVJEQlRHRjBlNGo1RmgyUGxBN21jVWtpV0hvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuUWRoOXkzaE9QNFhyakZIZG1IOUlWMEFsWURmbUZMcEFzVXEzc1FrSFhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJETFZ6aDBvb3AydThHc09iaGJOc3kwbGRSck5WTnpnZ1ArRzhjajV4a0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhHNE1sWE1kb3FFcE9meDA5eG5PYjBaUHlDOTlRcTNkTmdobE5TcGpzZ2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUNpR1VUeHJPRStkZFRHT0c3WUNsMUxnNGJ6a2szYjFEQXNhRmVMVk4ydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjlIdk1WWm0rblg4ZjU5NCs1cnZaOGVQWi80NzRTdkcvMXFEQnFxNHl4UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJnSEwxcE1EK2oyL0lEU1lTOHB3bXZGR3FDNFdpSUxKdlh0Tkdha1Z4SXFGSUI2WTlnbERDUmRZZnRqcVNHMklZTHJTd0hiUEJTUG9xcHp5bWVvYkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiI5WU5CU3NFcmZkKzlFQkVtc1dHY1Q5bzZkcndkRG9GKzkxMjQrNlJySzE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc4MDgwMDQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJDMTdEOEMyQUMyRDcxQ0Y4RUNDNTVBRjJDMkY2RjZDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA4MTAyMTd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc4MDgwMDQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjAwRUU3MjU2NkNGRUZGQkU4RDEzNzFCNjBFNzM4QTVEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA4MTAyMTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVNYUxQQ3h2U2VHMWh5aFJfc3BvMGciLCJwaG9uZUlkIjoiYmQ2YTI5YjEtNmM0ZS00ZDkxLThlNTYtYzE4NTBhMzlhODhlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9PNy9TalVEb1RrYjJvczRtVUhnZXhrTmFkWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4K2VCUkJDQ1VtWitLa3dIcFc5ZTM4ZG11NHc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUVdaRzhSVEEiLCJtZSI6eyJpZCI6Ijk0Nzc4MDgwMDQ0OjQ4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjczNjI4NTQzMTgzMTk6NDhAbGlkIiwibmFtZSI6IvCdl5TwnZef8J2Xo/Cdl5vwnZeUIPCdl6LwnZeZ8J2XliJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2JBeFpvR0VOajg3TUlHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRit5RWRocHdxbkgwemVNU1FwbHJFRGY4eXRiR04zbUYwK2QxbGdyRUNIWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicHl2Wk1PNTdsMVFOZ2FJOTRKSEFCTXB4aitYMmVneGZUajNSdFV1UkdRK2IxbnFueFlvSTNZaVdnVEtMNFpIdk5Ra21HMnA3VHgxc2NBL3A0ZUkvQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IklXeUFZcGNKVEtXN0MrcjdxRWdOSTN6VnExMGVDMkRKSzJQaXN1eDZ5TXBISUU4M3owVEh2V25hcTZrRi8zYXluSTYyYUVacU9jNjhrVG40dVZhcUNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzgwODAwNDQ6NDhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmZzaEhZYWNLcHg5TTNqRWtLWmF4QTMvTXJXeGpkNWhkUG5kWllLeEFoMiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwODEwMjE0LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlZbSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94778080044",
  PASSWORD: 
    process.env.PASSWORD || "Theekshana771",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
