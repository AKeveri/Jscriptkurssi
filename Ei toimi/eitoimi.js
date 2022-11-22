// Poisto napin teko ja lisäys jokaiseen kohtaan. 
var kauppaLista = document.getElementsByTagName("LI");
var i;
for (i = 0; i < kauppaLista.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    kauppaLista[i].appendChild(span);
}

// Klikkaa ruksia poistaaksesi tuotteen
var close = document.getElementsByClassName("close");
var i;
localStorage.removeItem("kauppaLista", document.getElementsByClassName("close"));
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }

}

// Lisää merkkauksen jo löydetylle/otetulle tuotteelle
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Lisätää tavaraa listaan ja localStroageen. näyttää vähän huonolta mutta ei voi mitään....
function uusiTuote() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Et lisännyt mitään, lisää jotain kauppalistaan kirjoittamlalla ruutuun.");
    } else {
        document.getElementById("lisTa").appendChild(li);
        localStorage.setItem("kauppaLista", document.getElementById("lisTa").innerText);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }


}

