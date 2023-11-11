# PocketPay-Angular

> ⚠️ Esse repositório faz parte do projeto PocketPay, e contém apenas a interface gráfica (_frontend_). Acesse o _backend_ [aqui](https://github.com/kauan-SCCP/PocketPay-WebAPI).  

## O que é o PocketPay?

PocketPay é uma plataforma digital de transferências bancárias, onde comerciantes e compradores podem transferir e receber dinheiro. É baseado no [desafio picpay](https://github.com/PicPay/picpay-desafio-backend), com algumas adições.

### Autores e Créditos

- [Kauan Alexandre Mendes da Silva](https://www.linkedin.com/in/mendeskauan)
- [João Pedro de Oliveira](https://www.linkedin.com/in/jo%C3%A3o-pedro-de-oliveira-62a0b11b8/)
- [Caio Henrique Porcel](https://www.linkedin.com/in/caio-henrique-porcel-702340243/)
- [Vinicius Rebelatto](https://www.linkedin.com/in/vinicius-rebelatto-07001a232/)


### Configurando o Projeto para rodar local

Com o [projeto da WebAPI](https://github.com/kauan-SCCP/PocketPay-WebAPI) na sua máquina, rode os seguintes comandos:

```shell
cd pocketpay
dotnet build
cp Database /bin/Debug/net7.0
```

Depois, inicie a API com:

```shell
cd /bin/Debug/net7.0
./pocketpay.exe
```

### Licença

Esse projeto está sobre a [GNU GPLv3](./LICENSE).
