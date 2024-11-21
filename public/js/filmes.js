document.getElementById('filmeForm').addEventListener('submit', function(event){
    event.preventDefault();

    // Obtenha os valores dos campos de input
    const nome = document.getElementById('nomeFilme').value;
    const descriçao = document.getElementById('descriçaoFilme').value;
    const genero = document.getElementById('generoFilme').value;

    fetch('/crud', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, descriçao, genero }) // Corrigido para "descriçao"
    })
    .then(response => {
        if (!response.ok) throw new Error('Erro ao cadastrar o filme');
        return response.json();
    })
    .then(data => {
        const filmeDiv = document.createElement('div');
        filmeDiv.className = 'filme';
        filmeDiv.innerHTML = `
            <h3>${data.nome}</h3>
            <p><strong>Descrição:</strong> ${data.descriçao}</p>
            <p><strong>Gênero:</strong> ${data.genero}</p>
        `;
        document.getElementById('filmesContainer').appendChild(filmeDiv);

        // Limpa os campos de input
        document.getElementById('nomeFilme').value = '';
        document.getElementById('descriçaoFilme').value = '';
        document.getElementById('generoFilme').value = '';
    })
    .catch(error => console.error(error));
});
