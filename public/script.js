let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let a = document.getElementsByClassName("theme");

for (let index = 0; index < a.length; index++) {
  const element = a[index];
  element.addEventListener("click", function () {
    data = this.dataset.theme;
    setTheme(data);
    console.log(data);
  });
}

function setTheme(data) {
  if (data === "light") {
    document.getElementById("theme-style").href = "";
  }

  if (data === "blue") {
    document.getElementById("theme-style").href = "./blue.css";
  }

  if (data === "purple") {
    document.getElementById("theme-style").href = "./purple.css";
  }

  if (data === "green") {
    document.getElementById("theme-style").href = "./green.css";
  }

  localStorage.setItem("theme", data);
}
