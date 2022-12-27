let name = document.getElementById("firstName")
let password= document.getElementById("password")
let mail = document.getElementById("mail")
let register = document.getElementById("register")

register.addEventListener('click', async (e) => {
    e.preventDefault();
    try {  
      const reqBody = {
        firstName: firstName.value,
        lastName: lastName.value,
        mail: mail.value,
        password: password.value,
      };
      const signupUrl = 'http://127.0.0.1:5500/auth/register';
      const options = {
        method: 'POST',
        body: JSON.stringify(reqBody),
        mode: 'cors',
       headers: {
      'Content-Type': 'application/json',
        },
      };
      console.log(reqBody)
      const response = await fetch( signupUrl, options);
      if (response.ok) {
          window.open("../login/login.html")
      } else {
          console.log('Registration error');
      }
    } catch (error) {
        console.log(error);
    } 
  })


