# Simple React App

Includes prettier and ESLint for code quality
Uses parcel for the development build
Jest and Istanbul for tests and coverage respectively

## To Use

- Clone or fork this project `git clone https://github.com/Whatapalaver/boilerplate_templates.git`
- Change into the directory `cd JS/React_Only`
- You may want to copy files to your own project folder
- Install dependencies `npm install`
- You should also create a .gitignore file to prevent all the node_modules files being sent to github: `echo "node_modules" >> .gitignore`

## To Test

- Testing via Jest `npm run test` or `npm t`
- If you need to refresh the snapshots due to structural chnages `npm run test:update`
- If you want Jest to "watch" for changes in the code base `npm run test:watch`
- Check coverage with Istanbul `npm run test:coverage`

## NPM Scripts

- `npm run lint` - checks and fixes coding with eslint
- `npm run format` - runs and saves prettier output
- `npm run dev` - runs parcel and sets up dev environment and serves at localhost
