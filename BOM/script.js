
/* Using JS on web page
On-page Script
● Create a script tag on the page
● It should contain code that console.log’s some text
● Wrap the previous script in a function
● When page is loaded, trigger the function

External JS Files
● Include an external JS script on the page.
● The script should contain a function that uses console.log to print something.
● Trigger that function. */

var text = function() {
    console.log("Some text text");
}
text();

/*BOM (Window object)
window.navigator
Create a function that prints out in the console the following information
● the platform on which the browser is running
● the information about the browser version
● the company that created that browser
Each piece of information should be printed out in a new row.
Create new “isOnline” function that checks if the browser is online.
It should print out “online” when the browser is online and “offline” when there is
no Internet connection. */

var printInformations = function () {
    console.log(window.navigator.platform);
    console.log(window.navigator.appVersion);
    console.log(window.navigator.appName);
}

printInformations();

var checkStatus = function () {
    if(window.navigator.onLine) {
        console.log("Online");
    }else {
        console.log("Offline");
    }
}

checkStatus();

/* window.screen
Create a function that prints out the following information in the console:
● current browser width and height
● max possible browser height */

var curentBrowser = function() {
    console.log(window.screen.availWidth, window.screen.availHeight);
}

curentBrowser();

var maxpossibleBroswerHeight = function() {
    console.log(window.screen.height);
}

maxpossibleBroswerHeight();

/* window.location
Write a function that prints out website’s url information in the console:
● full url address
● domain name
● used protocol
● parameters which are part of URL.
Create a function for reloading the page.
Create a function that redirects you to a website address passed to it.
Test all three functions */

var printUrl = function() {
    console.log(window.location.href, window.location.hostname, window.location.protocol, window.location.search);
}

printUrl();

var reloadPage = function() {
    window.location.reload();
}
    
//reloadPage();

var redirect = function(){
    window.open('https://www.bgit.rs/');
}

//redirect();

/* window.localStorage
Create a function that stores passed data in the browser local storage.
Create a function that reads the stored data, and print it out in console.
If there is no data, print "There is no data" in the console.
Create a function that removes data from the local storage.
Use the previously created functions to store/read/remove some data.
Then add some data in storage and close the browser.
Open the browser again on the same page and use the function to read the
stored value.
Modify functions to work with sessionStorage instead of localStorage.
Try same scenario as with localStorage to examine data livecycle. */

var lStorage = function() {
    localStorage.setItem('myCat', 'Tom');
}

lStorage();

var readStorage = function() {
    if(localStorage.length !== 0) {
       console.log(localStorage.getItem("myCat"));
    }else {
        console.log("There is not date");
    }
}

readStorage();

var removeDate = function() {
    localStorage.clear();
}

removeDate();

var sStorage = function() {
    sessionStorage.setItem('myCat', 'Tom');
}

sStorage();

var readStorage = function() {
    if(sessionStorage.length !== 0) {
       console.log(sessionStorage.getItem("myCat"));
    }else {
        console.log("There is not date");
    }
}

readStorage();

/* window.history
Play around with the browser forward/back navigation.
Implement a function that navigates two pages back. */

window.history.forward();
window.history.back();

function goBack() {
    window.history.go(-2);
}

var back = goBack();
console.log(back);

/* Window Methods
● Create a function that shows the user a greeting message using alert
● Then a question is presented to the user using prompt
● When the user provides the answer, that answer is used in the confirm
dialog
● The format of the message in the dialog should be: &quot;We will submit this
answer now! &quot; + the answer
● If the user clicks OK, show alert with success message
● If the user clicks Cancel, don&#39;t show anything */

/* Global JavaScript Objects (homework)
Math
● Random
Create a function that builds an array of 10 random numbers between 1 and 50.
The function prints that array out in the console and then returns it.
● Round
Create a function that uses the passed array of numbers and rounds all its
elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.
● Floor
Create a function that uses the passed array of numbers and rounds all its
elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.
● Max
Create a function that finds and prints out the biggest element in the passed
array of numbers.
Date
● Print out the whole date object in the console.

● Print out the current time in the console.
● Print out the current date in the console. */
