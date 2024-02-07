
const d = document;

export default function hamburger(btnHam, nav, nav_list, btn_dark){
    d.addEventListener('click', (e)=>{
        if(e.target.matches(btnHam) || e.target.matches(`${btnHam} *`)){
            d.querySelector(nav).classList.toggle('is-active');
            d.querySelector(btnHam).classList.toggle('is-active');
        }
        if(e.target.matches(nav_list) || e.target.matches(`${btn_dark}`)){
            d.querySelector(nav).classList.remove('is-active');
            d.querySelector(btnHam).classList.remove('is-active');
        }
    })
}