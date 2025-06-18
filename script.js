function enviarWhats(event) {
            event.preventDefault()

            const nome = document.getElementById("nome");
            const mensagem = document.getElementById("mensagem");
            const telefone = '5515997573575'

            const texto = `Olá, Me chamo ${nome}, ${mensagem}`
            const msgformatada = encodeURIComponent(texto)

            const url = `https://whatsa.me/${telefone}?text=${msgformatada}`

            window.open(url, '_blank')

        }