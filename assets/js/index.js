const kachel=document.getElementById("inhalt");
const listen=document.getElementById("listen");
listen.remove();
let button1=document.getElementById("button");
let button2=document.createElement("button");
button2.append(document.createTextNode("kachelansicht"));
button1.addEventListener("click", function() {
   kachel.replaceWith(listen);
    button1.replaceWith(button2);
});
button2.addEventListener("click", function() {
    listen.replaceWith(kachel);
     button2.replaceWith(button1);
 });



