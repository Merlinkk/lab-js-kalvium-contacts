// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data
// Progression 2: Display the fetched data in the form of list
// Progression 3: When the promise call is rejected then throw an error
let player = '';
let call = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json(); 
    }).then(data => {
        console.log(data)
        return data
    }).then((data)=>{
        var player='';
        data.forEach(function(user) {
        player+=`<div class="player">
                <div class="strength">Name : ${user.name}</div>
                <div>Email   : ${user.email}</div>
                <div>Phone   : ${user.phone}</div>
                <div>Website : ${user.website}</div>
                <div>Company : ${user.company.name}</div>
                <div>City    : ${user.address.city}</div>
                <div>Zipcode : ${user.address.zipcode}</div>
                </div>`
        })
        document.getElementById('btnGet').addEventListener('click',()=>{
            document.getElementById('userContainer').innerHTML += player
        })
    })
    .catch(error => {
        console.log('Promise rejected.');
        console.log(error.message);
    });

