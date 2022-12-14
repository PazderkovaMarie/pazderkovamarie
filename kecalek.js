const hour = new Date().getHours(); 
let greeting;

if ((hour >= 7) && (hour < 18)) {
  greeting = "Proč mě budíš přes den?";
} 
else if ((hour >= 18) && (hour < 21)) {
  greeting = "Proč mě budíš? Už je večer?";
}
else {
  greeting = "Zaspal jsem na noční řádění, teď nemám čas se vykecávat." + "<br>" + "A ty mazej spát.";
}

document.getElementById("demo").innerHTML = greeting;

function start(){
    document.getElementById("kecalek").style.visibility = "visible";
    document.getElementById("start").style.display = "none";
}

function haju() {
    document.getElementById('myImage2').style.display="block";
    document.getElementById("myImage").style.display = "none";
    document.getElementById("demo").innerHTML = "Tak čau.";
    document.getElementById("prvni").style.display = "none";
    document.getElementById("opakovani").style.display = "block";
    document.getElementById("opakovani").innerHTML = "Jestli to chceš zkusit znovu, obnov stránku.";
}

function pokec() {
    document.getElementById("prvni").style.display = "none";
    document.getElementById("druhy").style.display = "block";
    document.getElementById('myImage').src='Kecalek/05.jpg';
    document.getElementById("demo").innerHTML = "A lísteček máš?";
}

function nemam() {
    document.getElementById('myImage2').style.display="block";
    document.getElementById("myImage").style.display = "none";
    document.getElementById("demo").innerHTML = "Tak čau.";
    document.getElementById("prvni").style.display = "none";
    document.getElementById("druhy").style.display = "none";
    document.getElementById("opakovani").style.display = "block";
    document.getElementById("opakovani").innerHTML = "Jestli to chceš zkusit znovu, obnov stránku.";
}

function mam() {
    document.getElementById("druhy").style.display = "none";
    document.getElementById("treti").style.display = "block";
    document.getElementById('myImage').src='Kecalek/04.jpg';
    document.getElementById("demo").innerHTML = "A dáš mi ho?";
}

function nedam() {
    document.getElementById('myImage2').style.display="block";
    document.getElementById("myImage").style.display = "none";
    document.getElementById("demo").innerHTML = "Tak čau.";
    document.getElementById("prvni").style.display = "none";
    document.getElementById("druhy").style.display = "none";
    document.getElementById("treti").style.display = "none";
    document.getElementById("opakovani").style.display = "block";
    document.getElementById("opakovani").innerHTML = "Jestli to chceš zkusit znovu, obnov stránku.";
}

function dam() {
    document.getElementById("prvni").style.display = "none";
    document.getElementById("druhy").style.display = "none";
    document.getElementById("treti").style.display = "block";
    document.getElementById("myImage2").src='Kecalek/011.jpg';
    document.getElementById("myImage2").style.display = "block";
    document.getElementById("myImage").style.display = "none";
    document.getElementById("demo").innerHTML = "Čmajz!";
    document.getElementById("dam").style.display = "none";
    document.getElementById("nedam").style.display = "none";
    document.getElementById("opakovani").innerHTML = "S plnou pusou se nemluví, takže povídat si s tebou nebudu. A hledět mi do hlodáčků, když si šmakuju, taky nemusíš. Jdi si po svých." 
    document.getElementById("opakovani").style.display = "block";
}

if (new Date().getHours() >= 21) {
    document.getElementById("spat").innerHTML = "Tak utíkej řádit.";
}