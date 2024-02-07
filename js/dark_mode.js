
const d = document,
localS = localStorage;

export default function darkTheme(btnDark, classDark) {
    const $themeBtn = d.querySelector(btnDark),
        $selectors = d.querySelectorAll("[data-dark]");
    let moon = '🌙',
        sun = '☀️';

    const lightMode=()=>{
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        localS.setItem('theme','light');
    }
    const darkMode=()=>{
        $selectors.forEach((el) => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        localS.setItem('theme','dark');
    }

    d.addEventListener('click', (e)=>{
        if(e.target.matches(btnDark)){
            if($themeBtn.textContent === moon){
                darkMode();
            } else {
                lightMode();
            }
        }
    });

    d.addEventListener('DOMContentLoaded', (e)=>{
        if(localS.getItem('theme') === null){
            localS.setItem('theme', 'light');
        }
        if(localS.getItem('theme') === 'light'){
            lightMode();
        }
        if(localS.getItem('theme') === 'dark'){
            darkMode();
        }
    });
}