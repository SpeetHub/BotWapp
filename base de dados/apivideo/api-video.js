case 'playvideo': // ©Blacĸzιn
playzin = args.join(' ')
if(!playzin) return enviar(`*❗Modo Certo: ${p + comando} Mc Poze❗*`)
try {
try {
blackk = await fetchJson(`https://blkzin.herokuapp.com/download/playv?&nome=${playzin}&apikey=blackzin`) 
enviar(mess.wait)
pla = `❗vιdeo pedιdo por @${sender.split('@')[0]}❗  
título:${blackk.resultado.título}
views: ${blackk.resultado.visualizações}
canal: ${blackk.resultado.canal}
publicado: ${blackk.resultado.publicado}`
img = await getBuffer(blackk.resultado.thumb)
black.sendMessage(from, img, image, {quoted: imgm,thumbnail:null , caption: pla,contextInfo: {mentionedJid:[sender]},quoted:imgm})
vidz = await getBuffer(blackk.resultado.url)
black.sendMessage(from, vidz, video, {quoted: live, mimetype: Mimetype.video,thumbnail:null,quoted:vid})
} catch  {
enviar('Api Do Blkzin Ta Off!!')}
} catch (e) {
enviar('não é poѕѕιvel мandar eѕѕe vιdeo!!')}
break