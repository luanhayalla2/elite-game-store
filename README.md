# Elite Game Store

PROJETO FULL STACK:  ELITE GAME STORE

Loja Gamer Profissional + Simulador de Compras# PROJETO FULL STACK: ELITE GAME STORE
## Loja Gamer Profissional + Simulador de Compras 

### 1. PAPEL E OBJETIVO

Atue como uma equipe multidisciplinar composta por:

- Designer UI/UX sênior especializado em e-commerce e interfaces gamer.
- Desenvolvedor front-end especialista em HTML5, CSS3 e JavaScript.
- Desenvolvedor back-end especialista em Node.js, Express e APIs REST.
- Especialista em responsividade, acessibilidade, testes e documentação.
- Arquiteto de software focado em projetos didáticos, simples e organizados.

Sua missão é criar uma aplicação web completa chamada EQUIPAGEME ELITE GAME STORE, combinando uma interface visual profissional com um simulador de compras funcional e um back-end capaz de validar produtos, quantidades, preços e descontos.

O projeto corresponde ao Desafio 1 — Minha Loja: Simulador de Compras, do curso Técnico em Desenvolvimento de Sistemas do Trilhas.

A aplicação deverá ter aparência profissional, código organizado, funcionamento verificável e documentação suficiente para que o aluno compreenda e apresente o projeto.

Não crie somente um protótipo visual. Implemente as funcionalidades reais, execute os testes possíveis e informe claramente o que foi concluído.

---

### 2. IDENTIDADE DA MARCA

Nome oficial: ELITE GAME STORE.

O logotipo deverá apresentar o nome em exatamente um linhas:


ELITE GAME


Não repita a palavra GAME no nome completo.

Slogan: "Equipe-se para a vitória. Jogue em outro nível."

Segmento: acessórios gamer, periféricos e tecnologia.

Conceito: inovação, precisão, competitividade, confiança e experiência digital.

Símbolo sugerido: escudo gamer integrado a um controle de videogame ou a um símbolo de mira tecnológica.

O logotipo deverá ser legível em computadores e celulares. Utilize hierarquia tipográfica para destacar , dar ênfase visual a ELITE GAME e manter STORE como complemento.

### Paleta de cores

- Fundo principal: #0A0D18.
- Fundo dos cartões: #12182A.
- Azul principal: #2563EB.
- Ciano neon: #22D3EE.
- Roxo complementar: #8B5CF6.
- Texto principal: #F8FAFC.
- Texto secundário: #94A3B8.
- Bordas: #26324A.

Utilize tipografia moderna, espaços consistentes, sombras suaves, cantos arredondados e animações discretas.

Evite excesso de neon, efeitos pesados, elementos decorativos que prejudiquem a leitura e animações desnecessárias.

---

### 3. TECNOLOGIAS

#### Front-end
- HTML5 semântico.
- CSS3.
- JavaScript puro.
- Fetch API para comunicação com o servidor.
- Intl.NumberFormat para formatar valores em reais.

#### Back-end
- Node.js.
- Express.
- JavaScript.
- API REST.
- Validação de entradas.
- Tratamento padronizado de erros.

#### Banco de dados
MySQL como etapa opcional de expansão.

A aplicação básica deverá funcionar sem banco de dados, utilizando um catálogo inicial de produtos definido no servidor.

Não adicionar React, TypeScript, Tailwind ou ferramentas de compilação sem necessidade. A interface final deverá continuar compatível com os fundamentos de HTML, CSS e JavaScript ensinados no Trilhas.

---

### 4. ESTRUTURA VISUAL DO SITE

#### 4.1 Cabeçalho

Criar um cabeçalho moderno com:

- Logotipo em três linhas.
- Navegação para Início, Produtos, Como funciona e Sobre.
- Botão de destaque "Simular compra".
- Menu adaptável para celulares.
- Efeitos de foco e hover.
- Navegação acessível por teclado.

O botão de simulação deverá levar o usuário à seção correspondente ou iniciar a função solicitada.

#### 4.2 Seção principal — Hero

Título:

"Equipe-se para a vitória."

Subtítulo:

"Descubra acessórios gamer que combinam desempenho, precisão e estilo. Escolha seus produtos favoritos e experimente nossa simulação de compras."

Botões:
- "Explorar produtos".
- "Simular compra".

O primeiro deverá levar ao catálogo. O segundo deverá levar à área de simulação ou iniciar a simulação conforme o fluxo implementado.

Utilize uma composição visual de acessórios gamer com iluminação azul, ciano e roxa, sem prejudicar a legibilidade.

#### 4.3 Catálogo de produtos

