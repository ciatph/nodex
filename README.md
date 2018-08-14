# nodex

Experiments and demos on NodeJS from W3Schools NodeJS [tutorials](https://www.w3schools.com/nodejs/default.asp). Open each file and run from commandline using nodejs.

Also contains NodeJS demos for Firebase Hosting and Cloud Functions.

### Prerequisites

1. NodeJS
2. Development IDE: VS Code, or any text editor and a command line terminal.


## Basic NodeJS Demos

Basic NodeJS demos contained in `/scripts`. Clone this repository and run `npm init` to download required modules.

1. **index.js**<br>
  - See `router-simple.js`
  - Run `npm install`
  - Run `node index.js`
  - Open the local nodejs website at `http://localhost:8080`<br>

2. **simple-server.js**<br>
A very basic http demo for nodeJS. Creates a server and write a plain text output on web.

3. **loadhtml.js**<br>
Creates a server and write an html page from a file. Parses the URL into parts.

4. **eventhandler.js**<br>
Demo on using events and EventEmitter.

5. **fileupload.js**<br>
Read a file and upload it on server.

6. **email.js**<br>
Demo on sending email from nodejs

7. **router-simple.js**<br>
Creates a server and write an html page from a file. Parses the URL into parts. Implements simple routing: loads html file and external client-side javascript.

## Firebase Hosting and Functions Demo

NodeJS is also used for Firebase's cloud functions and it can also be extended to route and load uploaded website files in firebase hosting. The following were created and deployed using Google's Firebase Hosting and Cloud Functions. 

### Prerequisites
- Google Account
- A Firebase project created from the Firebase [web console](https://console.firebase.google.com/). Firebase projects cannot be created from the cli.
- Firebase Client [firebase cli](https://firebase.google.com/docs/cli/).
- NodeJS
- IDE

### Methods

1. Clone this repository into your PC.
2. Run `npm install`.
3. Delete `.firebaserc`
4. Login to your firebase account using the firebase cli (from the command line).
5. Initialize the local hosting project. See [
Get Started with Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart). 
  - Choose `Database` and `Functions`
  - **Do no overwrite existing files if prompted from the cli.**
6. Update Firebase Functions
  - Navigate into the /functions directory from the command line.
  - Run `npm i --save firebase-functions`
  - Run `npm install`
  - Upload the functions directory 
	  - `firebase deploy --only functions`
7. After `firebase init`, test to run the website locally using the firebase cli:
  - `firebase serve`
8. You can upload hosting and functions online using the command:
  - `firebase deploy`



### Firebase Hosting + Functions Related Files

The following files are related to Firebase Hosting and Functions.


1. **/functions/index.js :: exports.router**<br>
A method which the firebase hosting url parameter calls. Loads and renders specified html file via url parameter as http response.

2. **firebase.src**<br>
Contains your firebase project name. Automatically generated during `firebase init`

3. **firebase.json**<br>
Contains definitions for Firebase functions, hosting and rewrites (routing). Automatically generated during `firebase init`, but will have to be manually updated `rewrites` and `redirects` for routing. See [Customize Hosting Behavior](https://firebase.google.com/docs/hosting/url-redirects-rewrites) for more information.



---

**Date Created:** 20180811<br>
**Date Modified:** 20180813
