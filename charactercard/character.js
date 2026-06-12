const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",

    attacked: function() {
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has died.`);
        }
        renderCharacter(this);
    },

    levelUp: function() {
        this.level += 1;
        renderCharacter(this);
    }
};

function renderCharacter(character) {
    document.querySelector("#char-image").src = character.image;
    document.querySelector("#char-name").textContent = character.name;
    document.querySelector("#char-class").textContent = `Class: ${character.class}`;
    document.querySelector("#char-level").textContent = `Level: ${character.level}`;
    document.querySelector("#char-health").textContent = `Health: ${character.health}`;
}

renderCharacter(character);

document.querySelector("#attackedButton").addEventListener("click", function() {
    character.attacked();
});

document.querySelector("#levelUpButton").addEventListener("click", function() {
    character.levelUp();
});