Criar cartões modernos e responsivos para três produtos fictícios.

Produto 1:
- Nome: Headset Gamer Pulse.
- Descrição: Som imersivo e conforto para suas partidas.
- Preço: R$ 199,90.
- Identificador: headset-pulse.

Produto 2:
- Nome: Mouse Gamer Velocity.
- Descrição: Precisão e agilidade em cada movimento.
- Preço: R$ 129,90.
- Identificador: mouse-velocity.

Produto 3:
- Nome: Teclado Mecânico Phantom.
- Descrição: Desempenho e estilo para sua estação gamer.
- Preço: R$ 249,90.
- Identificador: teclado-phantom.

Cada cartão deverá apresentar:
- Imagem ilustrativa ou alternativa visual.
- Nome e descrição.
- Preço formatado em reais.
- Destaque visual discreto.
- Identificador estável do produto.
- Layout consistente e responsivo.

Os preços deverão vir do catálogo do servidor na versão integrada, evitando divergências entre o navegador e o back-end.

Se uma imagem falhar, apresentar uma alternativa visual sem quebrar o layout.

#### 4.4 Seção "Como funciona"

Apresentar três etapas:

1. Escolha os produtos.
2. Informe as quantidades.
3. Confira o subtotal, o desconto e o total.

Adicionar um aviso:

"Esta é uma simulação acadêmica. Nenhum pagamento real é realizado."

#### 4.5 Seção de simulação

Título:

"Pronto para subir de nível?"

Instruções:
- Clique em "Simular compra".
- Informe a quantidade desejada para cada produto.
- Digite zero para não comprar um item.
- Confira o resultado apresentado pelo navegador.

O botão deverá apresentar exatamente o texto "Simular compra".

A simulação deverá tratar quantidades zero, entradas inválidas, cancelamento e erros de comunicação.

Não implementar pagamentos reais, transações financeiras ou checkout desnecessário.

#### 4.6 Rodapé

Apresentar:
- Logotipo EQUIPAGEME ELITE GAME STORE em três linhas.
- Slogan.
- Links de navegação.
- Tecnologias utilizadas.
- Identificação acadêmica: "Projeto desenvolvido por Luã Hayalla Oliveira Silva".
- Curso: Técnico em Desenvolvimento de Sistemas — Trilhas.
- Trilha: Lógica de Programação com JavaScript.
- Desafio 1 — Minha Loja: Simulador de Compras.
- Ano: 2026.

---

### 5. SIMULADOR DE COMPRAS — REQUISITOS ACADÊMICOS

O projeto deverá preservar os conceitos obrigatórios do exercício do Trilhas.

Implementar uma função chamada simularCompra().

Na simulação acadêmica, utilizar explicitamente:

- prompt() para perguntar as quantidades.
- Number() para converter as respostas em números.
- alert() para apresentar o resultado.

O botão poderá utilizar onclick="simularCompra()", conforme apresentado em aula.

A versão integrada deverá continuar usando prompt(), Number() e alert(), enviando os dados válidos ao servidor com fetch() para que os cálculos oficiais sejam feitos no back-end.

#### Sequência de funcionamento

1. Consultar os produtos e preços.
2. Percorrer o catálogo.
3. Solicitar a quantidade de cada produto.
4. Converter cada resposta com Number().
5. Validar a entrada.
6. Enviar os identificadores e as quantidades ao back-end.
7. Receber o resultado calculado pelo servidor.
8. Apresentar os itens, os subtotais, o desconto e o total com alert().

#### Validação

- Aceitar apenas números inteiros maiores ou iguais a zero.
- Permitir zero para não selecionar um produto.
- Repetir a pergunta quando a entrada estiver vazia, for textual, negativa ou decimal.
- Evitar cálculos com NaN.
- Se o usuário cancelar um prompt, interromper a operação e informar que ela foi cancelada.
- Se todas as quantidades forem zero, informar que nenhum produto foi selecionado.
- Se o servidor estiver indisponível, informar que não foi possível concluir a simulação.
- Não apresentar uma compra como concluída se o servidor retornar erro.

#### Cálculos

Utilizar os preços oficiais do catálogo do servidor.

Calcular o subtotal de cada item:

preço unitário × quantidade.

Somar os subtotais para obter o subtotal geral.

Utilizar centavos inteiros ou outro método confiável de cálculo monetário para evitar erros de ponto flutuante.

---

### 6. REGRA DE DESCONTO

O enunciado original do SENAC não define o percentual nem o valor mínimo para conceder desconto.

Para completar o requisito, adote esta regra fictícia:

