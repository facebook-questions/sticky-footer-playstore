const mainSection = document.querySelector("main")

for (let index = 0; index < 19; index++) {
    mainSection.innerHTML += `
    <div class="game">
        <h3>Game title</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.</p>
    </div>
`   
}