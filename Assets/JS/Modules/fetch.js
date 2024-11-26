const ROOT = document.getElementById('root')
const grid = document.createElement('div')
grid.classList.add('grid-container')

export const fourposters = async () => {
    try {
        const response = await fetch('http://localhost:4000/posters')

        if (!response.ok) {
            throw new Error('Status: ' + response.status);
        }

        const data = await response.json();

        data.slice(0, 4).forEach((poster) => {
            console.log(poster);
            const figure = document.createElement('figure');
            figure.innerHTML = `
                <img class="poster" src="${poster.image}" alt="${poster.name}"/>
                <figcaption>
                    <h4>${poster.name}</h4>
                    <p>${poster.description}</p>
                    <p>${poster.genre_poster_rel[0].genres.title}</p>
                </figcaption>
            `;

            // if (poster.genre_poster_rel.length > 1) {
            //     figure.innerHTML += `
            //         <p>${poster.genre_poster_rel[0].genres.title} , ${poster.genre_poster_rel[1].genres.title}</p>
            //     `
            // }

            ROOT.appendChild(grid);
            grid.appendChild(figure);
        });
    } catch (error) {
        console.error('Error', error);
    }
};

