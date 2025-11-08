require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAPpJaFspVHeFXwQAAIAHAAAKAAAAY3JlZHMuanNvbpVUyZKjOBD9F13taLNvERUxgDcMNni3meiDDAJkNlmAbarD*96Bq6qrDzM9NZxEKuPly3wv9QMUJa6QjVqg*QCE4iusUXesW4KABowmihAFfRDCGgINBGNJXPG7YS85hl5yL9enzbFQY6FyZIbdM167GKQ7v7nl2*kLePQBaU4ZDv4AOPUz2UBnwhnBKIhnbR1G+6XTqtyW2SV56KFrfN8fmTVOrRfw6BAhpriIRyRBOaIws1HrQUy*Rj+dcdfNKV*ZgSEG7mXFceNMPjHWLh7zJFRTn1pps48wTcuv0ZdnlMGJEhG8bDNh7+rE0RtlwY7w7nV9Zy7MdLJrjP3Sz0dv9CscFyi0QlTUuG6*PHdllsvlESmi4N*urUkETxd3aJfWU0sxLSRRfGzP8xs7mR6*Rty13RGZpFFor1R7U2bMau45o3Osn46+qO6aq36JWcIMZwXzO3GPfngl*T9z1+eL+1S+b3LYbNHJPytkIZ+bNAw3lV*ajhQNz+7ZZpXkWe0L9HM*ud7ZfLtub9bkkMiHvHUHY0kMwsiI2MDEPckq8el2Wc4*6cO6oX9iafWcV3KnG+9A3e0iU+SiwHFqXHbbUepfLmdqIjGa8j7nWPpG5e1qxgYNzmNyMSeTbBjFvYPtqWt6yXeX7e0QyPnZM*WXZ0cpaq0QaOyjDyiKcVVTWOOyeMZ4sQ9geF2jgKL6OV6QBfdCFcWre3o1poPtURqagTxKSJonqXGeH4doq5wF1mSD8gX0AaFlgKoKhVNc1SVt56iqYIwqoP39vQ8KdK*fhOvK8WwfRJhW9bZoSFbC8EPVj0sYBGVT1Ou2CMzugCjQmM8wqmtcxFU3x6aANEjwFZkJrCugRTCr0K8OEUUh0GraoF9ba5ZhN*ixuh6vnMUc9EH+FASHQAMcz4sCx4g8K8kaK*1Vfbt1sJCQbwWqQR9kzzRVlRhWkCSJFQWly+vCfVDADgrYCcxwBLuRvxPu8ENUQ5xVQAPmwtxfnWA4cjyhUeLJRB*Fuhnr4LPBD6e8KTHk9wvOCqspp9QT48TelHwV0x6UlL15tm6sz3vjQheXnDl6+QcQoIFoYpliz3FJNWy9sZFCPXKc6mC549eq5OHOdQZmb1bEAjspdeohz2dt0+Z18UjKgy8OxCjabjbLmdcGy0Uv2sXh2tU7W*VBiK44QL8XYyDl1dM9EKIDgxpp4HPxps1vV3XGjfTywJ1bXIv0iMOlZwf2eLgwheFYoWyduGsOzheh1bhZKZg7JmtzwhHBl2Nz+ebh5w5l728Xfrqrk677jTB6PgXvKvynlG*EO8cxj*5vGO+Py78sqLFU2XOIpydDvTqreK8G3iw92oO8uY7jsp0v9uHr3b+520WcgMfjex+QDNZRSXOgAUySskCgD2jZdA62iqj8Qy3TsCxjGVtd4xmsav1zKzY4R1UNcwI0VpY4UVFlQX3L8mhJprBKgAb42NvO0s7irU7Iuob1x5IBvftmPAKPn1BLAQIUAxQAAAgIAPpJaFspVHeFXwQAAIAHAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAIcEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233542053167',
  
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
