function sprawdzanie() {
    var nie = "Puste";
    var nie2 = "Niepoprawne dane";
    var num1 =1
    var num2 =1
    
    var textBox1 = document.getElementById("TextBox1").value;
    var textBox2 = document.getElementById("TextBox2").value;    

if (textBox1 == "") {
    alert (nie);
    return;
}
if (textBox2 == "") {
    alert (nie);
    return;
}     

if (textBox2 == "cukinia") {
    var num2 = 16.7;
}    
else{
 if (textBox2 == "pomidor") {
    var num2 = 17.7;
}
else{
 if (textBox2 == "pieczarka") {
    var num2 = 22.2;
}
else{
 if (textBox2 == "cytryna") {
    var num2 = 28.9;
}  
else{
 if (textBox2 == "papryka") {
    var num2 = 30.8;
} 
else{
 if (textBox2 == "brokuł") {
    var num2 = 33.7;
}
else{
 if (textBox2 == "cebula") {
    var num2 = 39.7;
} 
else{
 if (textBox2 == "marchewka") {
    var num2 = 41.3;
}  
else{
 if (textBox2 == "brukselka") {
    var num2 = 42.8;
} 
else{
 if (textBox2 == "burak") {
    var num2 = 43;
} 
else{
 if (textBox2 == "ananas") {
    var num2 = 50;
} 
else{
 if (textBox2 == "jabłko") {
    var num2 = 52.1;
} 
else{
 if (textBox2 == "kiwi") {
    var num2 = 60.9;
} 
else{
 if (textBox2 == "tofu") {
    var num2 = 76;
} 
else{
 if (textBox2 == "ziemniaki") {
    var num2 = 76.7;
} 
else{
 if (textBox2 == "banany") {
    var num2 = 88.7;
} 
else{
 if (textBox2 == "oliwki") {
    var num2 = 115;
} 
else{
 if (textBox2 == "jajko") {
    var num2 = 155.71;
} 
else{
 if (textBox2 == "łosoś") {
    var num2 = 205.8;
} 
else{
 if (textBox2 == "kurczak") {
    var num2 = 239;
} 
else{
 if (textBox2 == "wołowina") {
    var num2 = 250.5;
} 
else{
 if (textBox2 == "orzechy") {
    var num2 = 654.4;
} 
else{
    alert (nie2);
    return;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}  
}
}
}
}
}
}











if (textBox1 == "kebab"){
    var num1 = 195;
} 
    else {  
 if (textBox1 == "lody") {
    var num1 = 207.5;
 }
        else{
 if (textBox1 == "ser topiony") {
    var num1 = 215.1;
}
    else{
 if (textBox1 == "parówka") {
    var num1 = 229.9;
}
    else{
 if (textBox1 == "pizza") {
    var num1 = 266;
}
    else{
 if (textBox1 == "hamburger") {
    var num1 = 294.9;
}
    else{
 if (textBox1 == "frytki") {
    var num1 = 311.9;
}
    else{
 if (textBox1 == "zupka chińska") {
    var num1 = 343;
}
    else{
 if (textBox1 == "pączek") {
    var num1 = 415;
}
    else{
 if (textBox1 == "oreo") {
    var num1 = 507;
}
    else{
 if (textBox1 == "chipsy") {
    var num1 = 536.1;
}
    else{
 if (textBox1 == "czekolada") {
    var num1 = 545.6;
}
    else{
 if (textBox1 == "baton") {
    var num1 = 555.7;
}
    else{
 if (textBox1 == "margaryna") {
    var num1 = 716.8;
 }
    else{
    alert (nie2);
    return;


}
}
}
}
}
}
}
}
}
}
}
}
}
}

    var  wynik = "Musisz zjeść " + Math.round((num1 / num2)*100)/100 + " wybranego produktu";
    alert (wynik);
console.log("Hello world!");
}
function kalkulator1() {
   var num3 = document.getElementById("kalkulator1").value;
   var wynik1 = (num3 / 4186)*100/100; 
   document.getElementById('wynik1').innerHTML = "To " + wynik1 + " kcali";    
}
function kalkulator2() {
   var num4 = document.getElementById("kalkulator2").value;
   var wynik2 = (num4 * 4186)*100/100; 
   document.getElementById('wynik2').innerHTML = "To " + wynik2 + " J";    
}

