/* Add your JavaScript to this file */

const email = document.getElementById('email')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
 if (email.nodeValue === ""){
     document.getElementById('message').innerHTML = 'Please enter an email'
 }


})