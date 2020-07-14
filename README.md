# Landing Page Project

## Landing Page Link

* [View Landing Page](https://yukariim8.github.io/Udacity_FEND_02_Landing_Page/)

![Landing Page](./image/image.JPG?raw=true "Landing Page")

## Overview
This project required me to improve the user experience of a static multi-section landing page, with manipulating DOM using JavaScript. To improve the user experience, I implemented the following requirements. All features are usable across modern desktop, tablet, and phone browsers.

1. The navigation menu should be dynamically created based on the number of content added to the page.
2. The section actively being viewed should be differentiated in some way. 
3. When a user clicks on a navigation item, the item should scroll the user to the appropriate section rather than giving the user the default jump.
4. When a section is in the viewport, the corresponding navigation item should be differentiated.
5. Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.

## Task
The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

## Tech Stack
* **JavaScript ES6**
* **CSS**
* **HTML**

## Main Files: Project Structure

  ```sh
  ├── README.md
  ├── index.html
  ├── css
  │   └── style.css
  └── js
      └── app.js
  ```

## Functions
### nav()
- Build a navigation menu dynamically based on the amount of content that is added to the page.

### scrollToSection();
- Scroll to the corresponding section smoothly if the user clicks on navigational menu.

### activeSection();
- Set a section within the viewport as active to distinguish from the other sections.
- Add an active state to the navigation items when a section is in the viewport.

### showPageTop();
- Show the pagetop button only if the user scrolls down 100px from the top of the document 

### goTop();
- Scroll to the page-top smoothly if the user clicks on the top button.