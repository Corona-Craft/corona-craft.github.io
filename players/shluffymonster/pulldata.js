function load(){
		fetch("data.json")
		.then(response => response.json())
		.then(data => {
    for (i = 0; i < data.length; i++) {
    //Make adding JSON data easier
    var bio = data[i].bio;
    //Construct Additiom
    var addition = "<p><b>About Me:</b><br>"+bio+"</p>";
    //Add addition
    document.getElementById("jeb").innerHTML += addition;
    }
  });
  }
