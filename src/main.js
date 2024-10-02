//1 стоврити функцію getImages яка буде приймати ключове слово і повертати розпарсену відповідь 
//2 створити фукцію createImageLayout яка буде отримувати масив зображень і повертати розмітку 
//3 повісити слухача подій на форму 



function getImagesByName(query) {
    const url = `https://pixabay.com/api/?key=46307386-7da731ae02f531c9e3a09662a&q=${query}&image_type=photo`
    
    return fetch(url)
        .then(response => response.json())
    
}


function createImageLayout(images) {
  return  images.map(image => {
    return ` <div class="images-i"> 
        <p><img src= ${image.webformatURL}'></p>
    </div>
    `;

}).join(''); 
}





