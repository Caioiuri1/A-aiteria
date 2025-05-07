
let btnMenu = document.getElementById('btn-menu')
let Menu = document.getElementById('menu')
let x = document.getElementById('fechar')

btnMenu.addEventListener('click', () => {
    Menu.classList.add('abrir')
})

x.addEventListener('click', () => {
    Menu.classList.remove('abrir')
})

let compras = document.getElementById('finalizar-compras')
let mn = document.getElementById('box-compras')
let fechar = document.getElementById('concluir')
let f = document.getElementById('fechar')

compras.addEventListener('click', () => {
    mn.classList.add('fim')
})

mn.addEventListener('click', () => {
    mn.classList.remove('fim')
})

f.addEventListener('click', () => {
    mn.classList.remove('fim')
})

document.querySelectorAll('.contador-just').forEach(contador => {
    const value = contador.querySelector('.value');
    const plusButton = contador.querySelector('.plus');
    const minusButton = contador.querySelector('.minus');

    let count = 0;
    let intervalId = null;

    const updateValue = () => {
        value.textContent = count;
    };

    plusButton.addEventListener('mousedown', () => {
        intervalId = setInterval(() => {
            count++;
            updateValue();
        }, 100);
    });

    minusButton.addEventListener('mousedown', () => {
        intervalId = setInterval(() => {
            count--;
            updateValue();
        }, 100);
    });

    document.addEventListener('mouseup', () => clearInterval(intervalId));
    document.addEventListener('mouseleave', () => clearInterval(intervalId));
});

let poteSelecionado = "";

document.querySelectorAll(".ex-potes button").forEach(btn => {
    btn.addEventListener("click", () => {
        poteSelecionado = btn.innerText.trim();

        document.querySelectorAll(".ex-potes button").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
    });
});

document.querySelectorAll(".plus").forEach(btn => {
    btn.addEventListener("click", () => {
        let span = btn.parentElement.querySelector(".value");
        span.innerText = parseInt(span.innerText) + 1;
    });
});

document.querySelectorAll(".minus").forEach(btn => {
    btn.addEventListener("click", () => {
        let span = btn.parentElement.querySelector(".value");
        let current = parseInt(span.innerText);
        if (current > 0) span.innerText = current - 1;
    });
});

function enviarWhats(event) {
    event.preventDefault();

    if (!poteSelecionado) {
        alert("Por favor, selecione o tamanho do pote.");
        return;
    }

    let mensagem = `🍧 *Pedido de Açaí* 🍧\n\n*Tamanho:* ${poteSelecionado}\n\n*Complementos:*`;

    let complementos = document.querySelectorAll(".value");
    complementos.forEach(el => {
        let qtd = parseInt(el.innerText);
        if (qtd > 0) {
            mensagem += `\n- ${el.id.replace(/-/g, " ")}: ${qtd}`;
        }
    });

    let numeroWhatsApp = "558791174227";
    let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

document.querySelector("#finalizar-compras button").addEventListener("click", enviarWhats);
