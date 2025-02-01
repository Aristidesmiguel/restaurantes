const navbar = document.getElementById('navbar_router')


const router = [
    {
        nome: 'Contabilidade',
        push: '../../pages/gerenciamento_de_restaurante/index.html'
    },
    {
        nome: 'Cadastro de produto',
        push: '../../pages/gerenciamento_de_restaurante/cadastroDeProduto.html'
    }
]

const navigate = () => {
    router.forEach(rotas => {
        const a = document.createElement('a')
        a.textContent = rotas.nome
        a.setAttribute('href', rotas.push)
        navbar.append(a)
    })
}

navigate()

