let form = document.querySelector("form")
let button = document.querySelector("button")
let name = document.querySelector(".name")
let harita = document.querySelector(".location")
let surname = document.querySelector(".surname")


async function postUser(name, adress, surname ) {
   
    fetch("https://6825adbb0f0188d7e72df09a.mockapi.io/users/users", 
            {method: "Post",
            headers:{
                "Content-type": "application/json",},
                body: JSON.stringify({
                    adress:name,
                    firstName: adress,
                    fullName: surname,
                })
            })
            .then((response) => response.json())
            .then((data) =>{
                let notyf = new Notyf({
                    duration: 3000,
                    ripple: true,
                    position: { x: "right", y: top},
                })
                notyf.success("user successFully addedd");
            })
            .catch((error) => {
                const notyf = new Notyf({
                    duration: 3000,
                    ripple: true,
                    position: {
                      x: "right",
                      y: "top",
                    },
                  });
                  notyf.error("User has not been created");
          
            })
    }
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        postUser(name.value, harita.value,surname.value)
        name.value = ""
        harita.value =""
        surname.value = ""
    })
