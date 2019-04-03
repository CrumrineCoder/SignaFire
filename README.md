# Signa Fire Take Home Project

Message Viewer built from a wireframe with the addition of a trash button, a view toggle button, and a text highlighter.

## Deployment

Download the project to your computer, and open it in the code editor of your choice. Open the terminal in the root directly and run...

```
npm install
npm start
```

Then open http://localhost:3000/ to see the app!

### My Assumptions

* All messages come from Twitter and thus will not extend the word limit. All users will have an avatar and handle which I can link to. 
* All data is stored locally so Redux, async design, and database management don't need to be considered nor do we need to consider persistence of data (as mentioned in the task).
* We can use FontAwesome for icons
* The purpose of this application is to view messages-of-the-day from friends or possible friends on Twitter, and we would use some algorithm to make sure the user would have more messages like the ones they star and less like the ones they trash, assumingly by text content because the user can highlight it. 
* The user won't want to untrash content.
* There's some sort of daily reward or something for starring a number of posts; assumingly it would be an infinite scroll and the goal would to get users to find 10 new people they liked reading the Twitter post of. However, because I don't have infinite data and it's outside the scope of this project, I did not implement that
* The user may be using this on their phone, so the application is responsive. 
* The user won't be needing to trash or star trashed messages, so the buttons are not shown.

### Acknowledgments

(https://github.com/bvaughn/react-highlight-words)[React Text Highlighter] For a text highlighter library with React.