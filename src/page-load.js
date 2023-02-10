export default function content() {

    const contentElement  = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = "Worst Restaurant in the World!";
    heading.classList.add('heading')


    const image = document.createElement('img');
    image.src = "../media/img.jpeg";
    image.classList.add('image');

    const description = document.createElement('h3');
    description.textContent = "Are you tired of gourmet meals and Michelin-star dining experiences? Come dine with us at the Worst Restaurant in the World! Our menu is a mystery, our ingredients questionable, and our chefs questionable, but one thing's for sure, you'll never forget your dining experience with us. And if you do, just ask our friendly waitstaff, they`ll be more than happy to remind you. Reservations not recommended, unless you`re brave enough to face the unknown. See you soon!" 
    description.classList.add('description')

    contentElement.appendChild(heading);
    contentElement.appendChild(image);
    contentElement.appendChild(description);


}