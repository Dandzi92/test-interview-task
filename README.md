To launch project make this required steps:

1. install node_modules in client and server folders with 'npm install' or 'yarn' commands in the respective folders
2. to launch app server go to server folder and do 'yarn dev' command, then do 'sequelize db:migrate' command, but before this make sure that you have 'sequelize-cli' and 'pg' programs installed globally and also create database in postgres with name 'destinations', after this do command 'sequelize db:seed:all' to populate database with mock data
3. then go to client folder and do command 'yarn start' or 'npm run start' to launch react app
