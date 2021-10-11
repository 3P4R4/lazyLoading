const intersec = (entry) => {
    return entry.isIntersecting;
};

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    imagen.src = url;
    console.log('%c Imagen Visualizada ', 'background: blue; color: white');
    observer.unobserve(container);
};


const observer = new IntersectionObserver((entries) => {
    entries.filter(intersec).forEach(loadImage)
});

export const registerImage = (imagen) => {
    observer.observe(imagen);
}



//const observer = new IntersectionObserver(callback, option);

/* const options = {
    root: document.querySelector('.contenedor'),
    rootMargin: '10px',
    threshold: 0.5
};

const observer = new IntersectionObserver((img) => {
    img.forEach((element) => console.log("element", element));
}, options);

export const target = document.querySelector("body");
observer.observe(target); */