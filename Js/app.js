
      

      const forma = document.querySelector("#formulario");
      console.log(forma);

      forma.addEventListener("submit", mostrarConsola);

      function mostrarConsola(e) {
        e.preventDefault();
        const usuario = document.querySelector("#usuario").value;
        const pass = document.querySelector("#pass").value;
        console.log(usuario, pass);
      }
      window.addEventListener("scroll", function () {
        let navArea = document.getElementById("navArea");

        if (window.pageYOffset > 0) {
          navArea.classList.add("is-sticky");
        } else {
          navArea.classList.remove("is-sticky");
        }
      });
    