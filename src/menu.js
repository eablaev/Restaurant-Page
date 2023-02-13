export default function menu() {
    
    const contentElement = document.getElementById('content')
    
    const heading = document.createElement('h1');
    heading.textContent = "Menu";
    heading.classList.add('menu')


    

    const description = document.createElement('h3');
    description.textContent = "This is a menu" 
    description.classList.add('menu');


    const main = document.createElement('button');
    main.textContent = "Main";
    main.classList.add('main');



    contentElement.appendChild(heading);
   
    contentElement.appendChild(description);
    contentElement.appendChild(main)

}