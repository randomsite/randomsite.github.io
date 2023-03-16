var links = [
    {text: "Home", link: "/"}, 
    {text: "Credits", link: "/credits.html"}, 
    {text: "Python Programs", link: "/python/"}, 
    {text: "Miscellaneous", link: "/misc/"},
    {text: "Randomsite Chat System", link: "/chat/"},
    {text: "Tournaments", link: "/tournaments/"}]

function genHeader() {
    var header = document.getElementById("header");
    for(var i = 0; i < links.length; i++) {
        header.innerHTML += "<a href='" + links[i].link + "'>"+ links[i].text +"</a>"
        if(i+1 < links.length){
            header.innerHTML += " | "
        }
    }
    header.innerHTML += "<hr>"
}
     