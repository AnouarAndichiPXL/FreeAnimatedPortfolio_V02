'use strict'

window.addEventListener('load', WindowHandel);


function WindowHandel(){

    //for macking the green color in the navbar
    let navBtns = document.getElementsByClassName('nav-item');

    for (let index = 0; index < navBtns.length; index++) {
        navBtns[index].addEventListener('click', function(){
            event.preventDefault();
            for (let index = 0; index < navBtns.length; index++) {
                navBtns[index].children[0].className= "";
            }
            navBtns[index].children[0].className += "active";
        });

    }

    console.log(navBtns);
    //for links in navbar
    let Sections = ['hero','aboutMe','mySkills','myServices','portofolio','contact'];
    for (let index = 0; index < Sections.length; index++) {
        navBtns[index].addEventListener('click', function(){
            window.location = "#" +  Sections[index];
        });
    };

    for (let index = 0; index < Sections.length; index++) {
        navBtns[(navBtns.length - 1) -index ].addEventListener('click', function(){
            window.location = "#" +  Sections[(Sections.length - 1) - index];
        });
    };


    //append active classes in myServices section
    let servicesCards = document.getElementsByClassName('servicesCards');
    let servicesDots = document.getElementsByClassName('myServicesDots');


    for (let index = 0; index < servicesCards[0].children.length; index++) {
        servicesCards[0].children[index].addEventListener('mouseover', function () {
            for (let index = 0; index < 3; index++) {
                servicesDots[0].children[index].className ="myServicesDot";
                servicesCards[0].children[index].className ="myServicescard";
            }

            let cardID = servicesCards[0].children[index].id;
            servicesDots[0].children[cardID - 1].className +=" myServicesDotactive";
        });   
    }

    for (let index = 0; index < servicesDots[0].children.length; index++) {
        servicesDots[0].children[index].addEventListener('click', function () {
            for (let index = 0; index < 3; index++) {
                servicesCards[0].children[index].className ="myServicescard";
                servicesDots[0].children[index].className ="myServicesDot";
            }

            let cardID = servicesCards[0].children[index].id;
            servicesCards[0].children[cardID - 1].className +=" myServicesCardactive";
        });
    }

    //Mobile Menu
    let openIcon = document.getElementsByClassName('fa-bars')[0];
    let opened = false;
    openIcon.addEventListener('click', function(){
        let hidden_navbar;

        if (opened) {

            hidden_navbar = document.getElementsByClassName('hidden_navbar')[0];
            hidden_navbar.style.marginLeft = "500vw"; 
            opened = false;
        }else{

            hidden_navbar = document.getElementsByClassName('hidden_navbar')[0];
            hidden_navbar.style.marginLeft = "0px"; 
            opened = true;
        }

    }); 


}