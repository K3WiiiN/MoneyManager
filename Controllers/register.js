const axios = require('axios/dist/browser/axios.cjs'); // browser
const axios = require('axios/dist/node/axios.cjs'); // node
function register(){
    let name = document.querySelector('#teljesnev');
    let email = document.querySelector('#email');
    let passwd = document.querySelector('#passwd');
    let confirm = document.querySelector('#passwdconf');
 
    if (name.value == "" || email.value == "" || passwd.value == "" || confirm.value == ""){
        alert('Nem adtál meg minden adatot!');    }
    else
    {
        if (passwd.value != confirm.value){
            alert('A megadott jelszavak nem egyeznek meg!'); 
        }
        else
        { 
            console.log(name.value,email.value,passwd.value)
            
            axios.get(`${serverUrl}/users/email/${email.value}`).then(res =>{
                if (res.data.length > 0){
                    alert('A megadott e-mail cím már regisztrálva van!'); 
                }
                else
                {
                    let newUser = {
                        name: name.value,
                        email: email.value,
                        passwd: passwd.value
                    }
                    axios.post(`${serverUrl}/users`, newUser).then(res =>{
                        alert('Sikeres regisztráció! Most már beléphetsz!');
                        document.location.href = 'index.html';
                    });
                }
            });
            
          
        }
    }
}

