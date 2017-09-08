# readable
Project #2 from Udacity's React Nanodegree. The project covers React and Redux. The application allows users to make posts, vote on posts, and comment on them. As part of the project criterian, all state is managed by redux.

## Installation Instructions
The commands below can be used to install and run the application.

```
git clone https://github.com/jpniederer/readable.git
cd readable
npm install
npm start
```

The npm install command issued from the project's root directory will install all required packages for both the client and server solutions. Client package's are installed via the postinstall webpack script. The npm start command uses concurrently to start both the server and client.

The server runs at http://localhost:5001/.
The client runs at http://localhost:3000/.

## About
There are two pieces to the solution:
  1. Server - Developed by Udacity. The Server supplies the application with an API to interact with posts and comments. All files found in the root directory.
  2. Client - This is my solution based on the rubric provided by Udacity. All files are found in the client directory.

  ## Folder Structure

```
readable/
  client/
    README.md
    node_modules/
    package.json
    public/
      index.html
      favicon.ico
      manifest.json
    src/
      actions/
        index.js
      components/
        App.js
        App.test.js
        Categories.js
        Comment.js
        CommentForm.js
        Footer.js
        Header.js
        Post.js
        PostForm.js
        PostSummary.js
        Root.js
        Voter.js
      constants/
        ActionTypes.js
        VoteOptions.js
      reducers/
        index.js
        reducer_categories.js
        reducer_comments.js
        reducer_editing.js
        reducer_posts.js
        reducer_sorts.js
      utils/
        api.js
        axiosApi.js
        utilities.js
      App.css
      index.css
      index.js
      logo.svg
      registerServiceWorker.js
      README.md
  node_modules/
  categories.js
  client.js
  comments.js
  config.js
  package.json
  posts.js
  README.md
  server.js 
```