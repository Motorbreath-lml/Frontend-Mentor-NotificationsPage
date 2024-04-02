//console.log('Estajalando el JS');

const markAll = document.querySelector('#mark-all');
const numberElement = document.querySelector('#number');
const posts = document.querySelectorAll('.post'); //traer todos los posts

// Acada post, se escucha el evento de click, cuando pase se quita la clase 'not-read' de ese post en particular
posts.forEach(post => {
    post.addEventListener('click',()=>{
        post.classList.add('read');
        post.querySelector('.not-read').classList.remove('not-read');
        updateNotifications();
    });
});

markAll.addEventListener('click',()=>{
    const notReadElements = document.querySelectorAll('.not-read');
    //console.log(notReadElements);
    notReadElements.forEach(element => {        
        element.classList.remove('not-read');        
    });

    posts.forEach(post => {
        if(!post.classList.contains('read')){
            post.classList.add('read');
        }
    });

    updateNotifications();
});

//Actualizar el conteno de notificaciones
const updateNotifications = ()=>{
    const notReadElementsActual = document.querySelectorAll('.not-read');
    // console.log(notReadElementsActual.length);
    numberElement.innerText=notReadElementsActual.length;
};