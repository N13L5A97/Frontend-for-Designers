// const btn = document.querySelector(".btn-toggle");
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// const h1 = document.querySelector("h1");
// const span = document.querySelectorAll("span");
// // const border = document.querySelector(":before");

// const currentTheme = localStorage.getItem("theme");
// if (currentTheme == "dark") {
//   document.body.classList.toggle("dark-theme");
// } else if (currentTheme == "light") {
//   document.body.classList.toggle("light-theme");
// }


// // zet de body op dark theme of light theme
// btn.addEventListener("click", function () {
//   if (prefersDarkScheme.matches) {
//     document.body.classList.toggle("light-theme");
//     var theme = document.body.classList.contains("light-theme")
//       ? "light"
//       : "dark";
//   } else {
//     document.body.classList.toggle("dark-theme");
//     var theme = document.body.classList.contains("dark-theme")
//       ? "dark"
//       : "light";
//   }
//   localStorage.setItem("theme", theme);
// });

// //   zet h1 op dark theme of light theme
//   btn.addEventListener("click", function () {
//     if (prefersDarkScheme.matches) {
//       h1.classList.toggle("light-theme");
//       var theme = h1.classList.contains("light-theme")
//         ? "light"
//         : "dark";
//     } else {
//       h1.classList.toggle("dark-theme");
//       var theme = h1.classList.contains("dark-theme")
//         ? "dark"
//         : "light";
//     }});


// //   zet span op dark theme of light theme
//     btn.addEventListener("click", function () {
//         if (prefersDarkScheme.matches) {
//             span.classList.toggle("light-theme");
//           var theme = span.classList.contains("light-theme")
//             ? "light"
//             : "dark";
//         } else {
//           span.classList.toggle("dark-theme");
//           var theme = span.classList.contains("dark-theme")
//             ? "dark"
//             : "light";
//         }});


//         // btn.addEventListener("click", function () {
//         //     if (prefersDarkScheme.matches) {
//         //         border.classList.toggle("light-theme");
//         //       var theme = border.classList.contains("light-theme")
//         //         ? "light"
//         //         : "dark";
//         //     } else {
//         //       border.classList.toggle("dark-theme");
//         //       var theme = border.classList.contains("dark-theme")
//         //         ? "dark"
//         //         : "light";
//         //     }});