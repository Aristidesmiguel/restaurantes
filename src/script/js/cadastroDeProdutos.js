const nomeProduto = document.getElementById('nomeProduto');
const quantidade = document.getElementById('quantidade');
const precoVenda = document.getElementById('precoVenda');


const start = () => {
    if (nomeProduto.value === "") {
        alert('error');
    } else {
        const produts = objectProduts(nomeProduto.value, quantidade.value, precoVenda.value);
        console.log('eu executei');
    }
    console.log('sim');
}

const objectProduts = (nomeProduto, quantidade, precoVenda) => {
    return {
        nome_produto: String(nomeProduto),
        produto_quatidade: Number(quantidade),
        produto_preco: Number(precoVenda)
    };
}

btn.addEventListener('click', () => start())