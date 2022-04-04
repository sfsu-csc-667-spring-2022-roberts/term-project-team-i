#Instructions:

- Must be using node version >=10.0
    - If you need to update node:
    - "nvm install lts/dubnium"
    - "nvm use lts/dubnium"
    - node --version (to verify node is updated)

- Install node_modules
    - "npm i"

- To add static html files to be served:
    - add the html file to the "views" folder
    - change the name of the html files to match those listed in app.js
        under "static file serving", or change the html filenames listed in the app.js
        to match your html filenames in views folder.

- To start the app in locally development mode:
    - From uno-app directory:
        - npm run start:dev

    - To verify static pages being served:
        - use browser to navigate to:
            - localhost:3000/landing
            - locahost:3000/createGame
            - etc.


- Before pushing any code to the github:
    - "rm -rf node_modules"

