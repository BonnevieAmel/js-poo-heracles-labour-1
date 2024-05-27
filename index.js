const { Fighter } = require("./src/Fighter");

const heracles = new Fighter("🧔", "Heracles", 20, 6);
const nemeanLion = new Fighter("🦁", "Nemean Lion", 11, 13);

let round = 1;
while (heracles.isAlive() && nemeanLion.isAlive()) {
  console.log(`\n--- Round ${round} ---`);
  console.log(
    `${heracles.emoji} ${heracles.name} attacks ${nemeanLion.emoji} ${nemeanLion.name}!`
  );
  heracles.fight(nemeanLion);
  console.log(
    `${nemeanLion.emoji} ${nemeanLion.name} has ${nemeanLion.life} life points left.`
  );

  if (!nemeanLion.isAlive()) {
    console.log(
      `${heracles.emoji} ${heracles.name} has defeated ${nemeanLion.emoji} ${nemeanLion.name}!`
    );
    break;
  }

  console.log(
    `${nemeanLion.emoji} ${nemeanLion.name} attacks ${heracles.emoji} ${heracles.name}!`
  );
  nemeanLion.fight(heracles);
  console.log(
    `${heracles.emoji} ${heracles.name} has ${heracles.life} life points left.`
  );

  if (!heracles.isAlive()) {
    console.log(
      `${nemeanLion.emoji} ${nemeanLion.name} has defeated ${heracles.emoji} ${heracles.name}!`
    );
  }

  round++;
}
