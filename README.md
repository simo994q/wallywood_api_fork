# API til Wallywood
API til webshop med filmplakater, bygget i NodeJS, Express og Sequelize.

Der ligger SQL dumps i mappen Data. Husk at oprette en .env fil med login oplysninger til egen database samt en secret key til tokens.

Eksempel:
```
DBNAME = your_dbname
DBUSER = your_dbuser
DBPASSWD = your_password
DBHOST = localhost
PRIVATE_KEY = 'my_secret_key'
```

API'et kan køre lokalt og startes med en nodemon index.js kommando.
