document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('entregaForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const quantidade = document.getElementById('quantidade').value;
        const tipoEntrega = document.getElementById('tipoEntrega').value;
        const dataEntrega = document.getElementById('dataEntrega').value;

        // Exibindo os dados no console (aqui você poderia enviar para o backend)
        console.log('Quantidade de entregas:', quantidade);
        console.log('Tipo de entrega:', tipoEntrega);
        console.log('Data da entrega:', dataEntrega);

        // Limpando o formulário para novos dados
        form.reset();
    });
});
