---

# E-commerce Inteligente

Este projeto é uma plataforma de e-commerce inteligente com funcionalidades avançadas, como recomendações personalizadas e chatbots. O backend foi desenvolvido usando Spring Boot e o frontend foi desenvolvido usando React.

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

- **Backend**: Desenvolvido com Spring Boot, utilizando JPA para persistência de dados e JWT para autenticação.
- **Frontend**: Desenvolvido com React, utilizando Axios para chamadas de API e React Router para navegação.

## Funcionalidades

- **Autenticação de Usuário**: Registro e login de usuários com segurança JWT.
- **Recomendações Personalizadas**: Sugestões de produtos com base no histórico de navegação e compras do usuário.
- **Chatbots**: Assistência automatizada para ajudar os usuários a encontrar produtos e resolver dúvidas.
- **Integração com APIs de Pagamento e Entrega**: Suporte para várias opções de pagamento e métodos de entrega.

## Tecnologias Utilizadas

### Backend

- Java 17
- Spring Boot 3
- Spring Data JPA
- JWT (JSON Web Tokens)
- MySQL
- Maven

### Frontend

- React
- Axios
- React Router DOM
- Node.js
- npm

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- JDK 17+
- Node.js 14+
- npm 6+
- MySQL

### Configurando o Backend

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/ecommerce-desafio.git
```

2. Navegue até o diretório do backend:

```bash
cd ecommerce-desafio
```

3. Configure o banco de dados MySQL. Crie um banco de dados chamado `ecommerce` e atualize as configurações no arquivo `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce
spring.datasource.username=seu-usuario
spring.datasource.password=sua-senha
spring.jpa.hibernate.ddl-auto=update
jwt.secret=your_jwt_secret_key
jwt.expiration=86400000
```

4. Compile e execute o backend:

```bash
mvn clean install
mvn spring-boot:run
```

O backend estará disponível em `http://localhost:8080`.

### Configurando o Frontend

1. Navegue até o diretório do frontend:

```bash
cd ecommerce-frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

O frontend estará disponível em `http://localhost:3000`.

## Uso

### Endpoints do Backend

- **Autenticação**:
  - `POST /api/auth/register`: Registro de usuário
  - `POST /api/auth/login`: Login de usuário

- **Produtos**:
  - `GET /api/products`: Lista de produtos
  - `GET /api/products/{id}`: Detalhes do produto

- **Pedidos**:
  - `POST /api/orders`: Criação de pedido
  - `GET /api/orders/{id}`: Detalhes do pedido

### Navegação no Frontend

- **Página Principal**: `http://localhost:3000`
- **Login**: `http://localhost:3000/login`
- **Registro**: `http://localhost:3000/register`
- **Detalhes do Produto**: `http://localhost:3000/products/{id}`
- **Carrinho de Compras**: `http://localhost:3000/cart`
- **Checkout**: `http://localhost:3000/checkout`

## Contribuição

1. Faça um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`)
3. Faça o commit das suas alterações (`git commit -m 'Adicionando nova funcionalidade'`)
4. Faça o push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---
