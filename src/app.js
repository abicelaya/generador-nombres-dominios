/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  var one = Math.floor(Math.random() * pronoun.length);
  var two = Math.floor(Math.random() * adj.length);
  var three = Math.floor(Math.random() * noun.length);

  console.log(pronoun[one] + adj[two] + noun[three] + ".com");
};
