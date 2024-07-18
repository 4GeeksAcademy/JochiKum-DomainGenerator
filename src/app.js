/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronombre = ["the", "our"];
  let adj = ["great", "big"];
  let nombre = ["jogger", "racoon"];
  let extensiones = [".com", ".net"];
  let myList = document.querySelector("#lista");
  let listaNombresDominios = "";

  for (let i = 0; i < pronombre.length; i++) {
    for (let a = 0; a < adj.length; a++ ) {
      for (let n = 0; n < nombre.length; n++ ) {
        for (let j = 0; j < extensiones.length; j++ ) {
          listaNombresDominios += '<li>' + pronombre[i] + adj[a] + nombre[n] + extensiones[j] + '</li>';

        }
      }
    }
  }
  myList.innerHTML = listaNombresDominios;
}