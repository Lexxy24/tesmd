let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
conn.sendHydrated(m.chat, 
`*––––––『 DONATE 』––––––*`, 
`𝐋𝐢𝐬𝐭 𝐏𝐚𝐲𝐦𝐞𝐧𝐭 𝐃𝐨𝐧𝐚𝐬𝐢 𝐁𝐨𝐭
ᴅᴀɴᴀ: 082279915237
ᴏᴠᴏ: 085789004732
ɢᴏᴘᴀʏ:
ᴘᴜʟsᴀ: 085789004732
ǫʀɪs: Scan di atas
`, './gambar/qris.jpg', 'https://youtube.com/c/LEX4YOUU', 'ʏᴏᴜᴛᴜʙᴇ', null, null, [[`ᴍᴇɴᴜ`, `#menu`]], m, {asLocation: true})
}
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler