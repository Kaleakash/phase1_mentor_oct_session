function info() {
    //alert("Event generate");
    // document.write("Welcome to JavaScript")
    // window.document.write("Welcome to JS");
    // alert("Welcome");
    // window.alert("Welcome once again");
    // read the value of text field using id attribute 

    // var fname = document.getElementById("n1").value;
    // var lname = document.getElementById("n2").value;
    // var fullname  = fname+" "+lname;
    // document.getElementById("n3").value=fullname;
    // document.getElementById("output").innerHTML=fullname;
    // document.getElementById("n1").value="";
    // document.getElementById("n2").value="";
    //alert("Your name is "+fullname);

    // read the value of text field using name attribut 
    var h2TagValue = document.getElementsByTagName("h2")[0].innerHTML;
    var fname = document.getElementsByName("user")[0].value;
    var lname = document.getElementsByName("user")[1].value;
    var fullname  = fname +" "+lname;
    document.getElementsByName("fullname")[0].value=fullname;
    alert(h2TagValue);

}
//info();