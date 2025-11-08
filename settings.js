require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIACoXaFv5dZ9hUAQAAG0HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3ptYwSVmxEdMYioiLQorYAb81BCgcWdqkLFCf99A7t7eh52Z3t5KrIqMk+ePCd*gqLEFJmoBeOfoCL4DBnqjqytEBiDSRNFiIAeCCGDYAxUHe6MmRHIW3dSXuvRIm582byOltuNIQ84qM7QFjeplGT+M7j3QNUcMxz8IeFarT3OhSsLC3vX6cuCq+FsVeXu0KSSxdmLQjyIayUQZ9wzuHcZISa4iPXqhHJEYGai1oaYfA3+YJ4FhbPAFe*WOb8RLeni1FbSr47e0i09yHvRiQSxkuyNr8FnsLkl8iD37PPOfdmbLWsTvX8kB+G2aW7WfOvv3bnp1Rv+8gaf4rhAoRGigmHWfpl3bfmkkbieJFbmsPypX2LjXNHRVpluhwuJ8xKpr0vDJ0kb6l8DzqdJMMTuRurrs0XLstXN9SUdp9Fm8sKrmdAwzQiejJk0oL8Dt8mHVtL*w7tj8+axwFtdqZQS3i5s5TnD*dUh*O7o3jbZYBmvJDeoaZp+Db7kHKq1P+9zl9CUtiosVG5Hb6Y7JWpKbLzTW1s8L1MEi*ITPmQN+RPK6zVbr09IUavsJCx1nb3u5uuiLERSs9avGmW+4X0*vfKH8JiHjRx7vl7vmpZOEzVOTliaTbiRE2Vtu*WeXnbT2gtLfHl+dJSi1gjBmL*3AEExpoxAhsuii8lKD8Dw7KCAIPZgF0DBqjZqwB2LvXdlyfV136eGmQjJRHxdL9KDaJOjdG5mEVc+gx6oSBkgSlG4wJSVpLUQpTBGFIz*+tEDBbqyt7l11US+ByJMKNsVTZWVMPwY6sclDIKyKZjTFoHWHRABY+4zjBjDRUw7GpsCkuCEz0g7QUbBOIIZRb8aRASFYMxIg36ZVivDjvcX0+W1mbUFPZA*5oHDzpvDocBx4mjADZSx8p1+u3RZYVV9KxADPZC9veJlRRRFSeI4eSjLY+V7F7**wtelCxGDOKMP29gboUknuk3mDY3nc9WKVS1WwWc*H7p4I*7g01i4WML15L9u87PozUaaSc7eLMIFO*hCoMp+9WrmbX55*ock3YakWT9SVbRqhfWgEUfrVFbhwRIiL5o2i5wlhwgt3KFva*iG3HZQlEs3SEy270*86DQ4rk+3fDUn3CSm7srmCm1w8afxc1ctRGccoN+LmbBUAndzC*Z9wzuo*CxO+86CTA+OuXeUpThD5fUsm7kFt5q8qq0hsdX6eLp5LJjb9jRNgxc6ULKjV4fyrA6s*tGyTu+KfTgme99U+CGmblLdb4TRw*gF7Ob3n5N7w93pi7v3fkvxvkn+xY0T110Z62C6DnxX5w7kKbsiFdcSf*VGleS6a0+15+aurWhFwf3+oweqDLKoJHlnoCIkJQ5BD5Cy6QRrFFH5p*2q7ozpJja6xjNImfppglecI8pgXoExL4kDQZS4ofz2yiZltYD0BMagyIeTYyfoVq0qh0H2YSmgdt9i44H731BLAQIUAxQAAAgIACoXaFv5dZ9hUAQAAG0HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  
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
