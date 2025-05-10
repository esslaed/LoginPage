document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from refreshing

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `
    <p><strong>Username/Email:</strong> ${username}</p>
    <p><strong>Password:</strong> ${password}</p>
  `;
});
