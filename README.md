# start-web-project
web project starter

## Features ###
* npm scripts
* node express server
* freddie static server
* BrowserSync
* postcss

## Clone the repo & install
```
git clone https://github.com/suxxus/start-web-project.git
cd ./start-web-project
npm install
```
## Usage
* npm run update
* delete .git
* git init
* npm run dev
* start coding

## Scripts
The `package.json` file comes with the following scripts

`npm run <name of script>`

`start`: launch a server at port 8080  with the aplication

`lint`: lint all js code.

`watch`: start watching files at ./src, lint tasks.

`browsersync`: launch a dev server(http://localhost:3000) providing the app at ./build, start watching files at ./src. reload dev server on changes. Proxy to http://localhost:4000  

`freddie`: Launch the server from the document root of your project. Check your project at http://localhost:4000 

`build`: generates the compiled app at ./build directory.

`dev`:  runs a dev console that reports lint and start watch task.

`dist`: generates a distribution version, placed at ./dist

`check`: check outdated npm modules.

`update`: update outdated npm modules.
