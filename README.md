## (Code in TypeScript)
# Modern React w/ Redux (2023 Update) 
> Udemy Paid Course
---
![Certificate](https://udemy-certificate.s3.amazonaws.com/image/UC-6cda875b-cf43-4d1d-bf62-3375dd84827b.jpg)
---

# Getting Started with Create React App

### **Dependencies**

1. React Library
   - npm install react-redux
2. Redux Toolkit
   - npm install @reduxjs/toolkit
3. Bulma.css
   - npm install bulma
4. Tailwind.css
   - npm install -D tailwindcss
   - npx tailwindcss init

<hr>

## **To clone and work on [this project](https://terristwj.github.io/Modern-React-with-Redux-2023-Update-Practice/):**

- Clone project
- npm install for node_modules
- npm start to run (Refer to package.json)
<pre><code>npm install
npm start</code></pre>

<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## **To create a React w/ TypeScript project:**

- Node.js installed
- create-react-app will autonomously create node_modules
<pre><code>npm install -g cra-template-typescript
npm install -g create-react-app
create-react-app project-name --template typescript</code></pre>

<hr>

## **Deploy & Redeploy onto GitHub pages:**

- Have project working

1. Download gh-pages dependencies and update package.json
   <pre><code>npm install gh-pages --save-dev</code></pre>
2. Manually update package.json
   <pre><code>{
      "name": "my-app",
      "version": "0.1.0",
    - "homepage": "https://git-name.github.io/repository-name",
      "private": true,</code></pre>
   <pre><code>"scripts": {
      "start": "react-scripts start",
    - "predeploy": "npm run build",
    - "deploy": "gh-pages -d build",
      "build": "react-scripts build",</code></pre>
3. npm run deploy
   <pre><code>npm run deploy</code></pre>

   That will cause the predeploy and deploy scripts defined in package.json to run.

   > Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.

   By default, the new commit on the gh-pages branch will have a commit message of "Updates". You can specify a custom commit message via the -m option, like this:

   <pre><code>$ npm run deploy -- -m "Deploy React app to GitHub Pages"</code></pre>

4. Configure GitHub Pages

   - GitHub Repo -> Settings -> Pages:
     1. Source: Deploy from a branch
     2. Branch: gh-pages
     3. Folder: / (root)
     4. Click on the "Save" button
     5. View page at [https://\<git-name>.github.io/\<repo-name>/](https://terristwj.github.io/Modern-React-with-Redux-2023-Update-Practice/).

- ### **To Redeploy GitHub pages:**
  1.  Make src changes
  2.  npm run deploy
  3.  (Optional) Delete build folder

<hr>

### **JSX Rules:**

1. All property names follow cameCase
   - \<input **autoFocus** />
2. Number attributes use curly braces
   - \<input maxLength=**{5}** />
   - \<input maxLength=**{50}** />
3. Boolean 'true' can be written with just the property name. 'False' should be written with curly braces
   - \<input **spellCheck** />
   - \<input spellCheck=**{false}** />
4. The 'class' attribute is written as 'className'
   - \<div **className**="divider" />
   - \<li **className**="divider" />
5. In-lin styles are provided as objects
   - \<div style=**{{color: "red"}}** />

<hr>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
