## baseTracking

Tecnologias utilizadas:

* **Node.js**
* **MongoDB**
* **Redis**

## Sobre

Tem como principal funcionalidade, rastrear eventos relacionados a um determinado CPF
* Última consulta do CPF em um Bureau de crédito
* Movimentação financeira nesse CPF.
* Dados relacionados a última compra com cartao de crédito vinculado ao CPF

Não é necessário nenhuma autenticação para consumir os dados, porém é preciso informar qual o CPF que deseja consultar.

## Instalação

Partindo do ponto você esteja dentro do diretório **baseTracking**, execute o comando abaixo para criar os containers e iniciar os serviços:
```
$ sudo docker-compose -f docker/docker-compose.yml up -d --build
```

Ao iniciar os serviços, será criado dois containers:

1. **webTracking**: Onde é executado a parte web do serviço dependências
2. **dbTracking**: Banco de dados utilizado para fornecer os dados para o **webTracking**.
3. **redisTracking**: Serviço de Caching implementado para respostas mais rapidas as requisões.

Pode verificar os container criado com o comando:
```
$ sudo docker ps
```

Caso ocorra tudo certo, você pode digitar no seu navegador o seguinte endereço: **http://172.25.0.9:3004** 

A mensagem exibida será: **It's work with webTracking!**