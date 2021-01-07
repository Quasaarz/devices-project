const sendData = () => {
  let emailValue = document.querySelector("#email").value;
  let deviceValue = document.querySelector("#device").value;
  let addressValue = document.querySelector("#address").value;
  fetch("https://devices-65318-default-rtdb.firebaseio.com/value.json", {
    method: "POST",
    body: JSON.stringify({
      email: emailValue,
      deviceType: deviceValue,
      address: addressValue,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((data) => {
      console.log(data.json());
      document.querySelector("form").reset();
    })
    .catch((err) => console.log(err));
};

document.querySelector("#btn").addEventListener("click", () => sendData());
