// Even though they're not bundled, they need to be imported
import React from 'react';
import ReactDOM from 'react-dom';

// Import our MyCanvas to call on later
import MyCanvas from './MyCanvas';

ready(() => {
    // There may be many of these, so query them all
    const containers = document.querySelectorAll(".paint-me");
    // turn into array instead of node list
    const containersArray = Array.prototype.slice.call(containers);

    containersArray.forEach((element) => {
        // get the props from this div
        const strokeList = JSON.parse(element.dataset.strokeList);

        // Call react!
        ReactDOM.render(
            <MyCanvas strokeList={strokeList} />, // call MyCanvas and pass the strokeList as props
            element // need to specify the element to render on
        )
    })
});

// Thank you http://youmightnotneedjquery.com/
// Very much like $.ready() from jQuery
function ready(fn) {
    if (
        document.attachEvent
            ? document.readyState === "complete"
            : document.readyState !== "loading"
    ) {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

