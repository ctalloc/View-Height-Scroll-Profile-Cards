"use strict";
/* 
PRUEBA DE USAR ARRAY Y FOR FALLIDA (despliega y oculta todos a la vez)
const legendDesignElement = document.querySelector(".legend__design");
const legendRellenaElement = document.querySelector(".legend__rellena");
const legendComparteElement = document.querySelector(".legend__comparte");
const collapsableElements = document.querySelectorAll(".collapsable");

console.log(collapsableElements);

function handleCollapsable(ev) {
  for (const collapsableElement of collapsableElements) {
    const collapse = ev.currentTarget;
    console.log(collapse);
    collapsableElement.classList.toggle("collapsable--on");
  }
}

legendDesignElement.addEventListener("click", handleCollapsable);
legendRellenaElement.addEventListener("click", handleCollapsable);
legendComparteElement.addEventListener("click", handleCollapsable); */


const legendDesignElement = document.querySelector(".legend__design");
const legendRellenaElement = document.querySelector(".legend__rellena");
const legendComparteElement = document.querySelector(".legend__comparte");

const collapsableDesignElement = document.querySelector(".collapsableDesign");
const collapsableRellenaElement = document.querySelector(".collapsableRellena");
const collapsableComparteElement = document.querySelector(".collapsableComparte");

function handleCollapsableDesign() {
  collapsableDesignElement.classList.toggle("collapsable--on");
}; 
function handleCollapsableRellena() {
  collapsableRellenaElement.classList.toggle("collapsable--on");
} ;
function handleCollapsableComparte() {
  collapsableComparteElement.classList.toggle("collapsable--on");
}

legendDesignElement.addEventListener("click", handleCollapsableDesign);
legendRellenaElement.addEventListener("click", handleCollapsableRellena);
legendComparteElement.addEventListener("click", handleCollapsableComparte);