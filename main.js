let wrapper = document.querySelector(".wrapper");
let button = document.querySelector("button");

async function rendre() {
  try {
    let response = await fetch(
      "https://6825adbb0f0188d7e72df09a.mockapi.io/users/users"
    );
    let data = await response.json();
    data.map((user) => {
      let div = document.createElement("div");
      let buttonDelete = document.createElement("button");
      buttonDelete.textContent = "delete";
      buttonDelete.classList = "button1";
      div.innerHTML = `
      <p>${user.id}</p>
                <p>${user.firstName}</p>
                <p>${user.adress}</p>
                <p>${user.fullName}</p>
            `;
      div.append(buttonDelete);
      buttonDelete.addEventListener("click", () => {
        deleteFunct(user.id);
      });
      wrapper.appendChild(div);
    });
  } catch (error) {
    console.log(error);
  }
}

rendre();
button.addEventListener("click", () => {
  location.href = "./add.html";
});
function deleteFunct(id) {
  fetch(`https://6825adbb0f0188d7e72df09a.mockapi.io/users/users/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok === true) {
        const notyf = new Notyf({
          duration: 3000,
          ripple: true,
          position: { x: "right", y: "top" },
        });
        notyf.success("user successFully delete");
      } else {
        const notyf = new Notyf({
          duration: 3000,
          ripple: true,
          position: { x: "right", y: "top" },
        });
        notyf.error("user have not beed deleted");
      }
    })
    .catch((error) => console.log(error));
}
