
const inputTarefa = document.getElementById ("nova-tarefa");

function adicionarTarefa () {
    const item = document.createElement("li");
    
    item.innerHTML = `<li>
        <span>${inputTarefa.value}</span>
        <button class="botaozinho">x</button>
     </li>`;

  const lista = document.querySelector("#lista");
  lista.appendChild(item);

    inputTarefa.value = ""
}

const botao = document.querySelector ("#btn-Adicionar")
botao.addEventListener ("click", adicionarTarefa)

adicionarTarefa ()
