let movies = [
    {
        name: 'The Dark Knight',
        rating: 9,
        description: 'Batman enfrenta al Joker, un criminal maestro que busca crear caos en Gotham City mientras empuja a Batman a sus límites.'
    },
    {
        name: 'Pulp Fiction',
        rating: 8,
        description: 'Las vidas de dos matones de la mafia, un boxeador, la esposa de un gánster y una pareja de ladrones de diner se entrelazan en cuatro relatos de violencia y redención.'
    },
    {
        name: 'The Matrix',
        rating: 8,
        description: 'Un hacker informático aprende de rebeldes misteriosos sobre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.'
    },
    {
        name: 'Fight Club',
        rating: 8,
        description: 'Un trabajador de oficina insomne y un fabricante de jabón sin preocupaciones forman un club de lucha subterráneo que evoluciona hacia algo mucho más grande.'
    },
    {
        name: 'Gladiator',
        rating: 8,
        description: 'Un antiguo general romano se propone vengarse del emperador corrupto que asesinó a su familia y lo envió a la esclavitud.'
    }
];

let series = [
    {
        name: 'Breaking Bad',
        rating: 9,
        description: 'Un profesor de química se convierte en fabricante de metanfetaminas tras ser diagnosticado con cáncer.'
    },
    {
        name: 'Stranger Things',
        rating: 8,
        description: 'Un grupo de niños en un pequeño pueblo enfrenta fenómenos sobrenaturales y un laboratorio secreto del gobierno.'
    },
    {
        name: 'The Crown',
        rating: 9,
        description: 'La vida de la Reina Isabel II y los eventos históricos que moldearon su reinado.'
    },
    {
        name: 'Game of Thrones',
        rating: 8,
        description: 'Las luchas de varias casas nobles por el control del Trono de Hierro en el continente de Westeros.'
    },
    {
        name: 'The Mandalorian',
        rating: 8,
        description: 'Un cazarrecompensas solitario en el universo de Star Wars protege a un niño misterioso.'
    }
];

let songs = [
    {
        name: 'Bohemian Rhapsody',
        rating: 10,
        description: 'Una obra maestra del rock que combina varios estilos y cuenta la historia de un joven en conflicto.'
    },
    {
        name: 'Stairway to Heaven',
        rating: 9,
        description: 'Una épica balada que narra la búsqueda de un camino espiritual y la búsqueda de significado.'
    },
    {
        name: 'Billie Jean',
        rating: 9,
        description: 'Un éxito de pop que cuenta la historia de un hombre que enfrenta las consecuencias de una relación pasada.'
    },
    {
        name: 'Shape of You',
        rating: 8,
        description: 'Una pegajosa canción de pop que habla sobre el amor y la atracción en un bar.'
    },
    {
        name: 'Hotel California',
        rating: 9,
        description: 'Una canción icónica que explora la vida en California y la desilusión que puede acompañarla.'
    }
];

function homeTheater() {
    let menu = parseInt(prompt("Bienvenido a Home Theater, ¿de que desea saber mas? \n (Seleccione esta por numero) \n 1. Peliculas \n 2. Musica \n 3. Series"));

    switch (menu) {
        case 1:
            movieSection();
            break;
        case 2:
            musicSection();
            break;
        case 3:
            serieSection();
            break;
        default:
            console.log("Su seleccion no es correcta! Volviendo al menu principal...");
            homeTheater();
    }
}

homeTheater();

function infoByNumber(section, number) {
    while(number >= 0 && number < section.length) {
        let information = section[number];
        if (confirm(`¿Desea ver más información sobre ${information.name}?`)) {
            alert(`Nombre: ${information.name} \nCalificación: ${information.rating} \nDescripción: ${information.description}`);
            break;
        } else {
            alert("Volviendo al menu principal...");
            homeTheater();
        }
    }

    let returnToMenu = prompt("¿Desea regresar al menú principal? (Sí/No)");
    if (returnToMenu.toLowerCase() === 'si') {
        homeTheater();
    } else {
        console.log("Gracias por usar Home Theater.");
    }
}

function movieSection() {
    let movieOptions = parseInt(prompt("¿De que pelicula desea saber mas? \n (Seleccione esta por número) \n 1. The Dark Knight \n 2. Pulp Fiction \n 3. The Matrix \n 4. Fight Club \n 5. Gladiator"));
    infoByNumber(movies, movieOptions - 1);
}

function musicSection() {
    let musicOption = parseInt(prompt(("¿De qué canción desea saber más? \n (Seleccione esta por número) \n 1. Bohemian Rhapsody \n 2. Stairway to Heaven \n 3. Billie Jean \n 4. Shape of You \n 5. Hotel California")));
    infoByNumber(songs, musicOption - 1);
}

function serieSection() {
    let seriesOption = parseInt(prompt(("¿De que serie desea saber mas? \n (Seleccione esta por número) \n 1. Breaking Bad \n 2. Stranger Things \n 3. The Crown \n 4. Game of Thrones \n 5. The Mandalorian")))
    infoByNumber(series, seriesOption - 1);
}