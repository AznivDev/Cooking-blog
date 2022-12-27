let firstName = document.getElementById("firstName")
let lastName= document.getElementById("lastName")
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
      const signupUrl = 'http://127.0.0.1:5500/auth/login';
      const options = {
        method: 'POST',
        body: JSON.stringify(reqBody),
        mode: 'cors',
        // credentials: "include",
       headers: {
      'Content-Type': 'application/json',
    //   'Access-Control-Allow-Credentials': true
        },
      };
      console.log(reqBody)
      const response = await fetch( signupUrl, options);
  
      if (response.ok) {
          const userData = await response.json();
          console.log(userData)
          localStorage.setItem('token', userData.token);
          localStorage.setItem('user', userData.user);
          // window.open("../todo/todo.html")
      } else {
          console.log('Registration error');
      }
    } catch (error) {
        console.log(error);
    } 
  })
