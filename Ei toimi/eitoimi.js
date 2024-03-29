
//Silloin kun body latautuu se hakee finnkinon teatterit ja laittaa ne select listaan
function loadAreas() {
    //Send request
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://www.finnkino.fi/xml/TheatreAreas/", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //Save the response data in a  variable for easy processing
            var xmlDoc = xmlhttp.responseXML;
            //Use getElementsByTagName to dig out theatre names and Ids (it is in array)
            var theatreNames = xmlDoc.getElementsByTagName("Name");
            var theatreIDs = xmlDoc.getElementsByTagName("ID");

            //Loop through the whole array list
            for (var i = 0; i < theatreNames.length; i++) {
                //Gets the text from the XML files
                var theatreText = theatreNames[i].innerHTML;
                var theatreID = theatreIDs[i].innerHTML;

                //Creates new option for the select list and makes it's value theatreID(from xml file)
                document.getElementById("teatTerit").innerHTML += '<option value = ' + theatreID + '>' + theatreText + '</option>';
            }
        }
    }
}

/* Kun käyttäjä valitsee teatterin ni se kutsuu tätä funktiota
   joka hakee finnkinon sivuilta kyseisen teatterin elokuva aikataulun */
function loadSchedule() {

    //Empty the list so it won't print new data on top of existing data
    document.getElementById("lista").innerHTML = "";
    //document.getElementById("lista").innerHTML = "";
    //Gets the ID of the selected theatre/option
    var id = document.getElementById("teatTerit").value;
    //Send request, uses the ID of the theatre to get data specific to that theatre
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=" + id, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //Save the response data in a  variable for easy processing
            var xmlDoc = xmlhttp.responseXML;

            var titles = xmlDoc.getElementsByTagName("Title");
            var imageURLs = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
            var timeTable = xmlDoc.getElementsByTagName("dttmShowStart");
            var rating = xmlDoc.getElementsByTagName("RatingImageUrl");
            var contentDescriptors = xmlDoc.getElementsByTagName("ContentDescriptors");
            var duration = xmlDoc.getElementsByTagName("LengthInMinutes")
            for (var i = 0; i < titles.length; i++) {
                var imageURL = '<img class="images" src="' + imageURLs[i].innerHTML + '">';
                // Haetaan halutut asiat
                var title = titles[i].innerHTML;
                var xmlSchedule = timeTable[i].innerHTML;
                var ratingIMG = '<img src="' + rating[i].innerHTML + '">';
                var xmlDuration = duration[i].innerHTML;

                //parsitaan xml:stä vain tarvittavat aikataulutiedot
                var time = xmlSchedule.slice(11, 16);
                var date = xmlSchedule.slice(8, 10);
                var month = xmlSchedule.slice(5, 7);
                var year = xmlSchedule.slice(0, 4);

                //elokuvan varoitukset(niitä voi mahdollisesti olla monta joten käytetään looppia)
                var contentDescriptor = contentDescriptors[i].getElementsByTagName("ContentDescriptor");
                var descriptionImages = "";
                for (var j = 0; j < contentDescriptor.length; j++) {
                    descriptionImages += '<img src="' + contentDescriptor[j].getElementsByTagName("ImageURL")[0].innerHTML + '">';
                }

                document.getElementById("lista").innerHTML += '<tr><td>' + imageURL + '</td><td>' + title + '<br/>' + date + "." + month + "." + year + " " + time + '<br/>' + "Kesto: " + xmlDuration + " minuuttia <br/> <br/>" + ratingIMG + descriptionImages + '</td>';

            }
        }
    }
}
