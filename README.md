Discord BOT
===========

This project is a Discord bot developed as part of the Computer Engineering (CPE) program at CMU University. The bot is designed to perform various tasks and enhance the functionality of Discord servers.

## How to contribute this project

- Fork this repository into your own account.
- Clone the forked repository to your local machine.
- Now you can make changes to the code.

## How to add more commands or features

- Create a new file in the `commands` folder
- Follow the template that is provided in the `commands` folder

## How to run the bot

- Create a `.env` file in the root directory and add information as shown in the `.env.example` file
- Run `npm install` to install all the dependencies
- Run 
  - `npm run start`: to start the bot without compiling the code to javascript
  - `npm run dev`: to start the bot like start with `nodemon` to automatically restart the bot when changes are made to the code
  - `npm run build`: to compile the code to javascript
  - `npm run deploy`: to deploy new slash commands to the server

## Base features

- [x] Slash commands
  - [x] Ping
  - cpe64 : search for a student in the CPE64
- [x] Event handler
- [x] Dockerfile

## How to build the docker image

- Run `docker build -t <image-name> .` to build the docker image
- Run `docker run -d <image-name>` to run the docker image