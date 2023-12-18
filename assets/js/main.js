let hum = document.getElementById("hum");
let menu = document.getElementById("menu");
let closeBtn = document.getElementById("close");

hum.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.classList.add("flex");

  setTimeout(() => {
    menu.classList.remove("translate-x-full");
  }, 300);
});

// Close the menu

document.querySelectorAll("section")[0].addEventListener("click", () => {
  menu.classList.add("translate-x-full");
  setTimeout(() => {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
  }, 500);
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("translate-x-full");
  setTimeout(() => {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
  }, 500);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (window.location.pathname == "/destination.html") {
  fetch("./assets/js/data.json")
    .then((Response) => Response.json())
    .then((data) => showinfo(data));
  function showinfo(data) {
    let li = document.querySelectorAll("section li");
    let image = document.getElementById("planetImage");
    let jsondestinations = data.destinations;

    li.forEach((e) => {
      e.addEventListener("click", () => {
        li.forEach((e) => {
          e.classList.remove("active");
        });

        e.classList.add("active");

        if (e.classList.contains("active")) {
          for (let i = 0; i < jsondestinations.length; i++) {
            if (
              jsondestinations[i].name.toUpperCase() ===
              e.textContent.toUpperCase()
            ) {
              document.getElementById("name").style.opacity = 0;
              document.getElementById("description").style.opacity = 0;
              document.getElementById("distance").style.opacity = 0;
              document.getElementById("travel").style.opacity = 0;
              setTimeout(() => {
                document.getElementById("name").textContent =
                  jsondestinations[i].name;

                image.src = jsondestinations[i].images.png;

                document.getElementById("description").textContent =
                  jsondestinations[i].description;

                document.getElementById("distance").textContent =
                  jsondestinations[i].distance;

                document.getElementById("travel").textContent =
                  jsondestinations[i].travel;
                document.getElementById("name").style.opacity = 1;
                document.getElementById("description").style.opacity = 1;
                document.getElementById("distance").style.opacity = 1;
                document.getElementById("travel").style.opacity = 1;
              }, 500);
            }
          }
        }
      });
    });
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (window.location.pathname == "/crew.html") {
  fetch("./assets/js/data.json")
    .then((Response) => Response.json())
    .then((data) => showinfo(data));
  function showinfo(data) {
    let jsoncrew = data.crew;

    // declare html items
    let dots = document.querySelectorAll(".dots span");
    let image = document.getElementById("crewImage");
    let name = document.getElementById("name");
    let Info = document.getElementById("Info");
    let role = document.getElementById("role");

    dots.forEach((e, k) => {
      e.addEventListener("click", () => {
        dots.forEach((e) => {
          e.classList.remove("active");
        });
        e.classList.add("active");

        if (e.classList.contains("active")) {
          for (let i = 0; i < jsoncrew.length; i++) {
            if (i === k) {
              name.style.opacity = 0;
              image.style.opacity = 0;
              role.style.opacity = 0;
              Info.style.opacity = 0;
              setTimeout(() => {
                name.textContent = jsoncrew[i].name;

                image.src = jsoncrew[i].images.png;

                role.textContent = jsoncrew[i].role;

                Info.textContent = jsoncrew[i].bio;
                if (i == 0) {
                  image.classList.add("tablet:max-w-[315px]");
                  image.classList.remove(
                    "tablet:max-w-[270px]",
                    "tablet:max-w-[320px]",
                    "tablet:max-w-[380px]"
                  );
                } else if (i == 1) {
                  image.classList.add("tablet:max-w-[270px]");
                  image.classList.remove(
                    "tablet:max-w-[315px]",
                    "tablet:max-w-[320px]",
                    "tablet:max-w-[380px]"
                  );
                } else if (i == 2) {
                  image.classList.add("tablet:max-w-[320px]");
                  image.classList.remove(
                    "tablet:max-w-[270px]",
                    "tablet:max-w-[315px]",
                    "tablet:max-w-[380px]"
                  );
                } else {
                  image.classList.add("tablet:max-w-[380px]");
                  image.classList.remove(
                    "tablet:max-w-[270px]",
                    "tablet:max-w-[320px]",
                    "tablet:max-w-[315px]"
                  );
                }

                name.style.opacity = 1;
                image.style.opacity = 1;
                role.style.opacity = 0.5;
                Info.style.opacity = 1;
              }, 500);
            }
          }
        }
      });
    });
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (window.location.pathname == "/technology.html") {
  fetch("./assets/js/data.json")
    .then((Response) => Response.json())
    .then((data) => showinfo(data));
  function showinfo(data) {
    let jsoncrew = data.technology;

    const circles = document.querySelectorAll(".circles span");
    const image = document.getElementById("image");
    const vehicle = document.getElementById("vehicle");
    const descrip = document.getElementById("descrip");

    if (window.innerWidth >= 469 && window.innerWidth < 1115) {
      image.src = jsoncrew[0].images.landscape;
    } else {
      image.src = jsoncrew[0].images.portrait;
    }

    circles.forEach((e, k) => {
      e.addEventListener("click", () => {
        circles.forEach((e) => {
          e.classList.remove("active");
        });
        e.classList.add("active");

        image.style.opacity = 0;
        vehicle.style.opacity = 0;
        descrip.style.opacity = 0;

        if (e.textContent == "1") {
          setTimeout(() => {
            if (window.innerWidth >= 469 && window.innerWidth < 1115) {
              image.src = jsoncrew[k].images.landscape;
            } else {
              image.src = jsoncrew[k].images.portrait;
            }
            vehicle.textContent = jsoncrew[k].name;
            descrip.textContent = jsoncrew[k].description;

            image.style.opacity = 1;
            vehicle.style.opacity = 1;
            descrip.style.opacity = 1;
          }, 500);
        } else if (e.textContent == "2") {
          setTimeout(() => {
            if (window.innerWidth >= 469 && window.innerWidth < 1115) {
              image.src = jsoncrew[k].images.landscape;
            } else {
              image.src = jsoncrew[k].images.portrait;
            }
            vehicle.textContent = jsoncrew[k].name;
            descrip.textContent = jsoncrew[k].description;

            image.style.opacity = 1;
            vehicle.style.opacity = 1;
            descrip.style.opacity = 1;
          }, 500);
        } else {
          setTimeout(() => {
            if (window.innerWidth >= 469 && window.innerWidth < 1115) {
              image.src = jsoncrew[k].images.landscape;
            } else {
              image.src = jsoncrew[k].images.portrait;
            }
            vehicle.textContent = jsoncrew[k].name;
            descrip.textContent = jsoncrew[k].description;

            image.style.opacity = 1;
            vehicle.style.opacity = 1;
            descrip.style.opacity = 1;
          }, 500);
        }
      });
    });
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
