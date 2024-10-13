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


document.querySelector('#loadMoreBtn').addEventListener('click', () => {
    const query = document.querySelector('#searchInput').value;
    currentPage+=
    getImagesByName(query, currentPage).then(renderImages);
});

let nextPage = 1;
const perPage = 12



function getImagesByName(query, page = 1) {
    const url = `https://pixabay.com/api/?key=46307386-7da731ae02f531c9e3a09662a&q=${query}&image_type=photo&per_page=${perPage}&page=${page}`;
    
    return fetch(url)
        .then(response => response.json())
        .then(data => data.hits); 
}



document.querySelector('#searchBtn').addEventListener('click', () => {
    const query = document.querySelector('#searchInput').value;
    currentPage = 1; 
    document.querySelector('.image-container').innerHTML = ''; 
    getImagesByName(query, currentPage).then(renderImages);
});

function createImageLayout(images) {
    return images.map(image => {
        return `
        <div class="image-item">
            <img src="${image.webformatURL}" alt="${image.tag}">
            <p>${image.user}</p>
        </div>`;
    }).join('');
}

function renderImages(images) {
    const container = document.querySelector('.image-container');
    container.innerHTML += createImageLayout(images); 
}

