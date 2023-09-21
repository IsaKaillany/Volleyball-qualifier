const games = [
    {
        day: "16",
        team: "argentina",
        hour: "4",
    },
    {
        day: "17",
        team: "peru",
        hour: "4",
    },
    {
        day: "19",
        team: "bulgária",
        hour: "4",
    },
    {
        day: "20",
        team: "porto rico",
        hour: "4",
    },
    {
        day: "22",
        team: "turquia",
        hour: "4",
    },
    {
        day: "23",
        team: "bélgica",
        hour: "4",
    },
    {
        day: "24",
        team: "japão",
        hour: "4",
    },
];

function createGames() {
    for (const match of games) {
        const matchGame = `
            <div class="games">  
                <p>${match.day}/9 - ${match.hour}H</p>
                <p>BRASIL X ${match.team}</p>
            </div>
            `;
        document.getElementById("containerGames").innerHTML += matchGame;
    }
}

createGames();
