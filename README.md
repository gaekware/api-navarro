# API com MVC - Arquitetura De Software E Desenvolvimento Full Stack

Esta é uma API simples em TypeScript com um único endpoint para registrar dispositivos IoT e seus dispositivos de rede associados.

## Endpoint da API

### POST `/api/iot/register`

Registra um dispositivo IoT junto com seus dispositivos de rede detectados.

#### Corpo da Requisição

```json
{
    "deviceId": "esp-unimar-401",
    "devices":[
        {
            "mac":"D8:0D:17:F4:51:C6",
            "type":"wifi",
            "rssi":-59,
            "name":"WiFi Device"
        },
        {
            "mac":"DE:0D:17:F4:51:C6",
            "type":"wifi",
            "rssi":-58,
            "name":"WiFi Device"
        }
    ]
}
```

#### Respostas

- `201 Created`: Registro do dispositivo bem-sucedido
- `400 Bad Request`: Corpo da requisição inválido
- `500 Internal Server Error`: Erro no servidor

## Começando

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- PostgreSQL (local ou via Docker)
- Docker (opcional, se usar o script fornecido)

### Instalação

1. Clone o repositório
2. Configure suas variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais de banco de dados e outras configurações.

3. Instale as dependências:

```bash
npm install
```

### Configuração do Banco de Dados

Você pode usar o setup com Docker ou seu PostgreSQL local:

#### Opção 1: Usando Docker (recomendado)

```bash
chmod +x start_db.sh  # Torne o script executável se necessário
./start_db.sh
```

#### Opção 2: Usando PostgreSQL Local

Certifique-se de ter o PostgreSQL rodando localmente e atualize o arquivo `.env` com suas credenciais locais.

### Executando a Aplicação

1. Construa o projeto:

```bash
npm run build
```

2. Inicie o servidor:

```bash
node dist/index.js
```

A API estará disponível em `http://localhost:3000` por padrão (a porta pode ser alterada no `.env`).

## Desenvolvimento

Para desenvolvimento com recarregamento automático:

```bash
npm run dev
```

## Licença

[MIT](LICENSE)