const games = [
    {
        day: "16",
        team: "argentina",
        hour: "4H",
        watch: 'globo-sport-tv'
    },
    {
        day: "17",
        team: "peru",
        hour: "4H",
        watch: 'globo-sport-tv'
    },
    {
        day: "19",
        team: "bulgária",
        hour: "4H",
        watch: "sport-tv"
    },
    {
        day: "20",
        team: "porto rico",
        hour: "4H",
        watch: "sport-tv"
    },
    {
        day: "22",
        team: "turquia",
        hour: "4H",
        watch: "sport-tv"
    },
    {
        day: "23",
        team: "bélgica",
        hour: "4H",
        watch: 'globo-sport-tv'
    },
    {
        day: "24",
        team: "japão",
        hour: "7h25",
        watch: "sport-tv"
    },
];

function createGames() {
    for (const match of games) {
        const matchGame = `
        <div class="game">
            <div class="match">  
                <p>${match.day}/9 - ${match.hour}</p>
                <p>BRASIL X ${match.team}</p>
            </div>
            <img src="assets/${match.watch}.png" alt="${match.watch}">
        </div>
            `;
        document.getElementById("containerGames").innerHTML += matchGame;
    }
}

createGames();
