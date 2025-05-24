import axios from 'axios';

const API_URL = 'http://localhost:5000/api/iot/register';

function gerarMacAleatorio() {
    return 'XX:XX:XX:XX:XX:XX'.replace(/X/g, function() {
        return '0123456789ABCDEF'.charAt(Math.floor(Math.random() * 16));
    });
}

function gerarListaDeMacs(quantidade: number) {
    return Array.from({ length: quantidade }, gerarMacAleatorio);
}

async function enviarMacsPeriodicamente() {
    setInterval(async () => {
        const macs = gerarListaDeMacs(5);
        try {
            const response = await axios.post(API_URL, { macList: macs, deviceId: '1' }, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-gaek-token': 'segredo',
                }
            });
            console.log('Resposta do servidor:', response.data);
        } catch (error: any) {
            console.error('Erro ao enviar MACs:', error.message);
        }
    }, 5000);
}

enviarMacsPeriodicamente();