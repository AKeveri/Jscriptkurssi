
function omaFunktio() {

    var p = new Date()
    var paiva = p.getDay()
    var vuosi = p.getFullYear()
    var kk = p.getMonth()
    alert("You clicked me! " + paiva + "/" + (kk + 1) + "/" + vuosi);
}

var nappi = document.getElementsByTagName('button')[0];
nappi.addEventListener('click', omaFunktio);


function showTable() {
    var html = document.write(`
    <table id="example" class="display" cellspacing="0" width="100%">
    <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tfoot>
        </tfoot>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>$320,800</td>
            </tr>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>$170,750</td>
            </tr>
            <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>$86,000</td>
            </tr>
            <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>$433,060</td>
            </tr>
            <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>$162,700</td>
            </tr>

        </tbody>
    </table>
        `);
}

var nappi2 = document.getElementsByTagName('button')[1];
nappi2.addEventListener('click', showTable);

function myTable() {

    var persons = ["Nyssa P. Skinner", "593-4241 Lacus, St.", "Cape Verde",
        "Camilla F. Strickland", "391-2150 Ac Rd.", "Andorra",
        "Reagan U. Andrews", "P.O. Box 472, 2271 Mauris Ave", "Faroe Islands",
        "Kelsey D. Clark", "P.O. Box 866, 7793 Aliquet Ave", "Bulgaria"
    ];

    document.write('<table border="1"><tr>');

    for (var i = 0; i < persons.length; i++) {

        if (i % 3 == 0) {
            document.write("</tr><tr>");
        }
        document.write("<td>" + persons[i] + "</td>");

    }
    document.write("</table>");
}
var nappi3 = document.getElementsByTagName('button')[2];
nappi3.addEventListener('click', myTable);


function mouseOver() {
    console.log("Setepped over my a mouse!")
}
var mouseover = document.getElementsByTagName('h2')[1];
mouseover.addEventListener('mouseover', mouseOver);

function mouseOut() {
    alert("Bye bye mouse!");
}
var mouseout = document.getElementsByTagName('h2')[1];
mouseout.addEventListener('mouseout', mouseOut);

function textiLuukku() {
    textdata.value = "Please fill in the form with proper data.";
    textdata.style.backgroundColor = "yellow";
}
var luukku = document.getElementById('textdata');
luukku.addEventListener('focus', textiLuukku);

