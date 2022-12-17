/* Selecting One/Multiple Elements
Create two unordered lists on the page.
Create a function that selects the second list and applies a class that sets some
background color to it.
Create a second function that, when triggered, selects all <li>  elements on the
page.The function also sets a class that sets some bg color to every <li> element.
Create one more unordered list and one more function
The function should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the
text to uppercase. */

// var secondList = function() {
//     var a = document.documentElement.lastElementChild.firstElementChild.nextElementSibling;
//     a.classList.add("color");
//     return a;
// }

// var b = secondList();
// console.log(b);

var secondList = (function() {
    var a = document.documentElement.children[1].children[1];
    a.classList.add("color");
    return a;
})();

console.log(secondList);

var allList = (function() {
    var all = document.querySelectorAll("li")
    for (var i = 0; i < all.length; i++) {
        all[i].classList.add("bgColor");
    }
    return all;
})();

console.log(allList);

// var thirdList = (function() {
//     var third = document.documentElement.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling;
//     var third1 = third.querySelectorAll("li");
//     for (var i = 0; i < third1.length; i++) {
//          third1[i].classList.add("bgColor1");
//      }
//     return third1; 
// })();

// console.log(thirdList);

var thirdList =(function() {
    var third = document.documentElement.children[1].children[2];
    var third1 = third.getElementsByTagName("li");
    for (var i = 0; i < third1.length; i++) {
        third1[i].classList.add("bgColor1");
    }
    return third1; 
})();
        
console.log(thirdList);

/* Traversing
Create two unordered lists.
Each list should be wrapped in a div element.
One <li> element in the second list should have a class “active”, which sets its background color.
Create a function that selects the <li> element with class “active”.
Remove the class from that element, and then select the first <li> element in the first unordered list using node relations.
Apply class to that newly selected <li> element */

var selectLi =(function() {
    //var s = document.getElementsByClassName("active")[0]; 
    var s = document.querySelector(".active");
    s.classList.remove("active");
    var d = document.getElementsByTagName("div")[0].firstElementChild;
    d.classList.add("active");
    return d;
})();

console.log(selectLi);

/* Access/Update Text Node
Create an unordered list containing <li> items that represent navigation.
Create a function that takes text from one of the <li> elements and presents it on
screen using alert.
Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list and replace its text with
text passed as the function argument. */

// var represent = (function() {
//     var f = document.documentElement.lastElementChild.lastElementChild.previousElementSibling.firstElementChild;
//     var t = f.textContent;
//     return alert(t);
// })();

// console.log(represent);

// var represent =(function() {
//     var f = document.documentElement.children[1].children[6].children[0];
//     var t = f.textContent;
//     return alert(t);
    
// })();
// console.log(represent);

// function replaceText(someText) {
//     var forReplace = document.documentElement.lastElementChild.lastElementChild.previousElementSibling.lastElementChild;
//     forReplace.textContent = someText;
//     return forReplace;
// };

// var a = replaceText("This is Vanilla JS");
// console.log(a);

function replaceText(someText) {
    var forReplace = document.documentElement.children[1].children[6].children[1];
    forReplace.textContent = someText;
    return forReplace;
};

var a = replaceText("This is Vanilla JS and today is Saturday");
console.log(a);

/* InnerHTML
Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
Create a function that is used for building a dropdown/select element.
It first builds a dropdown and then adds it to the DOM.
The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added.
Create options that correspond to items in the passed array and add them to the select element.
Add the whole dropdown list to DOM .
Use this function to create two selects on the page.
The first select should be appended to the first div on the page.
The second select should be appended to the last div on the page. */

var d = document.getElementById("dropdown");
// var b = document.getElementsByTagName("div")[0];
//var b = document.getElementsByTagName("div")[1];
var dropdown = (function(array, node) {
    var select = document.createElement("select");
    var option = "";
    for (var i = 0; i < array.length; i++) {
        option = document.createElement("option");
        option.innerHTML = array[i];
        select.appendChild(option);
    }
    node.appendChild(select);
})(["first", "second", "third"], d);

console.log(dropdown);

/* Attributes
Create a form that contains multiple input elements with labels.
Some of those elements should be required.
Create a function that validates the form.
The function checks each input element that belongs to the form.
If the element has the required attribute and no data, it should get red borders. */

// var allInputs = document.getElementsByTagName("input");
// console.log(allInputs);
// var c = allInputs[0];
// console.log(c);
// var submite = document.querySelector("form").lastElementChild;
// console.log(submite);

// function validateForm(f){
//     var inputs = document.getElementsByTagName("input");
//     for (var i = 0; i < inputs.length; i++) {
//         if(inputs[i].hasAttribute("required") && inputs[i].value.length === 0 ){
//            inputs[i].setAttribute("style","border-color:red");
//         } else {
//             inputs[i].removeAttribute("style")
//         }
//     }
//     return inputs;
// }

function validateForm(f){
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].hasAttribute("required") && inputs[i].value.length === 0 ){
           inputs[i].classList.add("borderColor");
        } else {
            inputs[i].classList.remove("borderColor")
        }
    }
    return inputs;
}

// var form = document.querySelector("form");
// var n = validateForm(form);
// console.log(n);

    






        




 



    

