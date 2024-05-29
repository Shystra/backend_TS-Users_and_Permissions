# Backend Clean Architecture Project

Este projeto implementa uma arquitetura limpa para gerenciar usuários e permissões. Ele consiste em várias camadas, cada uma com uma responsabilidade específica, para garantir uma base de código sustentável e escalável.

## Estrutura do Projeto

### Infraestrutura (Infra)
A camada de infraestrutura é a parte mais abstrata do projeto. Ela lida com a criação de usuários e permissões. Esta camada contém as implementações de baixo nível que interagem com o banco de dados ou outros serviços.

### Repositórios
Os repositórios contêm os tipos abstratos dos métodos usados para operações de dados. Eles definem as interfaces para as operações CRUD e são responsáveis por buscar, criar, atualizar e deletar dados.

### Casos de Uso (Use Cases)
A camada de casos de uso contém a lógica de negócios da aplicação. Ela coordena entre os repositórios e os controladores para executar as operações necessárias com base nas requisições dos usuários.

### Controladores (Controllers)
Os controladores são responsáveis por interceptar os dados das rotas. Eles recebem as requisições HTTP, passam os dados para os casos de uso e retornam as respostas apropriadas para o cliente.

## Endpoints da API

O projeto fornece os seguintes endpoints para gerenciar usuários e permissões:

### Usuários

- **Criar Usuário**
  - **Endpoint**: `/users`
  - **Método**: `POST`
  - **Descrição**: Cria um novo usuário.
  - **Corpo da Requisição**:
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string"
    }
    ```

- **Consultar Usuário**
  - **Endpoint**: `/users/{id}`
  - **Método**: `GET`
  - **Descrição**: Consulta um usuário pelo ID.

- **Atualizar Usuário**
  - **Endpoint**: `/users/{id}`
  - **Método**: `PUT`
  - **Descrição**: Atualiza as informações de um usuário.
  - **Corpo da Requisição**:
    ```json
    {
      "username": "string",
      "email": "string"
    }
    ```

- **Deletar Usuário**
  - **Endpoint**: `/users/{id}`
  - **Método**: `DELETE`
  - **Descrição**: Deleta um usuário pelo ID.

### Permissões

- **Criar Permissão**
  - **Endpoint**: `/permissions`
  - **Método**: `POST`
  - **Descrição**: Cria uma nova permissão.
  - **Corpo da Requisição**:
    ```json
    {
      "name": "string",
      "description": "string"
    }
    ```

- **Consultar Permissão**
  - **Endpoint**: `/permissions/{id}`
  - **Método**: `GET`
  - **Descrição**: Consulta uma permissão pelo ID.

- **Atualizar Permissão**
  - **Endpoint**: `/permissions/{id}`
  - **Método**: `PUT`
  - **Descrição**: Atualiza as informações de uma permissão.
  - **Corpo da Requisição**:
    ```json
    {
      "name": "string",
      "description": "string"
    }
    ```

- **Deletar Permissão**
  - **Endpoint**: `/permissions/{id}`
  - **Método**: `DELETE`
  - **Descrição**: Deleta uma permissão pelo ID.

## Como Executar o Projeto

1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>

2. Navegue até o diretório do projeto:
    ```sh
    cd nome-do-projeto

3. Instale as dependências:
    ```sh
    npm install

4. Inicie o servidor:
    ```sh
    npm start

5.Tecnologias Utilizadas
    Node.js
    Express
    TypeScript
    Outros...

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Esse README fornece uma visão geral do projeto, incluindo a estrutura, endpoints da API, instruções de execução e informações sobre contribuição e licença.
