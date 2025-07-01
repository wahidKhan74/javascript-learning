 
 // The $ in jQuery is just a shorthand alias for the jQuery function.
 $(document).ready(function (){
    console.log("Reday ...");

    $('#loadUser').click(function() {
        console.log("Click ...");

        $('#userDetails').html("loading .....");

        // load data from api
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users/2', // API url
            method: 'GET',
            async: true,
            success: function(data) {
                $('#userDetails').html(`
                   
                    <p><strong>Name : </strong> ${data.name}</p>
                    <p><strong>Username : </strong> ${data.username}</p>
                    <p><strong>Email : </strong> ${data.email}</p>
                    <p><strong>Phone : </strong> ${data.phone}</p>
                    <p><strong>Website : </strong> ${data.website}</p>
                    <p><strong>Address : </strong> ${data.address.suite} , ${data.address.street} , ${data.address.city}</p>
                    
                `);
            },
            error: function(xhr, status, error) {
                $('#userDetails').html(`<p style="color:red;"> Error : ${error}</p>`);
            }
        });

    }); // click

 }); // ready