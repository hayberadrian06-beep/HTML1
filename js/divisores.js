document.getElementById('divisorForm').addEventListener('submit',

    function (event) {
        event.preventDefault();
        const numero1 = parseInt(document.getElementById('numero1').value);
        const numero2 = parseInt(document.getElementById('numero2').value);
        const divisoresList = document.getElementById('divisoresList');
        const divisoresList2 = document.getElementById('divisoresList2');
        divisoresList.innerHTML = '';
        divisoresList2.innerHTML = '';

        for (let i = 1; i <= numero1; i++) {
            if (numero1 % i === 0) {
                const li = document.createElement('li');
                li.textContent = i;
                divisoresList.appendChild(li);
            }
        }

        for (let i = 1; i <= numero2; i++) {
            if (numero2 % i === 0) {
                const li = document.createElement('li');
                li.textContent = i;
                divisoresList2.appendChild(li);
            }
        }
    });