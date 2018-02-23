# Single-Page-Web


## Table of Contents
1. [Assignment](#assignment)
2. [Environment Setup Guide](#environment-setup-guide)


## Assignment

#### Task

In this programming assignment, you will design and implement a single-page website with specified functionality and formatting using only HTML, SCSS, and Javascript. The content of the website is up to you. For example, the subject can be a company/organization, a product, or a personal/portfolio page. This assignment will give you first-hand experience with HTML5 (e.g. header, canvas, video), CSS3/SASS (e.g. use of webfonts, animations, layout), and Javascript(ES5 or ES6).

#### Requirements

Your webpage will have to implement the features listed below. Note that the examples are only meant to illustrate the features. You do not have to make you webpage look similar to the examples. You just have to incorporate that feature in some form.

1. Layout: All content must be laid out in a single page with full-width horizontal stripes/sections including a header and a footer - [Example](https://raw.githubusercontent.com/uiuc-web-programming/fa17/master/labs/MP-1/2.png?raw=true)
2. Sticky Navbar: A top navigation bar that sticks to the top of the window when scrolling - [Example](https://raw.githubusercontent.com/uiuc-web-programming/fa17/master/labs/MP-1/3.gif?raw=true)
3. Position Indicator: Indicator of the current reading position visible in the navigation bar (see above gif for example). Make sure your implementation highlights the last menu item when you scroll to the bottom of the page. ( __Implementation Tip__ : To figure out which menu item to highlight, you’ll have to figure out which section lies directly below the bottom margin of the navigation bar. You can use methods that give you the height and position of different divs to figure that out. You will want to recompute this whenever there is a scroll event.)
4. Navbar Resizing: Navigation bar must be larger when users are at the top of the page. As users start scrolling down, it should resize and become smaller. Note that the text fontsize should also start larger and become smaller as users scroll down - [Example](https://raw.githubusercontent.com/uiuc-web-programming/fa17/master/labs/MP-1/4.gif?raw=true)
5. Smooth Scrolling: Smooth scrolling when navigating to a different section using the navigation bar - [Example](https://raw.githubusercontent.com/uiuc-web-programming/fa17/master/labs/MP-1/5.gif?raw=true)
6. Carousel: A section with a carousel/slider using a minimum of three slides. It should include the navigation arrows on the side - [Example](https://raw.githubusercontent.com/uiuc-web-programming/fa17/master/labs/MP-1/6.gif?raw=true)
7. Multi-column layout: A section with Multi-column content - [Example](https://raw.githubusercontent.com/uiuc-web-programming/fa17/master/labs/MP-1/8.png?raw=true)
8. Centering: Content in each horizontal stripe/section must be horizontally centered. At least one element on the page must be vertically centered. The vertically-centered element should remain centered even if the dimensions of its outer element changes.
9. Responsiveness: Your webpage should look good when resized to the following resolutions:
  - 1920x1080
  - 1366x768
  - 1280x720
  - 1024x768
10. Background Image: A section which uses a fixed-position background image - [Example](https://raw.githubusercontent.com/uiuc-web-programming/fa17/master/labs/MP-1/9.gif?raw=true)
11. Modal: A section which uses modal windows with additional content - [Example](https://raw.githubusercontent.com/uiuc-web-programming/fa17/master/labs/MP-1/10.gif?raw=true)
12. Video: Embedded video using HTML5 video tag - [Example](https://raw.githubusercontent.com/uiuc-web-programming/fa17/master/labs/MP-1/11_2.gif?raw=true)
13. CSS3 Animations: At least one use of CSS3 animations (e.g. fade in/out, transitions)
14. At least one use of scalable vector icons through CSS (e.g. FontAwesome)
15. Inclusion of social media icons


## Environment Setup Guide
1. Install dependencies:
`npm install`
2. Run the dev server:
`npm run dev`
3. Open a browser and go to `http://localhost:8080/` to view your page. Note that if for some reason your port 8080 is occupied, it will default to 8081.

