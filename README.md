## Redux and React-Redux Note
1. install react app
2. install react router dom 
3. set routes for project
4. maintain folder structure 
5. design all pages and components using css or any css framework
6. install redux and react-redux and @redux-devtools/extension
7. create redux folder in src.
8. in redux folder create store.js file, create reducers folder, actions folder and actionTypes folder.
9. in index.js folder import Provider and wrap the App component, then import store and set the store in Provider store.
10. then write actionTypes, write actions, write reducers.
11. in actionTypes file it export the string variable. 
12. in actions file it export the functions and this function return type and payload. type comes from actionTypes and payload comes from functions parameter.
13. in reducers file there is initialState object. and there is also reducers function. and this functions parameter are state and action. state means initialState. in reducers function write logic using if else or switch case.
14. in store.js import reducers and set it in the store and also import devtools and set it in the store.
15. in others components you call import and call useDispatch and useSelector. dispatch means send action and selector means get values.
