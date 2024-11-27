const ROOT = document.getElementById('root');

export const latest = async () => {
    try {
        const response = await fetch('http://localhost:4000/posters')

        if (!response.ok) {
            throw new Error('Status: ' + response.status);
        }

        // OPRETTER DIV TIL DE 4 FIGURES 
        const grid = document.createElement('div');
        grid.classList.add('grid-container');
        
        ROOT.appendChild(grid);
        //

        const data = await response.json();

        data.slice(0, 4).forEach((poster) => {
            console.log(poster);
            const figure = document.createElement('figure');
            figure.innerHTML = `
                <img class="poster" src="${poster.image}" alt="${poster.name}"/>
                <figcaption>
                    <h4>${poster.name}</h4>
                    ${poster.description}
                    <p>Genre: ${poster.genre_poster_rel[0].genres.title}</p>
                    <div class="buttons">
                        <button id="readmore">Læs mere</button>
                        <button id="heart">♡</button>
                    </div>
                </figcaption>
            `;

            // if (poster.genre_poster_rel.length > 1) {
            //     figure.innerHTML += `
            //         <p>${poster.genre_poster_rel[0].genres.title} , ${poster.genre_poster_rel[1].genres.title}</p>
            //     `
            // }

            grid.appendChild(figure);
        });
    } catch (error) {
        console.error('Error', error);
    }
};

