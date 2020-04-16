## servicesConsumidor

São divido em três serviços:

* **baseClient**
* **baseScore**
* **baseTracking**

Cada serviço tem como estrutura de pasta:

* **web**: onde são processado os dados para o consumo via HTTP
* **database**: onde são armazenado os dados
* **docker**: onde fica o arquivo de configuração para subir o container

Para o funcionamento pleno do Projeto, recomenda-se que os três serviços estejam executando ao mesmo tempo, pois existem comunicação entre os mesmo.
