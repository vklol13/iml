function addPost() {
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    if (title && content) {
        const postContainer = document.getElementById('postContainer');

        // Criar um novo elemento de postagem
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;

        // Adicionar a postagem ao contêiner
        postContainer.prepend(post);

        // Limpar o formulário
        document.getElementById('postForm').reset();
    } else {
        alert('Por favor, preencha todos os campos antes de publicar.');
    }
}
