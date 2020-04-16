## baseScore

Tecnologias utilizadas:

* **Node.js**
* **MongoDB**
* **Mongoose**
* **Autenticação por JWT**

## Sobre

Contém dados para cálculo do **Score de Crédito**
* Idade
* Lista de bens (Imóveis, veículos)
* Fonte de renda

Devido a sensibilidade das informações, só é possível acessar as informações passando um **token de acesso**, fornecido pelo login no **webClient**

## Instalação

Partindo do ponto você esteja dentro do diretório **baseScore**, execute o comando abaixo para criar os containers e iniciar os serviços:
```
$ sudo docker-compose -f docker/docker-compose.yml up -d --build
```

Ao iniciar os serviços, será criado dois containers:

1. **webScore**: onde é executado a parte web do serviço dependências
2. **dbScore**: Banco de dados utilizado para fornecer os dados para o **webScore**.

Pode verificar os container criado com o comando:
```
$ sudo docker ps
```


Caso ocorra tudo certo, você pode digitar no seu navegador o seguinte endereço: **http://172.25.0.10:3003** 

A mensagem exibida será: **It's work with webScore!**