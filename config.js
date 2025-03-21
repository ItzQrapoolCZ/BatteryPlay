

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["664881178972520458", ""], 
  mongodbUri : "mongodb+srv://itz_qrapool:yVGr5XJmLAtaVtJ@cluster0.uvllcyc.mongodb.net/?appName=Cluster0",
  spotifyClientId : "f877eb8b2b314ce3a5700a354ad6e11a",
  spotifyClientSecret : "b36347951a774551bdf3662752abc5c4",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.com/invite/79nNeu2Btb",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "193.226.78.187",
      port:  9372,
      secure: false
    }
  ]
}
