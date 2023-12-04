class characterBlock {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.mx = 0;
        this.my = 0;
        canvasObjects.fillRect(this.x, this.y, this.w, this.h);
        this.draw = function() {
            this.x = lerp(this.x, this.mx, 0.1);
            this.y = lerp(this.y, this.my, 0.1);
            canvasObjects.fillRect(this.x, this.y, this.w, this.h);
        };
        this.clear = function() {
            canvasObjects.clearRect(0, 0, canvas.width, canvas.height);
        };
        this.update = function() {
            this.clear();
            this.draw();
        };
    }
}

class CreateNewChar {
    constructor(name, currentLvl, characterID) {
        //character info
        this.char_x = 0;
        this.char_y = 0;
        this.characterID = characterID;
        this.name = name;
        this.currentLvl = currentLvl;
        this.currentXP = 0;
        this.xpGainLvl = 333 + this.currentLvl;
        //allocation points
        this.chakraPoints = 0;
        this.moralPoints = 0;
        //refill bars
        this.maxHP = 50 + this.currentLvl * 5;
        this.currentHP = this.maxHP;
        this.maxENG = 20 + this.currentLvl * 2;
        this.currentENG = this.maxENG;
        this.maxSP = 20 + this.currentLvl * 2;
        this.currentSP = this.maxSP;
        //morality
        this.goodMoral = 0;
        this.badMoral = 0;
        this.neutralMoral = 0;
        //attributes
        this.crown = 0;
        this.thirdEye = 0;
        this.throat = 0;
        this.heart = 0;
        this.solar = 0;
        this.sacral = 0;
        this.root = 0;
        //damage
        this.physATK = 10 + this.currentLvl;
        this.magATK = 10 + this.currentLvl;
        this.critChance = 1;
        this.critMult = 1.5;
        //defenses
        this.physDef = 10 + this.currentLvl;
        this.magDef = 10 + this.currentLvl;
        this.evasion = 1;
        this.blockChance = 1;
        //speed and movement
        this.speed = 10 + this.currentLvl;
        //resistances
        this.holyDef = 0.15;
        this.darkDef = 0.15;
        this.airDef = 0.15;
        this.fireDef = 0.15;
        this.waterDef = 0.15;
        this.earthDef = 0.15;
        this.chaosDef = 0.15;
        this.charBody = new characterBlock(64, 64, 33, 33);
    }
}