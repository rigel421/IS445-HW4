
function loadText(){
    // create XHR Object
    var xhr = new XMLHttpRequest();
    // OPEN - type, url/filename , async(true or false)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);


    xhr.onload = function(){
        if(this.status == 200){
            var myArr = JSON.parse(this.responseText);
            //console.log(Object.keys(myArr));
            ///document.getElementById("first").innerHTML = myArr;
            var emails = [];
            for(i = 0;i<myArr.length;i++){
                emails.push(myArr[i].email);
            }
            emails.sort();
            document.getElementById("first").innerHTML = "User emails from XMLHttpRequest:" + "\n" + emails;
        }
    }
   xhr.send();
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp)=> resp.json())
    .then(data => {
        var users = [];
        for(i = 0;i<data.length;i++){
            users.push(data[i].username);
            users.sort(function(a,b){
                return a.length - b.length; //ASC, For Descending order use: b - a
              });
        }
        document.getElementById("second").innerHTML = "User Usernames from Fetch:" + "\n" + users;
    })