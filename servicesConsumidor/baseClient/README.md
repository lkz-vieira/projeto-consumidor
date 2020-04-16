## baseClient

Tecnologias utilizadas:

* **Node.js**
* **MySQL**
* **Knex.js**
* **Autenticação por JWT**

## Sobre

Serviço mais importante, onde fornece os dados essenciais dos consumidores:
* CPF
* Nome
* Endereço

Esses dados são a base para o funcionamento dos outros serviços.

Devido a sensibilidade das informações, só é possível acessar as mesma fazendo um login. Logo após a API fornece um token para autenticar nos outros serviços. 

## Instalação

Partindo do ponto você esteja dentro do diretório **baseClient**, execute o comando abaixo para criar os containers e iniciar os serviços:
```
$ sudo docker-compose -f docker/docker-compose.yml up -d --build
```

Ao iniciar os serviços, será criado dois containers:

1. **webClient**: onde é executado a parte web do serviço dependências
2. **dbClient**: Banco de dados utilizado para fornecer os dados para o **webClient**.

Pode verificar os container criado com o comando:
```
$ sudo docker ps
```


Caso ocorra tudo certo, você pode digitar no seu navegador o seguinte endereço: **http://172.25.0.2:3000** 

A mensagem exibida será: **It's work with webClient!**