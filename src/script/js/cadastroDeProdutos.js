import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import db from "../database/firebase.js";

const nomeProduto = document.getElementById('nomeProduto');
const quantidade = document.getElementById('quantidade');
const precoVenda = document.getElementById('precoVenda');

const btn = document.getElementById('btn');


/**
 * Adiciona um novo produto à coleção "produtos" no Firestore.
 *
 * @async
 * @function addProduct
 * @returns {Promise<void>} - Retorna uma Promise que resolve quando o produto for cadastrado.
 * @throws {Error} - Lança um erro caso ocorra uma falha ao adicionar o produto.
 *
 * @example
 * // Chamada da função para adicionar um produto
 * addProduct();
 */
export async function addProduct() {
    btn.textContent = "Cadastrando...";
    try {
        await addDoc(collection(db, "produtos"), {
            nome_produto: String(nomeProduto.value),
            produto_quatidade: Number(quantidade.value),
            produto_preco: Number(precoVenda.value)
        });
        console.log("Produto cadastrado com sucesso!");
    } catch (error) {
        console.error("Erro ao adicionar:", error);
    } finally {
        btn.textContent = "Cadastrar";
    }
}



/**
 * Busca todos os produtos da coleção "produtos" no Firestore e os exibe no console.
 *
 * @async
 * @function getProduct
 * @returns {Promise<void>} - Retorna uma Promise que resolve quando os dados forem recuperados.
 * @throws {Error} - Lança um erro caso ocorra uma falha na recuperação dos dados.
 *
 * @example
 * // Chamada da função para obter e exibir os produtos no console
 * getProduct();
 */
async function getProduct() {
    try {
        const querySnapshot = await getDocs(collection(db, "produtos"));

        if (querySnapshot.empty) {
            console.log("Nenhum produto encontrado.");
            return;
        }

        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }
}



btn.addEventListener('click', () => addProduct())