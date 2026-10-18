## Estrutura de Dados

### 1. Coleção `users`

**Finalidade:**
Armazena os dados básicos dos usuários da plataforma, incluindo informações de autenticação e controle de acesso.

#### Estrutura dos documentos

| Campo        | Tipo    | Finalidade                                             | Obrigatório |
| ------------ | ------- | ------------------------------------------------------ | ----------- |
| `_id`        | String  | Identificador único do usuário                         | Sim         |
| `name`       | String  | Nome do usuário                                        | Sim         |
| `email`      | String  | E-mail utilizado para identificação/login              | Sim         |
| `admin`      | Boolean | Indica se o usuário possui privilégios administrativos | Sim         |
| `created_at` | Date    | Data de criação do cadastro                            | Não         |
| `updated_at` | Date    | Data da última atualização                             | Não         |

#### Exemplo

```json
{
  "_id": "user-001",
  "name": "Lucas Tavares",
  "email": "lucas@email.com",
  "admin": false,
  "created_at": "2026-10-01T14:30:00Z",
  "updated_at": "2026-10-01T14:30:00Z"
}
```

---

### 2. Coleção `professionals`

**Finalidade:**
Armazena as informações profissionais utilizadas pelos recrutadores durante a busca e análise dos profissionais.

#### Estrutura dos documentos

| Campo        | Tipo            | Finalidade                                                           | Obrigatório |
| ------------ | --------------- | -------------------------------------------------------------------- | ----------- |
| `_id`        | String          | Identificador único do profissional                                  | Sim         |
| `user_id`    | String          | Referência ao usuário proprietário do perfil                         | Sim         |
| `title`      | String          | Cargo ou título profissional                                         | Sim         |
| `city`       | String          | Cidade onde o profissional está localizado                           | Sim         |
| `state`      | String          | Estado do profissional                                               | Sim         |
| `phone`      | String          | Telefone para contato                                                | Não         |
| `img`        | String          | URL da imagem do perfil                                              | Não         |
| `linkedin`   | String          | URL do perfil no LinkedIn                                            | Não         |
| `website`    | String          | URL do site ou portfólio profissional                                | Não         |
| `chunks`     | Array de Object | Trechos das experiências e informações utilizadas na busca semântica | Não         |
| `created_at` | Date            | Data de criação do perfil                                            | Não         |
| `updated_at` | Date            | Data da última atualização                                           | Não         |

#### Estrutura do objeto `chunks`

| Campo        | Tipo            | Finalidade                                                      | Obrigatório |
| ------------ | --------------- | --------------------------------------------------------------- | ----------- |
| `_id`        | String          | Identificador do chunk                                          | Sim         |
| `content`    | String          | Texto referente a uma experiência ou informação do profissional | Sim         |
| `embedding`  | Array de Number | Representação vetorial do texto para busca semântica            | Sim         |
| `created_at` | Date            | Data de criação do chunk                                        | Não         |
| `updated_at` | Date            | Data da última atualização                                      | Não         |

#### Exemplo

```json
{
  "_id": "professional-001",
  "user_id": "user-001",
  "title": "Desenvolvedor Full Stack",
  "city": "Belo Horizonte",
  "state": "MG",
  "phone": "31999999999",
  "img": "https://exemplo.com/foto.jpg",
  "linkedin": "https://linkedin.com/in/exemplo",
  "website": "https://exemplo.com",
  "chunks": [
    {
      "_id": "chunk-001",
      "content": "Experiência com desenvolvimento de aplicações web utilizando React, TypeScript e Node.js.",
      "embedding": [0.12, -0.34, 0.56, 0.78],
      "created_at": "2026-10-01T14:30:00Z",
      "updated_at": "2026-10-01T14:30:00Z"
    },
    {
      "_id": "chunk-002",
      "content": "Experiência com bancos de dados relacionais e desenvolvimento de APIs REST.",
      "embedding": [0.23, -0.15, 0.67, 0.41],
      "created_at": "2026-10-01T14:30:00Z",
      "updated_at": "2026-10-01T14:30:00Z"
    }
  ],
  "created_at": "2026-10-01T14:30:00Z",
  "updated_at": "2026-10-01T14:30:00Z"
}
```

> **Observação:** os valores de `embedding` acima são apenas ilustrativos. Em uma implementação real, o vetor terá a quantidade de dimensões definida pelo modelo de embeddings utilizado.

---

## 3. Relações entre os dados

No modelo original, existem duas relações:

* `users` → `professionals`: **1 para 0..1**
* `professionals` → `chunks`: **1 para 1..N**

No MongoDB, elas podem ser representadas da seguinte forma:

### Usuário → Profissional

O documento de `professionals` mantém uma referência para o usuário através do campo `user_id`:

```json
{
  "_id": "professional-001",
  "user_id": "user-001"
}
```

Essa abordagem é adequada porque os dados de autenticação e os dados profissionais possuem finalidades diferentes. Assim, o usuário pode existir independentemente do perfil profissional.

### Profissional → Chunks

Os `chunks` podem ser **embutidos diretamente no documento de `professionals`**:

```text
professionals
 └── professional-001
      ├── title
      ├── city
      ├── state
      └── chunks
           ├── chunk-001
           └── chunk-002
```

A escolha por documentos embutidos é adequada porque os chunks pertencem exclusivamente ao profissional e são utilizados em conjunto com suas informações para realizar a busca semântica. Isso também evita consultas adicionais para recuperar os dados associados ao perfil.

### Modelo final

```text
users
 ├── user-001
 |    ├── name
 |    ├── email
 |    └── admin
 └── user-002
      ├── name
      ├── email
      └── admin

professionals
 └── professional-001
      ├── user_id → users.user-002
      ├── title
      ├── city
      ├── state
      ├── linkedin
      ├── website
      └── chunks[]
           ├── content
           └── embedding
```

**Assim, a estrutura MongoDB mantém a relação `users → professionals` por referência e transforma `professionals → chunks` em uma estrutura aninhada**, aproveitando o modelo de documentos do MongoDB e mantendo juntos os dados utilizados na busca semântica.
