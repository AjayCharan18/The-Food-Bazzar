document.getElementById('reserveBtn').addEventListener('click',function(e){
    e.preventDefault();
    var form =document.getElementById('reservationform');
    if(form.style.display==='none' || form.style.display===''){
        form.style.display='block';
    }
    else{
        form.style.display='none';
    }
});
document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();
    alert('Reservation submitted');
});
function BookTable() {
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guest = document.getElementById('number').value;
    var contact = document.getElementById('contact').value;

    // Construct mailto URL with form data
    var mailtoUrl = 'mailto:akashsingh2210670@gmail.com'
        + '?subject=' + encodeURIComponent('Table Reservation Request')
        + '&body=' + encodeURIComponent(
            'Name: ' + name + '\n' +
            'Email: ' + email + '\n' +
            'Date: ' + date + '\n' +
            'Time: ' + time + '\n' +
            'Guests: ' + guest + '\n' +
            'Contact Number: ' + contact
        );

    // Open the user's default email client with the pre-filled email
    window.location.href = mailtoUrl;
}
