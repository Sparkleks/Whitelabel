# Whitelabel

1st Phase Task

✔ 1. The first screen should be a list of posts from https://jsonplaceholder.typicode.com/posts/

✔ 2. Each post's card should display the id, title (max: 40 characters), and body (max: 100 characters)

✔ 3. Store posts in the redux store

✔ 4. The styling should be done using https://www.styled-components.com/docs/basics#react-native

✔ 5. The project should have two flavors/targets (lightmode/darkmode) Check approximate design in files attached. Check this tutorial for help https://medium.com/@najera.sean/react-native-white-label-102-aba9c56f385c (but don't change themes from a native file. Colors should be in lightmode.json and darkmode.json)

✔ 6. App icons should be different (use icons from the attached files).


Link to demo video:
https://youtu.be/Ts7psxjD_Fc

Phase 2 (only after Phase 1 sent and approved):

✔ 1. When clicking on a post the app navigate to 2nd screen.

✔ 2. The 2nd screen should have a full-page Webview https://facebook.github.io/react-native/docs/webview.html which points to a simple react web app on http://localhost:3000

✔ 3. Selected post can be sent to react app using query param like http://localhost:3000?postId=1

✔ The react app should have 2 buttons: Pin and Unpin (Check design in the attached files)

✔ 4. On click o the buttons a postMessage should be sent to react-native app with pined or unpinned status of the selected post. 

✔ 5. In the react-native app, when a post message is received (hint: webview.onMessage) the app should navigate to 1st screen.

✔ 6. Posts should be sorted by pined status (first display pinned posts, second display unpinned posts)

✔ 7. pined posts should have an icon (like in design, but you can use any icon, just to be clear that the post is pinned)

✔ 8. Store statuses in redux.

 
Phase 3 (only after Phase 1 sent and approved):

✔ 1. All the changes (pinned/unpinned status) should be saved in AsyncStorage on the device https://facebook.github.io/react-native/docs/asyncstorage.html.

✔ 2. On the next open of the app, the sorted list of users by pined status should be displayed.

✔ 3. On clicking the Reset Button from 1st screen AsyncStorage should be cleared and the posts should be displayed

Link to demo video:
https://youtu.be/gxXlfoNu2zU

Theme change video:
https://youtu.be/gohPV5sBlUQ

