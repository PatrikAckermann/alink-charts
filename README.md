
# alink-charts
Charts of data from the autismuslink annual report 2021.
You can find the page [here](https://patrikackermann.github.io/alink-charts/)

The design is based on the [Autismuslink](https://autismuslink.ch) website.

## Installation
The gh-pages branch contains a deploy-ready build of the website. The linked page above is hosted from this branch. This build isn't guaranteed to properly work on your web server. See the next section for more details.

### Modify & Deploy
If you don't already have it installed, you need to install npm. By running `npm install` in the project directory you can set it up for development. After you have done this you can start the development server with `npm start`.

Before you can deploy the page you have to change a few things:

 - If your webpage isn't on the base path "/" (for example on GitHub pages where the page is on `/repository-name/`) you have to go to `src/App.jsx` and edit the route variable in the if statement after the imports to whatever the base route of your page is. So if you want to deploy it on GitHub pages it has to be `/repository-name`. You also have to change the string in the if statement to the hostname. 
 - In `package.json` you have to change homepage to where the page is hosted. 

The repository includes a npm package that easily allows you to deploy the site to your GitHub repository. Simply run `npm run deploy`. This automatically builds and deploys it as a seperate branch to your GitHub repository. To make it work you first have to properly set up the connection to your GitHub repository. Now you simply have to activate GitHub pages for it to be accessible on the web.

## Add new Diagram Data
When adding new data the website automatically adds the new tab.
You only have to go to `data.jsx` and create a new variable with an identical structure as an existing one. Then you have to go to the data variable at the bottom of the file. There you add a new element to the array. It consists of ["Tab name", data variable, "Short description"]. After you have done this the new data appears on the website.
