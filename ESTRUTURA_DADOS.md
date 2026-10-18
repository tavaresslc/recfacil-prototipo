# Estrutura de dados

## 1. Coleção `users`

**Finalidade:**
Armazena os dados básicos dos usuários da plataforma, incluindo informações de autenticação e controle de acesso.

### Estrutura dos documentos
| Campo          |  Tipo   |           Finalidade            | Obrigatório |
| -------------- | ------  | ------------------------------- | ----------- |
|  `_id`         | String  | Identificador único do usuário  | Sim         |
|  `name`        | String  | Nome do usuário                 | Sim         |
|  `email`       | String  | E-mail para identificação/login | Sim         |
|  `admin`       | Boolean | Indica se possui privilégios    | Sim         |
|  `created_at`  |  Date   | Data de criação do usuário      | Sim         |
|  `updated_at`  |  Date   | Data da última atualização      | Sim         |

### Exemplo
```json
{ 
    "_id": "user-001",
    "name": "Usuário Teste",
    "email": "user@email.com",
    "admin": false,
    "created_at": "2026-12-01T14:30:00Z",
    "updated_at": "2026-12-01T14:30:00Z"
}

```
---

## 2. Coleção `professionals`

**Finalidade:**
Armazena informações profissionais utilizadas pelos recrutadores durante a busca e análise dos profissionais.

### Estrutura dos documentos
| Campo          |  Tipo         |           Finalidade                 | Obrigatório |
| -------------- | ------------- | -------------------------------      | ----------- |
|  `_id`         | String        | Identificador único do profissional  | Sim         |
|  `user_id`     | String        | Referência ao proprietário do perfil | Sim         |
|  `title`       | String        | Cargo ou título do profissional      | Sim         |
|  `city`        | String        | Cidade onde o profissional reside    | Sim         |
|  `state`       | String        | Estado onde o profissional reside    | Sim         |
|  `phone`       | String        | Telefone para contato                | Não         |
|  `image`       | String        | URL da imagem do perfil              | Não         |
|  `linkedin`    | String        | URL do LinkedIn do profissional      | Não         |
|  `website`     | String        | URL do Website do profissional       | Não         |
|  `chunks`      | Object Array  | Lista de blocos de informação        | Sim         |
|  `created_at`  | Date          | Data de criação do profissional      | Sim         |
|  `updated_at`  | Date          | Data da última atualização           | Sim         |



### Estrutura do objeto `chunks`

### Estrutura dos documentos
| Campo          |  Tipo         |           Finalidade                 | Obrigatório |
| -------------- | ------------- | ------------------------------------ | ----------- |
|  `_id`         | String        | Identificador único do bloco         | Sim         |
|  `content`     | String        | Texto do bloco                       | Sim         |
|  `embedding`   | Number Array  | Vetor semântico do bloco             | Sim         |
|  `created_at`  | Date          | Data de criação do bloco             | Sim         |
|  `updated_at`  | Date          | Data da última atualização           | Sim         |


### Exemplo
```json
{ 
    "_id": "professional-001",
    "user_id": "user-001",
    "title": "Desenvolvedor Full Stack",
    "city": "Belo Horizonte",
    "state": "MG",
    "phone": "31912345678",
    "image": "https://imagem.com.br/professional-001",
    "linkedin": "https://linkedin.com/professional-001",
    "website": "https://professional.dev",
    "chunks": [
        {
            "_id": "chunk-001",
            "content": "Experiêcia com banco de dados relacionais...",
            "embedding": [0.12, -0.52, 0.41, -0.3],
            "created_at": "2026-12-01T14:30:00Z",
            "updated_at": "2026-12-01T14:30:00Z"
        },
        {
            "_id": "chunk-002",
            "content": "Experiêcia com APIs Rest...",
            "embedding": [0.18, -0.12, 0.31, -0.7],
            "created_at": "2026-12-01T14:30:00Z",
            "updated_at": "2026-12-01T14:30:00Z"
        }
    ],
    "created_at": "2026-12-01T14:30:00Z",
    "updated_at": "2026-12-01T14:30:00Z"
}

```
---

## 3. Relações entre os dados
No modelo original, existem duas relações:
* `users`  →  `professionals`: **1 para 0..1**
* `professionals`  →  `chunks`: **1 para 1..n**

No MongoDB, elas podem ser representadas da seguinte forma:

### Usuário → Profissional
O documento de `professionals` **mantém uma referência** para o usuário através do campo `user_id`:

```json
{ 
    "_id": "professional-001",
    "user_id": "user-001"
}
```
Essa abordagem é adequada porque os dados de autenticação e os dados profissionais possuem finalidades diferentes. Assim, o usuário pode existir independentemente do perfil profissional.

### Profissional → Chunks
Os `chunks` podem ser **embutidos diretamente no documento de `professionals`**:

```json
{ 
    "_id": "professional-001",
    "user_id": "user-001",
    "chunks": [
        {
            "_id": "chunk-001",
            "content": "Experiêcia com banco de dados relacionais...",
            "embedding": [0.12, -0.52, 0.41, -0.3],
            "created_at": "2026-12-01T14:30:00Z",
            "updated_at": "2026-12-01T14:30:00Z"
        },
        {
            "_id": "chunk-002",
            "content": "Experiêcia com APIs Rest...",
            "embedding": [0.18, -0.12, 0.31, -0.7],
            "created_at": "2026-12-01T14:30:00Z",
            "updated_at": "2026-12-01T14:30:00Z"
        }
    ]
}
```
A escolha por documentos embutidos é adequada porque os chunks pertencem exclusivamente ao profissional e são utilizados em conjunto com as suas informações para realizar a busca semântica. Isso também evita consultas adicionais para recuperar os dados associados ao perfil.

**Assim, a estrutura MongoDB mantém a relação `users`  →  `professionals` por referência e transforma `professionals`  →  `chunks` em uma estrutura aninhada**, aproveitando o modelo de documentos do MongoDB e mantendo juntos os dados utilizados na busca semântica.