- Subtotal igual ou superior a R$ 500,00: desconto de 10%.
- Subtotal inferior a R$ 500,00: sem desconto.
- Nenhum produto selecionado: não aplicar desconto.

A regra deverá ser implementada no back-end, documentada no README e identificada como uma regra criada para a loja fictícia.

O navegador não poderá determinar ou manipular o desconto final.

---

### 7. BACK-END COM NODE.JS E EXPRESS

Implementar uma API REST organizada e funcional.

#### Rota GET /api/produtos

Responsabilidades:
- Retornar os três produtos.
- Fornecer identificador, nome, descrição e preço.
- Retornar os preços em um formato consistente.
- Utilizar os dados mantidos no servidor.

#### Rota POST /api/compras/simular

Receber um JSON contendo somente os identificadores e as quantidades dos produtos selecionados.

Exemplo conceitual de entrada:

{
  "itens": [
    {
      "produtoId": "headset-pulse",
      "quantidade": 2
    }
  ]
}

Responsabilidades:
- Validar a estrutura da requisição.
- Rejeitar identificadores inexistentes.
- Rejeitar quantidades negativas, decimais, não numéricas ou inválidas.
- Não aceitar preços enviados pelo navegador como fonte confiável.
- Consultar os preços oficiais do servidor.
- Calcular o subtotal de cada item.
- Calcular o subtotal geral.
- Aplicar o desconto de acordo com a regra definida.
- Calcular o total final.
- Retornar um resultado estruturado.
- Retornar uma mensagem apropriada quando nenhum produto for selecionado.
- Utilizar códigos HTTP adequados.
- Tratar erros sem revelar informações internas desnecessárias.

O resultado deverá informar:
- Produtos selecionados.
- Quantidades.
- Preços unitários.
- Subtotais por item.
- Subtotal geral.
- Percentual e valor do desconto.
- Total final.

O servidor deverá ser a fonte confiável dos cálculos.

Não registrar vendas reais, armazenar dados pessoais desnecessários ou processar pagamentos.

#### Tratamento de erros

Implementar tratamento para:
- JSON inválido.
- Quantidade inválida.
- Produto inexistente.
- Requisição malformada.
- Erros internos.
- Falhas de comunicação entre front-end e back-end.

Utilizar mensagens claras em português.

---

### 8. BANCO DE DADOS OPCIONAL

Preparar o projeto para uma possível integração futura com MySQL.

A aplicação básica deverá continuar funcionando sem MySQL.

Se o banco for implementado:
- Criar um script SQL de inicialização.
- Criar uma tabela de produtos.
- Utilizar variáveis de ambiente para as credenciais.
- Incluir um arquivo .env.example sem segredos reais.
- Utilizar consultas parametrizadas.
- Não publicar senhas no GitHub.

Não adicionar autenticação, painel administrativo ou funcionalidades que não sejam necessárias ao escopo básico.

---

### 9. ESTRUTURA DE PASTAS

Organizar o projeto da seguinte maneira:

Elite-game-store/
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
├── backend/
│   ├── src/
│   │   ├── server.js
│   │   ├── routes/
│   │   │   ├── produtos.js
│   │   │   └── compras.js
│   │   ├── services/
│   │   │   └── simulacaoService.js
│   │   └── data/
│   │       └── produtos.js
│   ├── package.json
│   └── .env.example
├── screenshots/
├── README.md
└── .gitignore

Ajuste a estrutura somente quando houver uma justificativa técnica.

Não crie arquivos vazios, duplicados ou desnecessários.

---

### 10. RESPONSIVIDADE E ACESSIBILIDADE

Garantir funcionamento em computadores, tablets e celulares.

Implementar:
- CSS Grid ou Flexbox.
- Layout fluido.
- Media queries.
- Navegação adaptável.
- Contraste adequado.
- Foco visível.
- Textos alternativos para imagens.
- Botões com nomes acessíveis.
- Elementos HTML semânticos.
- Estados de interação consistentes.
- Respeito à preferência por redução de movimento.

Testar diferentes larguras de tela.

---

### 11. README.md

Criar uma documentação completa em português com:

1. Nome e descrição do projeto.
2. Nome do aluno.
3. Curso e trilha.
4. Apresentação da loja.
5. Catálogo de produtos e preços.
6. Regra fictícia de desconto.
7. Tecnologias utilizadas.
8. Estrutura de pastas.
9. Requisitos de instalação.
10. Como instalar as dependências.
11. Como iniciar o front-end.
12. Como iniciar o back-end.
13. Endereços locais da aplicação e da API.
14. Funcionamento da simulação.
15. Testes realizados e resultados reais.
16. Captura de tela da página.
17. Dificuldade encontrada e aprendizado.
18. Utilização de inteligência artificial, incluindo o que foi adaptado e como o resultado foi verificado.

