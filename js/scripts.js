// Empty JS for your own code to be here


        document.getElementById("modal-nivel").addEventListener("click", function() {
            const progressBar = document.getElementById("level1");
            progressBar.style.width = "25%"; // Define a largura para 25%
            progressBar.innerHTML = "25%"; // Exibe o texto dentro da barra de progresso
        });

        const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
