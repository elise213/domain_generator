/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "your"];
  let adj = ["great", "big"];
  let noun = ["rutabaga", "potato"];
  let address = [".com", ".org"];

  function domainGenerator(arr1, arr2, arr3, arr4) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
          for (let l = 0; l < arr4.length; l++) {
            console.log(arr1[i] + arr2[j] + arr3[k] + arr4[l]);
          }
        }
      }
    }
  }
  domainGenerator(pronoun, adj, noun, address);
};
