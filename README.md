# readable
Project #2 from Udacity's React Nanodegree. Covers React and Redux. The application allows users to make posts, vote on posts, and comment on them.

## Installation Instructions
The commands below can be used to install and run the application.

```
git clone https://github.com/jpniederer/readable.git
cd readable
npm install
npm start
```

The npm install command will install all required packages for both the client and server. The npm start command uses concurrently to start both the server and client.

The server runs at http://localhost:5001/.
The client runs at http://localhost:3000/.

## About
There are two pieces to the solution:
  1. Server - Developed by Udacity. The Server supplies the application with an API to interact with posts. All files found in the root directory.
  2. Client - This is my solution based on the provided rubric. All files are found in the client directory.

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
        Category.js
        Comment.js
        CommentList.js
        Footer.js
        Header.js
        Post.js
        PostForm.js
        PostSummary.js
        PostSummaryList.js
        Root.js
      constants/
        ActionTypes.js
        VoteOptions.js
      containers/
        Categories.js
      reducers/
        index.js
        reducer_categories.js
        reducer_comments.js
        reducer_postComments.js
        reducer_posts.js
      utils/
        api.js
        utilities.js
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