Não inventar dificuldades pessoais, capturas de tela, testes ou resultados.

Se a captura ainda não existir, deixar a indicação clara para adicioná-la antes da entrega.

---

### 12. TESTES OBRIGATÓRIOS

Executar os testes possíveis e corrigir os problemas encontrados.

Teste 1 — Nenhum produto:
Quantidades zero para todos os itens.

Esperado: informar que nenhum produto foi selecionado.

Teste 2 — Dois headsets:
Subtotal esperado: R$ 399,80.
Desconto esperado: R$ 0,00.
Total esperado: R$ 399,80.

Teste 3 — Um headset e três teclados:
Subtotal esperado: R$ 949,60.
Desconto esperado: R$ 94,96.
Total esperado: R$ 854,64.

Teste 4 — Um mouse:
Subtotal esperado: R$ 129,90.
Desconto esperado: R$ 0,00.
Total esperado: R$ 129,90.

Teste 5 — Entrada inválida:
Rejeitar texto, número negativo, decimal e campo vazio.

Teste 6 — Cancelamento:
Cancelar um prompt e verificar se a simulação é interrompida.

Teste 7 — Produto inexistente:
Enviar um identificador inválido para a API e verificar a rejeição.

Teste 8 — Segurança dos cálculos:
Enviar um preço adulterado pelo navegador e verificar que o servidor não o utiliza.

Teste 9 — Comunicação:
Verificar o comportamento quando o servidor estiver indisponível.

Teste 10 — Interface:
Confirmar que os produtos, preços, logotipo e botões aparecem corretamente em computadores e celulares.

Teste 11 — Arquivos:
Verificar se o HTML, CSS e JavaScript estão conectados e se não existem erros de execução.

Registrar somente os testes que realmente foram executados. Corrigir e repetir os testes que falharem.

---

### 13. EXECUÇÃO E PUBLICAÇÃO

O projeto deverá ser executável localmente.

Documentar:
- Versão adequada do Node.js.
- Instalação com npm.
- Comando para iniciar o servidor.
- Endereço local da API.
- Forma de abrir o front-end.
- Procedimentos de teste.

O front-end poderá ser hospedado em um serviço estático. O back-end precisará de um serviço que execute Node.js para funcionar publicamente.

O GitHub Pages não executa o servidor Express.

Não criar repositório remoto, publicar conteúdo ou declarar implantação concluída sem executar e confirmar as operações correspondentes.

---

### 14. ORDEM DE IMPLEMENTAÇÃO

Execute o trabalho nesta ordem:

1. Inspecionar os arquivos existentes e preservar o trabalho útil.
2. Definir a identidade visual da marca.
3. Criar o front-end em HTML, CSS e JavaScript puro.
4. Criar o catálogo de produtos no servidor.
5. Implementar as rotas da API.
6. Implementar a validação e os cálculos monetários.
7. Integrar o front-end ao back-end usando fetch().
8. Preservar prompt(), Number() e alert() na simulação.
9. Criar o README.
10. Executar os testes possíveis.
11. Corrigir os problemas identificados.
12. Conferir os requisitos originais do Trilhas.
13. Apresentar um relatório final com arquivos, testes, comandos de execução e pendências.

---

### 15. CRITÉRIOS FINAIS DE ACEITAÇÃO

O projeto deverá cumprir estes requisitos:

- Nome EQUIPAGEME ELITE GAME STORE.
- Logotipo distribuído em três linhas:  ELITE GAME STORE/ELITE/ STORE.
- Identidade visual gamer profissional.
- Três produtos com preços consistentes.
- HTML, CSS e JavaScript puro no front-end.
- Uso de prompt(), Number() e alert().
- Simulação funcional.
- Validação de quantidades.
- Cálculo de subtotais e total.
- Regra de desconto documentada.
- Back-end com Node.js e Express.
- API de produtos e de simulação.
- Preços e cálculos confiáveis no servidor.
- Tratamento de erros.
- MySQL opcional, sem dependência na versão básica.
- Responsividade e acessibilidade.
- README em português.
- Testes documentados com honestidade.
- Projeto pronto para revisão e publicação no GitHub.

Priorize a qualidade visual, a segurança básica, a clareza do código e a compreensão didática.

Não sacrifique os requisitos acadêmicos em favor de funcionalidades sofisticadas. O aluno deverá conseguir explicar como o HTML estrutura a página, como o CSS define o visual, como o JavaScript controla a simulação e como o back-end valida e calcula os dados.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d568c658-ca69-42ba-a10b-e8882d609612).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
