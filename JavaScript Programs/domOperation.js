function addData() {
    //alert("Event generated...")
    var pTag = document.createElement("p"); // p tag object ready
    var pTagContent = document.createTextNode("Welcome"); // content is ready 

    pTag.appendChild(pTagContent);    // <p>Welcome </p>
    
    
    document.getElementsByTagName("div")[0].appendChild(pTag);
}