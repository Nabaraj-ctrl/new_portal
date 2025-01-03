function date() {
    let today = new Date();
    console.log(today);
    let year = today.getFullYear();
    // console.log(year);
     let month = today.getMonth();
    let months =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    console.log(months[month]);
    let day = today.getDate();
    // console.log(day);
    // if (month === 1) {
    //     thismonth = 'Jan';
    // } else if (month === 2) {
    //     thismonth = 'feb';
    // } else if (month = 3) {
    //     thismonth = 'Mar';
    // } else if (month = 4) {
    //     thismonth = 'Apr';
    // } else if (month = 5) {
    //     thismonth = 'May';
    // } else if (month = 6) {
    //     thismonth = 'jun';
    // } else if (month = 7) {
    //     thismonth = 'Jul';
    // } else if (month = 8) {
    //     thismonth = 'Aug';
    // } else if (month = 9) {
    //     thismonth = 'Sep';
    // } else if (month = 10) {
    //     thismonth = 'Oct';
    // } else if (month = 11) {
    //     thismonth = 'Nov';
    // } else if (month = 11) {
    //     thismonth = 'Dec';
    // }
    let todayDate = year + " " + months[month] + " " + day;
    document.querySelector('.current-date').innerHTML = todayDate;
    document.querySelector('.today-date').innerHTML = todayDate;
}
date();







let body = document.querySelector('body');
let wrap = document.querySelector('#click-button');
let box = document.querySelector('.toggle-button');
wrap.classList.add('moveleft')
box.classList.add('light');
let moon = document.querySelector('.fa-moon');
let theme = "light";

box.addEventListener('click', () => {
    if (theme === "light") {
        theme = 'dark';
        body.classList.add('dark');
        body.classList.remove('light');
        moon.classList.remove('fa-moon');
        moon.classList.add('fa-sun');
        box.classList.remove('light');
    } else {
        theme = 'light';
        body.classList.add('light');
        body.classList.remove('dark');
        moon.classList.remove('fa-sun');
        moon.classList.add('fa-moon');
        box.classList.add('light');
    }
})
function change() {
    wrap.classList.toggle('moveright');
    box.classList.toggle('dark-back');
}
box.addEventListener('click', change);



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:3500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})