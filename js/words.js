
$(document).ready(function() {
    $("#HIED").addClass("HIED-1");
    $("#house").addClass("house-1");
    $("#SM-business").addClass("SM-business-1");
    $("#ENT").addClass("ENT-1");
    $("#rocket0").addClass("rocket-1");
    $("#HIED").removeClass("HIED-1");
    $("#house").removeClass("house-1");
    $("#SM-business").removeClass("SM-business-1");
    $("#ENT").removeClass("ENT-1");
    $("#rocket0").removeClass("rocket-1");
    $("#mHide").addClass("blueP");
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#HIED").addClass("HIED-1");
        $("#house").addClass("house-1");
        $("#SM-business").addClass("SM-business-1");
        $("#ENT").addClass("ENT-1");
        $("#rocket0").addClass("rocket-1");
    }
});
var eqwords = [
"focus",
"strength",
"resilience",
"peace",
"love",
"humility",
"stupidity",
"wildness",
"hunger",
"thirst",
"imagine",
"the walrus",
"Bueller",
"bedlam",
"control",
"restraint",
"rhythm",
"ruby",
"rails",
"sushi",
"wasabi",
"MSG",
";]",
"grit",
"swagger",
"cunning",
"fight",
"flight",
"blood",
"sweat",
"tears",
"brains",
"brawn",
"cables",
"guts",
"muscle",
"coffee",
"carbs",
"bacon",
"tacos",
"bbq",
"fear",
"envy",
"bravery",
"courage",
"code",
"skills",
"tricks",
"magic",
"work",
"hustle",
"flow",
"mojo",
"verve",
"music",
"madness",
"beauty",
"order",
"chaos",
"moxie",
"chutzpah",
"fun",
"wonder",
":}",
"vision",
"voodoo",
"jujitsu",
"kungfu",
"tai chi",
"feng shui",
"art",
"music",
"math",
"design",
"science",
"patience",
"power",
"finesse",
"grace",
"agility",
"flexibility",
"balance",
"harmony",
"abandon",
"criticism",
"salsa",
"sriracha",
"caffeine",
"voltage",
"attitude",
"altitude",
"discipline",
"focus",
"strength",
"resilience",
"peace",
"love",
"humility",
"stupidity",
"wildness",
"hunger",
"thirst",
"imagine",
"the walrus",
"Bueller",
"bedlam",
"control",
"restraint",
"rhythm",
"ruby",
"rails",
"sushi",
"wasabi",
"MSG",
";]",
"grit",
"swagger",
"cunning",
"fight",
"flight",
];

// get a random index, get the value from array and
// change the div content
var i = 0;
setInterval(function() {
    //var i = Math.round((Math.random()) * eqwords.length);
    //if (i == eqwords.length) --i;
    if(i>=460){
        i= 460-i;
    }
    else{
        i++;
    }
    $("#eqword").html(eqwords[i]);
},200);
