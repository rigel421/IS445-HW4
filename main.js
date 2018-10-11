
function loadText(){
    // create XHR Object
    var xhr = new XMLHttpRequest();
    // OPEN - type, url/filename , async(true or false)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);


    xhr.onload = function(){
        if(this.status == 200){
            //turns JSON file into a JS object
            var myArr = JSON.parse(this.responseText);
            //create array to store the emails from JSON file
            var emails = [];
            //for loop goes through array object and pushes the email key value
            //to the email array
            for(i = 0;i<myArr.length;i++){
                emails.push(myArr[i].email);
            }
            //default sort emails in alphabetical order
            emails.sort();
            document.getElementById("first").innerHTML = "User emails from XMLHttpRequest:" + "\n" + emails;
        }
    }
   xhr.send();
}

fetch('https://jsonplaceholder.typicode.com/users')
    //turns fetch response into a json response
    .then((resp)=> resp.json())
    //this then block uses the same for loop as the XML request but is modified to pull the username
    .then(data => { 
        var users = [];
        for(i = 0;i<data.length;i++){
            users.push(data[i].username);
            //sorts the array by string length in ascending order
            users.sort(function(a,b){
                return a.length - b.length;
              });
        }
        document.getElementById("second").innerHTML = "User Usernames from Fetch:" + "\n" + users;
    })