# Design System - RecFacil

> **Escopo:** documentação somente dos elementos de UI que aparecem nas telas do protótipo. Componentes existentes no projeto, mas não utilizados nas telas, não foram incluídos. Também foi utilizado como base a [Documentaçã do Tailwind](https://tailwindcss.com/) e os [Ícones Lucide](https://lucide.dev/) com o intuito de utilizar tal ferramenta.

## 1. Identidade visual

### Cores

| Função            | Aplicação nas telas                                      | Valor                       |
| ------------------- | ---------------------------------------------------------- | --------------------------- |
| Gradiente principal | Logo, Buscar, Salvar, Ver perfil completo, enviar mensagem | `blue-600 → purple-600`  |
| Fundo geral         | Áreas principais                                          | `#ffffff`                 |
| Fundo secundário   | Área de resultados e formulário de perfil                | `gray-50`                 |
| Texto principal     | Títulos e informações principais                        | `gray-900`                |
| Texto secundário   | Descrições, subtítulos e metadados                      | `gray-500` / `gray-600` |
| Texto auxiliar      | Contadores e informações discretas                       | `gray-400`                |
| Borda               | Cards, inputs, separadores                                 | `gray-200`                |
| Erro                | Validação do formulário                                 | `red-600`                 |
| Atenção           | Alterações não salvas                                   | `amber-600`               |
| Sucesso             | Salvamento concluído                                      | `emerald-600`             |

### Tipografia

- **Família principal:** Inter.
- **Pesos utilizados:** 400, 500, 600, 700 e 800.
- **Títulos principais:** `font-bold`, aproximadamente 18-24 px.
- **Títulos de seção:** `font-semibold`, aproximadamente 16-18 px.
- **Texto de interface:** 14-16 px.
- **Texto auxiliar:** 12-14 px.
- **Line-height:** confortável, com destaque para conteúdos de perfil/chunks usando `leading-relaxed` ou `leading-7`.

## 2. Espaçamento e dimensões

A interface utiliza predominantemente a escala de espaçamento do Tailwind:

- `gap-1` / `gap-2`: elementos muito próximos, ícone + texto e controles.
- `gap-3` / `gap-4`: agrupamentos de componentes.
- `gap-6`: separação entre blocos maiores.
- `p-2`, `p-3`, `p-4`, `p-5`, `p-6`: padding de controles, cards e seções.
- `mt-1`, `mt-2`, `mt-3`, `mt-4`: hierarquia vertical entre textos e componentes.
- `space-y-4` / `space-y-5` / `space-y-6`: organização de conteúdo em coluna.

## 3. Bordas, raios e elevação

- **Raio padrão:** `rounded-md` para controles.
- **Raio de destaque:** `rounded-lg` e `rounded-xl` para cards, blocos e ações.
- **Pílulas:** `rounded-full` para indicadores de match e sugestões.
- **Bordas:** `border-gray-200` e `border-gray-100`.
- **Elevação:** `shadow-sm` para cards e respostas; `shadow-md` na lista de resultados.
- **Separadores:** bordas de 1 px entre áreas.

## 4. Botões

### Primário

Usado em:

- Buscar
- Salvar
- Ver perfil completo
- Enviar pergunta

Características:

- Gradiente `blue-600 → purple-600`.
- Texto claro.
- Ícone + texto quando há espaço.
- `rounded-lg` em ações destacadas.
- Hover com tons mais escuros.
- Estado desabilitado com opacidade reduzida.

### Secundário / outline

Usado em:

- Entrar com Google
- Voltar
- Meu Perfil
- Sair
- Sugestões de perguntas

Características:

- Fundo branco/transparente.
- Borda `gray-200`.
- Texto escuro/cinza.
- Hover com `gray-50` ou destaque azul, conforme o contexto.

### Ghost

Usado principalmente em:

- Voltar no detalhe em telas menores.
- Controle de expandir/recolher o formulário de perguntas.

## 5. Campos de entrada

Os campos seguem um mesmo padrão visual:

- Borda `gray-200`/`input`.
- `rounded-md`.
- Fundo branco ou transparente.
- Padding horizontal aproximado de `10 px`.
- Texto de 14–16 px.
- Placeholder em cinza.
- Foco com borda/ring da cor primária.
- Estados desabilitados com opacidade reduzida.

### Campo de busca

O campo principal da Home possui:

- Ícone de pesquisa.
- Placeholder explicativo.
- Contador de caracteres.
- Largura máxima aproximada de `lg`.
- Maior altura em desktop.

### Campo de perguntas para IA

Possui:

- Ícone de bot.
- Placeholder contextual com o nome do profissional.
- Contador de caracteres.
- Botão de envio separado.

## 6. Cards

Os cards usados no protótipo compartilham:

- Fundo branco.
- Borda `gray-200`.
- `rounded-xl`.
- Padding entre `16 px` e `24 px`.
- `shadow-sm` quando necessário.

Aplicações:

- Benefícios da Home.
- Informações pessoais.
- Contato.
- Links profissionais.
- Resposta da IA.

## 7. Avatar

Tamanhos efetivamente usados:

- **Pequeno:** aproximadamente `24 px` em usos compactos.
- **Médio/padrão:** aproximadamente `32 px`.
- **Grande:** aproximadamente `40 px` na lista.
- **Perfil:** `64 px` e `128 px` na tela de perfil.

Fallback:

- Fundo `gray-200`.
- Texto `gray-500`.
- Iniciais do nome.
- No perfil principal, avatar maior recebe borda branca e sombra discreta.

## 8. Indicador de compatibilidade

O percentual de match é apresentado como uma pequena badge:

- `rounded-full`.
- Texto de tamanho pequeno.
- Peso `medium` ou `semibold`.
- Padding horizontal.
- Cor variável conforme o percentual de compatibilidade.

O mesmo padrão aparece na lista e no detalhe do profissional.

## 9. Cabeçalho

O Header é consistente entre as telas:

- Borda inferior `gray-200`.
- Padding responsivo horizontal.
- Logo à esquerda.
- Ações à direita.
- Layout flexível com quebra em telas menores.

### Logo

- Ícone em quadrado arredondado.
- `rounded-xl`.
- Gradiente azul → roxo.
- Ícone claro.
- Texto **RecFacil** em `font-bold`.

## 10. Lista de resultados

A lista utiliza:

- Fundo branco.
- Divisórias horizontais `gray-100`.
- Avatar.
- Nome em `font-semibold`.
- Cargo em `gray-500`.
- Localização com ícone de mapa.
- Badge de compatibilidade.
- Chevron indicando navegação.
- Hover em azul muito claro.
- Item selecionado com fundo `indigo-50` e borda lateral `indigo-500`.

## 11. Detalhe do profissional

A área de detalhe apresenta:

- Avatar de 64 px.
- Nome em destaque.
- Cargo abaixo do nome.
- Localização.
- Badge de match.
- Botão **Ver perfil completo**.
- Bloco **Chunk mais relevante** com fundo `gray-100` e `rounded-xl`.

Quando nenhum profissional está selecionado:

- Ícone de bot dentro de um bloco `rounded-2xl`.
- Título centralizado.
- Texto explicativo em `gray-500`.

## 12. Formulário de perfil

A tela de perfil utiliza:

- Fundo geral `gray-50`.
- Card branco centralizado.
- `rounded-xl`.
- `border-gray-200`.
- `shadow-sm`.
- Grid responsivo de duas colunas em desktop.
- Campos com ícones.
- Estados de validação.

Mensagens de estado:

- **Erro:** ícone + texto `red-600`.
- **Alterações não salvas:** ícone + texto `amber-600`.
- **Salvo com sucesso:** ícone + texto `emerald-600`.

## 13. Links profissionais

Os links aparecem como linhas clicáveis:

- Borda `gray-200`.
- `rounded-lg`.
- Padding aproximado de `10–12 px`.
- Ícone à esquerda.
- Seta externa à direita.
- Hover com fundo `gray-50`.

## 14. Responsividade

O protótipo aplica breakpoints principalmente para:

- `sm`: adaptação de header, textos e lista/detalhe.
- `md`: aumento dos campos, organização em duas colunas e dimensões maiores.
- `lg`: aumento da largura disponível e organização do conteúdo.

No mobile:

- Ações do header podem exibir somente ícones.
- Lista e detalhe de resultados alternam entre si.
- O botão de voltar aparece no detalhe.
- Formulários passam para uma coluna.

## 15. Princípios de consistência observados

1. **Inter** como fonte principal.
2. Azul/roxo como identidade para ações e elementos de destaque.
3. Cinzas para estrutura, textos secundários e estados neutros.
4. `rounded-xl` para containers de maior importância.
5. `rounded-md` para inputs e controles convencionais.
6. `rounded-full` para badges e sugestões.
7. Bordas claras e sombras discretas.
8. Ícones lineares acompanhando ações e campos.
9. Estados de erro, atenção e sucesso representados por cor + ícone + texto.
10. Mesmos padrões visuais reaproveitados entre Home, resultados, detalhes, chat e perfil.
