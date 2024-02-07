import darkTheme from "./dark_mode.js";
import hamburger from "./ham.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e)=>{
    hamburger('#btn-ham', '.nav', '.nav-list li a', '.dark-theme-btn');
});
darkTheme('.dark-theme-btn', 'dark-mode')