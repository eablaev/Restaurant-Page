import content from './page-load';
import menu from './menu';
import './style.css';


const body = document.body;

const header = document.createElement('div');
header.classList.add('header');

const tabs = document.createElement('ul');
tabs.classList.add('tabs');

const mainTab = document.createElement('li');
mainTab.textContent = 'Home';
mainTab.classList.add('home');



const menuTab = document.createElement('li');
menuTab.textContent = 'Menu';
menuTab.classList.add('menu');

tabs.appendChild(mainTab);
tabs.appendChild(menuTab);

body.appendChild(header)
header.appendChild(tabs);

const contentElement = document.createElement('div');
contentElement.setAttribute('id','content')
document.body.appendChild(contentElement);


content();


mainTab.addEventListener('click',function(e){
    console.log(e.target.innerText);
    contentElement.innerHTML = "<div></div>";
    content();

})

menuTab.addEventListener('click',function(e){
    console.log(e.target.innerText)
    contentElement.innerHTML = "<div></div>";
    menu()
})









