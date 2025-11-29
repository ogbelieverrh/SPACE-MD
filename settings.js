require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAEx7fVsoeuPwVQQAAHAHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVmAYVRCM6YlEu4hUEG2FjHwoosFQuVhU3J*z3Ddrp6XnYne3lqajKOHkyz8n8DrIcU7RCLZh+BwXBFWSoO7K2QGAKZmUcIwL6IIIMgimgSxzQawAzYZuyge0dy5k6ycSDEZnQ9UzNGxi9LTdLHZ17BY8+KMrgisPfAFoq8dk+XyUnSObIWG62RrOmwl5q8HqH83vdE1f6sRSrc*gKHh0ixARniVqcUIoIvK5Qa0JMvka*3oVOkM+DwnWSLX+*1Z6fn7e1pZ2qUuArNlEwXuGtslGlr9En5ypYSm1qpLrYLGHsZu0w2mjifmDaQ8NI+Dg4W1vXXDjckz7FSYYiI0IZw6z9ct+Rsbnn1m4391pb8RPd0ZoTstiauytLbXGZHcxLnozJWr2oXyM+KzIpliTOGnhhmGMc8fdCMLjCr*nb5BJTf2OQ5USR6F3+lbhJPrxy+T99NxShWbvnNlMl4bS971w5m5GNbUwW9mx5L063oTDIfO5A1fBr9IVhsKsCfTdul81YNXHoXhR99sLXgSEmuRiHp+CwhuO4tMJP+pCV5Hcs88OSn1hmqSYDv0lT4eLMatzT5yu7CPdCpIZGrUVvi2Mhemf4FlRBIgq5rZyooZQHJzfDRvOH7l3ew9SIkl7DhvbonLy+V3RBrRGBKf*oA4ISTBmBDOdZdzcZ9QGMKhuFBLH37oJtNdxwLrENy8*iHlce3F3gxFsvX2mKuZsP1tvlCq3XiqUcXkEfFCQPEaUoWmDKctJuEKUwQRRM**yrDzLUsKduXbYh3wcxJpQdsrK45jD6EPXjEYZhXmbMbrNw3h0QAVPu8xoxhrOEdm0sM0jCE67Q*AQZBdMYXin6WSAiKAJTRkr0c2jnedT1fT5xeE3mTdAH6bseOAJTMBgOBY4TRwNuMJnygz*ot7qDhUXxLUMM9MH1GcZLE1EUx2OOk4aS1EV2D4+fDDvACDGIr7TLtTQtobzMVKPVyOai67KXyPNEBp8VfTjj2Xrfo4lQb4Tm5Dn7tBKP2mi+ItVRi3HGfE8IZckrnFXapvXrP4CAKciiF1lcnt*Wy5dmd7N03Svlq76PV5dRYrE3fe8GPbRf++UaS+1GxvXCor2FPOlFbG80o70pn1Zluk3YvkrKcqIVWmEp8muXLUIVDtGvyVwajexbMURvyhjf59Ebg7F*vpyPtvoiZnATpctVcGyDoziCDh85ArkGjiX6rZoYCq+OT*U84e51ISkOvNxGeFzmh3P99Oz7zFx*7Cr8bqdOq+43xuh99DPYKfjf2j2JdxbjHv1fMH4sk39bUq67Nnahsgs9V+V80rs2SMa3Md8cR8XYdXdH2dRXh7agBQWPx199UFwhi3OSgimAWURyHIE+IHnZedbI4vw3yebywVCsxOgqv0LK5M85cHCKKINpAab8WByNBuJQGj2jTJIXC0hPne7pcBZ0nm7lorAZZB9TBeTuW1geePwNUEsBAhQDFAAACAgATHt9Wyh64*BVBAAAcAcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAfQQAAAAA',
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233500642029',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'ogbelieverrh',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
