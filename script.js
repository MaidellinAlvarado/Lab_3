// Paso 1: Definir la función constructora Image
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

// Paso 2: Crear el objeto images con la propiedad list
const images = {
    list: [],
    
    // Método para verificar si la lista contiene una imagen por título
    contains: function(title) {  // si existe un argumento en este aso title
        return this.list.some(image => image.title === title);
    },

    // Método para agregar una nueva imagen si no está ya en la lista
    add: function(title, artist, date) {
        if (!this.contains(title)) {
            const newImage = new Image(title, artist, date); // nuevo objeto para nuestro array que se llamaqra Image
            this.list.push(newImage); // lo colocamos en nuestro array Lista con la propiedad push
        }
    },

    // Método para mostrar todas las imágenes de la lista
    show: function() {
        this.list.forEach(image => {
            console.log(`${image.title} (${image.artist}, ${image.date})`);
        });
    },

    // Método para limpiar la lista de imágenes se queda vacio nuestro array.
    clear: function() {
        this.list = [];
    }
};



// Prueba del objeto images
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503); // No se agregará porque ya existe
images.show();
// Salida esperada eso lo puede verificar en paytontutor en la imagenes adjuntas.
// Mona Lisa (Leonardo da Vinci, 1503)
// The Last Supper (Leonardo da Vinci, 1495)
// The Starry Night (Vincent van Gogh, 1889)

images.clear(); // Limpiar la lista
images.show();  // No debería mostrar nada


//ESTO LO PUEDE VER EN LAS IMAGENES QUE SE PEGARON DE PAYTONTUTOR