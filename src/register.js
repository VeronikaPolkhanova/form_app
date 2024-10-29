const register = (formData) => {
  fetch("http://localhost:9090/api/registration ", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success || data.status === "success") {
        document.getElementById("contactForm").reset();
        alert(data.message);
      }
      if (data.success || data.status === "error") {
        alert("Error: " + data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    });
};

export default register;
