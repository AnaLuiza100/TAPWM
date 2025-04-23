const form = document.getElementById('pesquisaForm');
const chart = new Chart(document.getElementById('chart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['Ótimo', 'Bom', 'Regular', 'Péssimo'],
        datasets: [{
            label: 'Número de Respostas',
            data: [0, 0, 0, 0],
            backgroundColor: ['#4caf50', '#ff9800', '#ffc107', '#f44336'],
            borderColor: ['#388e3c', '#f57c00', '#ffb300', '#d32f2f'],
            borderWidth: 1
        }]
    },
    options: {
        scales: { y: { beginAtZero: true } }
    }
});

let idades = [];
let sexoContagem = { masculino: 0, feminino: 0, outros: 0 };
let opiniaoContagem = [0, 0, 0, 0]; 

form.addEventListener('submit', e => {
    e.preventDefault();

    const idade = +form.idade.value;
    const sexo = form.sexo.value;
    const opiniao = +form.opiniao.value;

    idades.push(idade);
    sexoContagem[sexo]++;
    opiniaoContagem[4 - opiniao]++;

    const media = (idades.reduce((a, b) => a + b, 0) / idades.length).toFixed(2);
    const maisVelha = Math.max(...idades);
    const maisNova = Math.min(...idades);
    const pessimo = opiniaoContagem[3];
    const otimoBom = opiniaoContagem[0] + opiniaoContagem[1];
    const porcentagem = ((otimoBom / idades.length) * 100).toFixed(2) + '%';

    document.getElementById('mediaIdade').textContent = media;
    document.getElementById('maisVelha').textContent = maisVelha;
    document.getElementById('maisNova').textContent = maisNova;
    document.getElementById('quantPessimo').textContent = pessimo;
    document.getElementById('porcentagem').textContent = porcentagem;
    document.getElementById('homens').textContent = sexoContagem.masculino;
    document.getElementById('mulheres').textContent = sexoContagem.feminino;
    document.getElementById('outros').textContent = sexoContagem.outros;

    chart.data.datasets[0].data = opiniaoContagem;
    chart.update();

    form.reset();
});
