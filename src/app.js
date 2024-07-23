/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  let pronoumb = ["the", "our"];
  let adjective = ["great", "big"];
  let name = ["jogger", "racoon"];
  let extensions = [".com", ".net"];
  let myList = document.querySelector("#lista");
  let domainNamesList = "";

  for (let i = 0; i < pronoumb.length; i++) {
    for (let a = 0; a < adjective.length; a++ ) {
      for (let n = 0; n < name.length; n++ ) {
        for (let j = 0; j < extensions.length; j++ ) {
          domainNamesList += '<li>' + pronoumb[i] + adjective[a] + name[n] + extensions[j] + '</li>';

        }
      }
    }
  }
  myList.innerHTML = domainNamesList;
}
