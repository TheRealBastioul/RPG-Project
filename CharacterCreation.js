function CharacterCreation(name, currentLevel){
        this.name = name;
        this.currentLevel = currentLevel;
        var xpGainLevel;
        var currentXP;
        var xpFromEnemy;
        this.name = name;
        this.currentLevel = Level;
        calcLevel();
        function openCharacterWindow(){
        
        }
        function calcLevel(){
        maxSpirit = 2 * currentLevel;
        maxEnergy = 2 * currentLevel;
        maxHp = (5 * currentLevel) + 50;
        magAtk = currentLevel;
        magDef = currentLevel;
        physAtk = currentLevel;
        charSpeed = currentLevel;
        chakraPoints = currentLevel * 3;
        moralityPoints = currentLevel;
        xpGainLevel = currentLevel * 200;
        currentHP = maxHp;
        
        }
        function gainLevel(){
        currentLevel++;
        maxEnergy += 2;
        maxSpirit += 2;
        maxHp += 6;
        currentHP = maxHp;
        magAtk++;
        physAtk++;
        magDef++;
        physDef++;
        charSpeed++;
        chakraPoints += 3;
        moralityPoints++;
        xpGainLevel = currentLevel * 200;
        currentXP = 0;
        }
        function gainXp(xpGained){
        currentXP += xpGained;
        var leftOverXP;
        var levelsGained = 0;
        while (currentXP > xpGainLevel){
            leftOverXP = currentXP - xpGainLevel;
            gainLevel();
            levelsGained++;
            currentXP = leftOverXP;
        }
        return levelsGained;
        }
        //allocation Points
        var chakraPoints;
        var moralityPoints;
        // Morality
        var goodMoral;
        var neutralMoral;
        var badMoral;
        //attributes
        var crownChakra;
        function calcCrown(){
        
        }
        var thirdEyeChakra;
        function calcThird(){
        
        }
        var throatChakra;
        function calcThroat(){
        
        }
        var heartChakra;
        function calcHeart(){
        
        }
        var solarPlexusChakra;
        function calcSolar(){
        
        }
        var sacralChakra;
        function calcSacral(){
        
        }
        var rootChakra;
        function calcRoot(){
        
        }
        //basic stats
        //refill bars
        var maxHp;
        var currentHP;
        function checkHP(){
        if (currentHP < 1){
            console.log("Character " + name + " has died.");
        }
        }
        var maxEnergy;
        var currentEnergy;
        var maxSpirit;
        var currentSpirit;
        //damage + modifiers
        var physAtk;
        var magAtk;
        var critChance = 0.01;
        var critMult =  1.5;
        //defence + modifiers
        var magDef;
        var physDef;
        var blockChance = 0.01;
        var evasion = 0.01;
        //resistances
        var holyDef = 0.1;
        var darkDef = 0.1;
        var fireDef = 0.1;
        var airDef = 0.1;
        var earthDef = 0.1;
        var waterDef = 0.1;
        var chaosDef = 0.1;
        //speed and movement
        var charSpeed = 15;
        var movement = charSpeed/5;
        //basic actions
        function attack(baseDmg , name){
        document.getElementById("attack").innerHTML = name + " has taken " + baseDmg + " damage.";
        name.currentHP -= baseDmg;
        name.checkHP();
    }
    
}
const Bast = new CharacterCreation("Bast", 5);
const Enemy = new CharacterCreation("enemy", 5);
Bast.attack(100, Enemy);