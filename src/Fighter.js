/* Fighter class definition */

const MAX_LIFE = 100;

class Fighter {
  constructor(emoji, name, strength, dexterity) {
    this.emoji = emoji;
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  isAlive() {
    return this.life > 0;
  }

  fight(enemy) {
    const damage = Math.floor(Math.random() * this.strength) + 1;
    const actualDamage = Math.max(damage - enemy.dexterity, 0);
    enemy.life = Math.max(enemy.life - actualDamage, 0);
    console.log(`${enemy.emoji} ${enemy.name} (${enemy.life} life points)`);
  }
}

module.exports = { Fighter };
