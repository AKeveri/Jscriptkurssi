
function getData() {
    var f = document.forms[0];
    var email = f.email.value;
    var comment = f.comment.value;

    alert("Your email: " + email);
    alert("Your comment: " + comment);
}