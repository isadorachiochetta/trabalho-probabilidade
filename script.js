//Trabalho 1 - Probabilidade e Estatística
//os cálculos usam os valores digitados pelo usuário, não apenas os exemplos da lista

const exercicios = [
  {
    id: 1, titulo: 'Operações com conjuntos', tema: 'União, interseção e complemento', descricao: 'Informe os conjuntos separados por vírgula. Para o complemento de A, informe também o conjunto universo.', campos: [
      { id: 'A', label: 'Conjunto A', valor: '1, 2, 3', tipo: 'texto' }, { id: 'B', label: 'Conjunto B', valor: '2, 3, 4', tipo: 'texto' }, { id: 'C', label: 'Conjunto C', valor: '3, 4, 5', tipo: 'texto' }, { id: 'U', label: 'Conjunto universo', valor: '1, 2, 3, 4, 5, 6', tipo: 'texto' }], formula: 'A ∪ B reúne os elementos de A ou B; A ∩ B contém os elementos comuns; Aᶜ contém os elementos do universo que não estão em A.'
  },
  { id: 2, titulo: 'Probabilidade por grupos iguais', tema: 'Probabilidade complementar', descricao: 'A população é dividida igualmente entre os grupos. O programa calcula a chance de o elemento NÃO pertencer ao grupo escolhido.', campos: [{ id: 'pop', label: 'Tamanho total da população', valor: 52 }, { id: 'grupos', label: 'Quantidade de grupos iguais', valor: 4 }, { id: 'grupo', label: 'Número do grupo que queremos excluir', valor: 1 }], formula: 'P(fora do grupo) = (população − elementos do grupo) / população. Supõe que os grupos têm o mesmo tamanho.' },
  { id: 3, titulo: 'Seleção proporcional ao número de funcionários', tema: 'Probabilidade proporcional', descricao: 'Informe o número de funcionários de cada empresa. A chance de seleção é proporcional ao total de funcionários.', campos: [{ id: 'empresas', label: 'Funcionários por empresa (separados por vírgula)', valor: '20, 15, 7, 5, 3', tipo: 'texto' }, { id: 'indice', label: 'Número da empresa para calcular a chance de NÃO ser selecionada (começa em 1)', valor: 1 }], formula: 'P(empresa i) = funcionários da empresa i / total de funcionários. A chance de não selecionar uma empresa é 1 − sua probabilidade.' },
  { id: 4, titulo: 'Seleção sem reposição', tema: 'Distribuição hipergeométrica', descricao: 'Calcule a probabilidade de todos os estudantes escolhidos pertencerem ao grupo de interesse.', campos: [{ id: 'favoraveis', label: 'Quantidade de estudantes do grupo de interesse', valor: 30 }, { id: 'outros', label: 'Quantidade de estudantes dos outros grupos', valor: 10 }, { id: 'n', label: 'Quantidade de estudantes escolhidos (n)', valor: 2 }], formula: 'P(todos do grupo) = C(favoráveis, n) / C(população total, n). A seleção é sem reposição.' },
  { id: 5, titulo: 'Dois eventos independentes', tema: 'Probabilidade de pelo menos um sucesso', descricao: 'Informe a probabilidade de cada pessoa resolver o problema. O programa calcula a chance de pelo menos uma conseguir, supondo independência.', campos: [{ id: 'p1', label: 'Probabilidade da primeira pessoa (0 a 1)', valor: 0.5 }, { id: 'p2', label: 'Probabilidade da segunda pessoa (0 a 1)', valor: 0.7 }], formula: 'P(pelo menos um) = 1 − (1 − p1)(1 − p2).' },
  { id: 6, titulo: 'Probabilidade de não ocorrer defeito/reparo', tema: 'Evento complementar', descricao: 'Informe quantos itens foram observados e quantos precisaram de reparo. O programa calcula a proporção que não precisou.', campos: [{ id: 'total', label: 'Total de itens observados', valor: 813 }, { id: 'evento', label: 'Itens que precisaram de reparo', valor: 504 }], formula: 'P(não precisar de reparo) = (total − itens com reparo) / total.' },
  { id: 7, titulo: 'Probabilidade total e Teorema de Bayes', tema: 'Clientes e erros', descricao: 'Informe a participação de cada cliente e a taxa de erro de cada um. Use porcentagens, por exemplo 10 para 10%.', campos: [{ id: 'nomes', label: 'Nomes dos clientes, separados por vírgula', valor: 'A, B, C, D, E', tipo: 'texto' }, { id: 'participacoes', label: 'Percentual de pedidos por cliente', valor: '10, 15, 15, 40, 20', tipo: 'texto' }, { id: 'erros', label: 'Percentual de pedidos inadequados por cliente', valor: '1, 2, 0.5, 2, 8', tipo: 'texto' }, { id: 'cliente', label: 'Cliente para calcular a probabilidade após um erro', valor: 'E', tipo: 'texto' }], formula: 'P(erro) = soma de P(cliente) × P(erro | cliente). Bayes: P(cliente | erro) = P(cliente)P(erro | cliente) / P(erro).' },
  { id: 8, titulo: 'Identificar a máquina após encontrar defeito', tema: 'Teorema de Bayes', descricao: 'Informe a participação de cada máquina na produção e a porcentagem defeituosa de cada uma. Os valores são porcentagens.', campos: [{ id: 'maquinas', label: 'Nomes das máquinas, separados por vírgula', valor: 'A, B, C', tipo: 'texto' }, { id: 'producao', label: 'Percentual da produção de cada máquina', valor: '25, 35, 40', tipo: 'texto' }, { id: 'defeitos', label: 'Percentual defeituoso de cada máquina', valor: '5, 4, 2', tipo: 'texto' }], formula: 'P(máquina i | defeituoso) = P(máquina i) × P(defeituoso | máquina i) / P(defeituoso).' },
  { id: 9, titulo: 'Confiabilidade de sistemas', tema: 'Componentes em série e em paralelo', descricao: 'Escolha uma configuração e informe a probabilidade de funcionamento de cada componente (0 a 1). Configuração 1: dois ramos paralelos, cada um com dois componentes em série. Configuração 2: duas etapas em série, cada etapa com dois componentes em paralelo.', campos: [{ id: 'config', label: 'Configuração', tipo: 'select', opcoes: [['1', 'Configuração 1 — ramos paralelos'], ['2', 'Configuração 2 — etapas em série']] }, { id: 'c1', label: 'Probabilidade de funcionamento C1 (0 a 1)', valor: 0.99 }, { id: 'c2', label: 'Probabilidade de funcionamento C2 (0 a 1)', valor: 0.98 }, { id: 'c3', label: 'Probabilidade de funcionamento C3 (0 a 1)', valor: 0.97 }, { id: 'c4', label: 'Probabilidade de funcionamento C4 (0 a 1)', valor: 0.96 }], formula: 'Série: multiplicamos as probabilidades. Paralelo: P(funcionar) = 1 − probabilidade de todos falharem. Supõe componentes independentes.' },
  { id: 10, titulo: 'Peso bruto: média e desvio-padrão', tema: 'Soma de variáveis independentes', descricao: 'O peso bruto é a soma do peso líquido e do peso da embalagem. As variáveis são consideradas independentes.', campos: [{ id: 'm1', label: 'Média do peso líquido (g)', valor: 900 }, { id: 'd1', label: 'Desvio-padrão do peso líquido (g)', valor: 10 }, { id: 'm2', label: 'Média da embalagem (g)', valor: 100 }, { id: 'd2', label: 'Desvio-padrão da embalagem (g)', valor: 4 }], formula: 'Média total = M1 + M2. Desvio-padrão total = √(D1² + D2²), para variáveis independentes.' },
  { id: 11, titulo: 'Itens defeituosos em um lote', tema: 'Distribuição binomial', descricao: 'Informe o tamanho do lote e a probabilidade de defeito (0 a 1).', campos: [{ id: 'n', label: 'Quantidade de itens no lote', valor: 20 }, { id: 'p', label: 'Probabilidade de defeito por item (0 a 1)', valor: 0.05 }], formula: 'X segue binomial: P(X=k) = C(n,k) pᵏ (1−p)ⁿ⁻ᵏ. Esperança = np; variância = np(1−p).' },
  { id: 12, titulo: 'Quantidade exata de mulheres sorteadas', tema: 'Distribuição hipergeométrica', descricao: 'Informe a população por grupo e o total de pessoas sorteadas. O sorteio é sem reposição.', campos: [{ id: 'mulheres', label: 'Quantidade de mulheres', valor: 60 }, { id: 'homens', label: 'Quantidade de homens', valor: 40 }, { id: 'n', label: 'Quantidade de pessoas sorteadas', valor: 2 }, { id: 'k', label: 'Quantidade exata de mulheres desejada', valor: 1 }], formula: 'P(X=k) = C(mulheres,k) × C(homens,n−k) / C(população total,n).' },
  { id: 13, titulo: 'Chegadas segundo Poisson', tema: 'Distribuição de Poisson', descricao: 'Informe a taxa média por unidade de tempo, o tempo observado e o número exato de chegadas desejado.', campos: [{ id: 'taxa', label: 'Taxa média de chegadas por unidade de tempo', valor: 5 }, { id: 'tempo', label: 'Tempo observado (na mesma unidade)', valor: 1 }, { id: 'k', label: 'Número exato de chegadas', valor: 2 }], formula: 'λ do intervalo = taxa × tempo. P(X=k) = e⁻λ λᵏ / k!.' },
  { id: 14, titulo: 'Probabilidade de mais que k erros', tema: 'Binomial exata', descricao: 'Calcule a probabilidade de mais do que k ocorrências em n tentativas, cada uma com probabilidade p.', campos: [{ id: 'n', label: 'Número de bits transmitidos', valor: 10000 }, { id: 'p', label: 'Probabilidade de erro por bit (0 a 1)', valor: 0.0002 }, { id: 'k', label: 'Calcular a probabilidade de mais que este número de erros', valor: 4 }], formula: 'P(X > k) = 1 − soma de P(X=j), de j=0 até k, usando a distribuição binomial.' },
  { id: 15, titulo: 'Distribuição uniforme', tema: 'Esperança, variância e probabilidade', descricao: 'X tem distribuição uniforme contínua no intervalo [A, B]. Informe C e D para calcular P(C < X < D).', campos: [{ id: 'A', label: 'Limite inferior A', valor: 0 }, { id: 'B', label: 'Limite superior B', valor: 10 }, { id: 'C', label: 'Limite C', valor: 3 }, { id: 'D', label: 'Limite D', valor: 7 }], formula: 'E(X) = (A+B)/2; Var(X) = (B−A)²/12. A probabilidade é o comprimento da interseção dos intervalos dividido por B−A.' },
  { id: 16, titulo: 'Tempo de sobrevivência', tema: 'Distribuição exponencial', descricao: 'Informe a taxa de falha λ e os tempos para calcular a probabilidade de sobreviver além de cada tempo.', campos: [{ id: 'lambda', label: 'Taxa de falha λ (por hora, por exemplo)', valor: 0.012 }, { id: 'C', label: 'Tempo C', valor: 50 }, { id: 'D', label: 'Tempo D', valor: 100 }], formula: 'P(T > t) = e^(−λt). A taxa e os tempos precisam usar unidades compatíveis.' },
  { id: 17, titulo: 'Peso bruto com distribuição normal', tema: 'Normal: acima de um valor e entre limites', descricao: 'O peso bruto é a soma de duas variáveis normais independentes. Informe médias, desvios-padrão e os limites desejados.', campos: [{ id: 'm1', label: 'Média do peso líquido (g)', valor: 900 }, { id: 'd1', label: 'Desvio-padrão do peso líquido (g)', valor: 10 }, { id: 'm2', label: 'Média da embalagem (g)', valor: 100 }, { id: 'd2', label: 'Desvio-padrão da embalagem (g)', valor: 4 }, { id: 'MS', label: 'Referência MS para calcular P(peso > MS)', valor: 1020 }, { id: 'I1', label: 'Limite inferior I1 (g)', valor: 980 }, { id: 'I2', label: 'Limite superior I2 (g)', valor: 1020 }], formula: 'Média total = M1+M2; desvio-padrão total = √(D1²+D2²). Padronização: Z=(X−média)/desvio-padrão.' },
  { id: 18, titulo: 'Normal padrão (Z)', tema: 'Probabilidades entre intervalos', descricao: 'Informe os limites inferior e superior de Z. Use “+infinito” marcando a opção correspondente.', campos: [{ id: 'a', label: 'Limite inferior Z', valor: 0 }, { id: 'b', label: 'Limite superior Z', valor: 1.73 }, { id: 'infinito', label: 'Limite superior é +infinito?', tipo: 'select', opcoes: [['nao', 'Não'], ['sim', 'Sim']] }], formula: 'Para Z normal padrão, P(a < Z < b) = Φ(b) − Φ(a), em que Φ é a função de distribuição normal padrão.' },
  { id: 19, titulo: 'Distribuição normal com média e desvio-padrão', tema: 'Probabilidades em intervalos', descricao: 'Escolha o tipo de probabilidade e informe a média, o desvio-padrão e os limites.', campos: [{ id: 'media', label: 'Média μ', valor: 48 }, { id: 'dp', label: 'Desvio-padrão σ', valor: 3 }, { id: 'tipo', label: 'Tipo de evento', tipo: 'select', opcoes: [['entre', 'Entre dois valores'], ['maior', 'Maior que um valor'], ['menor', 'Menor que um valor']] }, { id: 'a', label: 'Valor inferior / valor de referência', valor: 42 }, { id: 'b', label: 'Valor superior (usado no evento “entre”)', valor: 49 }], formula: 'Padronização: Z=(X−μ)/σ. Para intervalo, subtraia as probabilidades acumuladas dos dois limites.' }
];

const menu = document.getElementById('menuExercicios');
const area = document.getElementById('areaExercicio');
let exercicioAtual = 1;

exercicios.forEach(ex => {
  const botao = document.createElement('button');
  botao.type = 'button';
  botao.textContent = `P${ex.id} · ${ex.titulo}`;
  botao.dataset.id = ex.id;
  botao.addEventListener('click', () => mostrarExercicio(ex.id));
  menu.appendChild(botao);
});

function mostrarExercicio(id) {
  exercicioAtual = id;
  const ex = exercicios.find(item => item.id === id);
  menu.querySelectorAll('button').forEach(btn => btn.classList.toggle('ativo', Number(btn.dataset.id) === id));
  let html = `<h2>P${ex.id} — ${ex.titulo}</h2><p class="descricao">${ex.descricao}</p><form id="formExercicio"><div class="campos">`;
  ex.campos.forEach(c => {
    html += `<div class="campo"><label for="${c.id}">${c.label}</label>`;
    if (c.tipo === 'select') {
      html += `<select id="${c.id}" name="${c.id}">${c.opcoes.map(o => `<option value="${o[0]}">${o[1]}</option>`).join('')}</select>`;
    } else if (c.tipo === 'texto') {
      html += `<textarea id="${c.id}" name="${c.id}" required>${c.valor ?? ''}</textarea>`;
    } else {
      html += `<input id="${c.id}" name="${c.id}" type="number" step="any" value="${c.valor ?? 0}" required>`;
    }
    html += '</div>';
  });
  html += `</div><div class="acoes"><button class="calcular" type="submit">Calcular</button><button class="limpar" type="reset">Restaurar valores iniciais</button></div></form><div id="resultado" aria-live="polite"></div><div class="formula"><strong>Ideia / fórmula usada</strong>${ex.formula}</div>`;
  area.innerHTML = html;
  document.getElementById('formExercicio').addEventListener('submit', function (e) { e.preventDefault(); calcular(exercicioAtual); });
  document.getElementById('formExercicio').addEventListener('reset', () => setTimeout(() => { document.getElementById('resultado').innerHTML = ''; }, 0));
}

function numero(id) { const el = document.getElementById(id); if (!el) return NaN; return Number(el.value); }
function texto(id) { return document.getElementById(id).value.trim(); }
function listaNumeros(id) { return texto(id).split(',').map(v => Number(v.trim())); }
function listaTextos(id) { return texto(id).split(',').map(v => v.trim()); }
function validarProb(p, nome) { if (!Number.isFinite(p) || p < 0 || p > 1) throw new Error(`${nome} deve ser um número entre 0 e 1.`); }
function porcentagem(p) { return `${(p * 100).toLocaleString('pt-BR', { maximumFractionDigits: 6 })}%`; }
function formatar(n) { if (!Number.isFinite(n)) return String(n); return n.toLocaleString('pt-BR', { maximumFractionDigits: 10 }); }
function conjunto(id) { return new Set(texto(id).split(',').map(v => v.trim()).filter(v => v !== '')); }
function combinacao(n, k) { if (!Number.isInteger(n) || !Number.isInteger(k) || n < 0 || k < 0 || k > n) return 0; k = Math.min(k, n - k); let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return r; }
function fatorial(n) { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; }
function binomial(n, k, p) { if (k < 0 || k > n) return 0; return combinacao(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k); }
function poisson(lambda, k) { if (k < 0 || !Number.isInteger(k)) return 0; return Math.exp(-lambda) * Math.pow(lambda, k) / fatorial(k); }
//aproximação numérica da função erro

function erf(x) {
  const sinal = x < 0 ? -1 : 1; x = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t) * Math.exp(-x * x);
  return sinal * y;
}
function normalCDF(z) { return 0.5 * (1 + erf(z / Math.sqrt(2))); }
function mostrarResultado(titulo, linhas) {
  const div = document.getElementById('resultado');
  div.className = 'resultado';
  div.innerHTML = `<h3>${titulo}</h3>${linhas.map(l => `<p>${l}</p>`).join('')}`;
}
function calcular(id) {
  try {
    let linhas = [];
    switch (id) {
      case 1: {
        const A = conjunto('A'), B = conjunto('B'), C = conjunto('C'), U = conjunto('U');
        const uniao = new Set([...A, ...B]);
        const inter = new Set([...A].filter(x => B.has(x)));
        const interC = new Set([...A].filter(x => C.has(x)));
        const comp = new Set([...U].filter(x => !A.has(x)));
        linhas = [`A ∪ B = { ${[...uniao].join(', ')} }`, `A ∩ B = { ${[...inter].join(', ')} }`, `A ∩ C = { ${[...interC].join(', ')} }`, `Complemento de A = { ${[...comp].join(', ')} }`]; break;
      }
      case 2: { const pop = numero('pop'), g = numero('grupos'), grupo = numero('grupo'); if (!Number.isInteger(pop) || !Number.isInteger(g) || !Number.isInteger(grupo) || pop <= 0 || g <= 0 || pop % g !== 0 || grupo < 1 || grupo > g) throw Error('Informe população positiva, grupos inteiros que dividam a população igualmente e um número de grupo válido.'); const tamanho = pop / g; linhas = [`Elementos no grupo escolhido: ${formatar(tamanho)}`, `Probabilidade de NÃO pertencer ao grupo ${grupo}: ${porcentagem((pop - tamanho) / pop)}`]; break; }
      case 3: { const v = listaNumeros('empresas'), i = numero('indice') - 1; if (!v.length || v.some(x => !Number.isFinite(x) || x < 0) || v.reduce((a, b) => a + b, 0) <= 0 || !Number.isInteger(i) || i < 0 || i >= v.length) throw Error('Confira os funcionários e o número da empresa.'); const total = v.reduce((a, b) => a + b, 0); linhas = v.map((x, j) => `Empresa ${j + 1}: ${porcentagem(x / total)} (funcionários: ${x})`); linhas.push(`Probabilidade de a empresa ${i + 1} NÃO ser selecionada: ${porcentagem(1 - v[i] / total)}`); break; }
      case 4: { const f = numero('favoraveis'), o = numero('outros'), n = numero('n'), total = f + o; if (!Number.isInteger(f) || !Number.isInteger(o) || !Number.isInteger(n) || f < 0 || o < 0 || n < 0 || total <= 0 || n > total) throw Error('Informe quantidades inteiras válidas, uma população maior que zero e uma amostra que não ultrapasse a população.'); const p = combinacao(f, n) / combinacao(total, n); linhas = [`Probabilidade de todos serem do grupo de interesse: ${porcentagem(p)}`, `População total: ${total}; estudantes escolhidos: ${n}.`]; break; }
      case 5: { const p1 = numero('p1'), p2 = numero('p2'); validarProb(p1, 'Probabilidade 1'); validarProb(p2, 'Probabilidade 2'); linhas = [`Probabilidade de pelo menos uma pessoa resolver: ${porcentagem(1 - (1 - p1) * (1 - p2))}`]; break; }
      case 6: { const t = numero('total'), e = numero('evento'); if (t <= 0 || e < 0 || e > t) throw Error('O total deve ser positivo e os itens com reparo devem estar entre zero e o total.'); linhas = [`Itens sem reparo: ${formatar(t - e)}`, `Probabilidade de não precisar de reparo: ${porcentagem((t - e) / t)}`]; break; }
      case 7: case 8: {
        const nomes = listaTextos(id === 7 ? 'nomes' : 'maquinas'), part = listaNumeros(id === 7 ? 'participacoes' : 'producao'), cond = listaNumeros(id === 7 ? 'erros' : 'defeitos');
        if (!nomes.length || nomes.some(n => !n) || nomes.length !== part.length || part.length !== cond.length || part.some(x => !Number.isFinite(x) || x < 0) || cond.some(x => !Number.isFinite(x) || x < 0 || x > 100) || part.reduce((a, b) => a + b, 0) <= 0) throw Error('As listas precisam ter o mesmo tamanho e percentuais válidos.');
        const soma = part.reduce((a, b) => a + b, 0); const pesos = part.map(x => x / soma); const taxa = cond.map(x => x / 100); const pe = pesos.reduce((s, p, i) => s + p * taxa[i], 0); if (pe === 0) throw Error('A probabilidade total de erro/defeito é zero; não é possível calcular a probabilidade após observar um erro/defeito.');
        linhas.push(`Probabilidade total de erro/defeito: ${porcentagem(pe)}`);
        nomes.forEach((nome, i) => linhas.push(`Probabilidade de ${nome} ser a origem, sabendo que houve erro/defeito: ${porcentagem(pesos[i] * taxa[i] / pe)}`));
        if (id === 7) { const alvo = texto('cliente').toLowerCase(); const i = nomes.findIndex(n => n.toLowerCase() === alvo); if (i < 0) throw Error('O nome do cliente escolhido não está na lista de nomes.'); linhas.push(`Probabilidade de o pedido ser do cliente ${nomes[i]} após um erro: ${porcentagem(pesos[i] * taxa[i] / pe)}`); }
        break;
      }
      case 9: { const p = [1, 2, 3, 4].map(i => numero('c' + i)); p.forEach((v, i) => validarProb(v, `Componente ${i + 1}`)); let r; if (texto('config') === '1') r = 1 - (1 - p[0] * p[1]) * (1 - p[2] * p[3]); else r = (1 - (1 - p[0]) * (1 - p[1])) * (1 - (1 - p[2]) * (1 - p[3])); linhas = [`Probabilidade de o sistema funcionar: ${porcentagem(r)}`, `Configuração escolhida: ${texto('config')}.`]; break; }
      case 10: { const m1 = numero('m1'), d1 = numero('d1'), m2 = numero('m2'), d2 = numero('d2'); if (![m1, d1, m2, d2].every(Number.isFinite) || d1 < 0 || d2 < 0) throw Error('Informe médias válidas e desvios-padrão não negativos.'); linhas = [`Média do peso bruto: ${formatar(m1 + m2)} g`, `Desvio-padrão do peso bruto: ${formatar(Math.sqrt(d1 * d1 + d2 * d2))} g`]; break; }
      case 11: { const n = numero('n'), p = numero('p'); validarProb(p, 'Probabilidade de defeito'); if (!Number.isInteger(n) || n < 0 || n > 100000) throw Error('n deve ser um inteiro entre 0 e 100000.'); let p0 = binomial(n, 0, p), p2 = binomial(n, 2, p), pmais2 = 1; for (let k = 0; k <= Math.min(2, n); k++) pmais2 -= binomial(n, k, p); linhas = [`a) Probabilidade de pelo menos um defeituoso: ${porcentagem(1 - p0)}`, `b) Probabilidade de exatamente dois defeituosos: ${porcentagem(p2)}`, `c) Probabilidade de mais de dois defeituosos: ${porcentagem(Math.max(0, pmais2))}`, `d) Número esperado de itens defeituosos: ${formatar(n * p)}`, `e) Número esperado de itens bons: ${formatar(n * (1 - p))}`, `f) Variância: ${formatar(n * p * (1 - p))}`]; break; }
      case 12: { const m = numero('mulheres'), h = numero('homens'), n = numero('n'), k = numero('k'); if ([m, h, n, k].some(x => !Number.isInteger(x) || x < 0) || n > m + h || k > n || k > m || n - k > h) throw Error('Confira os valores inteiros da população, sorteio e quantidade desejada.'); const p = combinacao(m, k) * combinacao(h, n - k) / combinacao(m + h, n); linhas = [`Probabilidade de sair exatamente ${k} mulher(es): ${porcentagem(p)}`]; break; }
      case 13: { const taxa = numero('taxa'), tempo = numero('tempo'), k = numero('k'); if (taxa < 0 || tempo < 0 || !Number.isInteger(k) || k < 0) throw Error('Taxa e tempo devem ser não negativos; número de chegadas deve ser inteiro.'); const lambda = taxa * tempo; linhas = [`Média no intervalo (λ): ${formatar(lambda)}`, `Probabilidade de exatamente ${k} chegada(s): ${porcentagem(poisson(lambda, k))}`]; break; }
      case 14: { const n = numero('n'), p = numero('p'), k = numero('k'); validarProb(p, 'Probabilidade de erro'); if (!Number.isInteger(n) || n < 0 || n > 100000 || !Number.isInteger(k) || k < 0) throw Error('Informe n inteiro entre 0 e 100000 e k inteiro não negativo.'); let soma = 0; for (let j = 0; j <= Math.min(k, n); j++) soma += binomial(n, j, p); linhas = [`Probabilidade de mais de ${k} erro(s): ${porcentagem(Math.max(0, 1 - soma))}`, `Modelo usado: distribuição binomial exata.`]; break; }
      case 15: { const A = numero('A'), B = numero('B'), C = numero('C'), D = numero('D'); if (B <= A) throw Error('O limite B deve ser maior que A.'); const baixo = Math.max(A, Math.min(C, D)), alto = Math.min(B, Math.max(C, D)); const prob = Math.max(0, alto - baixo) / (B - A); linhas = [`Valor esperado: ${formatar((A + B) / 2)}`, `Variância: ${formatar((B - A) ** 2 / 12)}`, `P(C < X < D): ${porcentagem(prob)}`]; break; }
      case 16: { const l = numero('lambda'), C = numero('C'), D = numero('D'); if (l < 0 || C < 0 || D < 0) throw Error('Taxa e tempos não podem ser negativos.'); linhas = [`Probabilidade de sobreviver além de C=${formatar(C)}: ${porcentagem(Math.exp(-l * C))}`, `Probabilidade de sobreviver além de D=${formatar(D)}: ${porcentagem(Math.exp(-l * D))}`]; break; }
      case 17: { const m = numero('m1') + numero('m2'), s = Math.sqrt(numero('d1') ** 2 + numero('d2') ** 2); if (numero('d1') < 0 || numero('d2') < 0 || s <= 0) throw Error('Os desvios-padrão devem ser não negativos e pelo menos um deve ser positivo.'); const ms = numero('MS'), i1 = numero('I1'), i2 = numero('I2'); linhas = [`Média do peso bruto: ${formatar(m)} g`, `Desvio-padrão do peso bruto: ${formatar(s)} g`, `a) P(peso bruto > ${formatar(ms)} g): ${porcentagem(1 - normalCDF((ms - m) / s))}`, `b) P(${formatar(i1)} < peso bruto < ${formatar(i2)}): ${porcentagem(normalCDF((Math.max(i1, i2) - m) / s) - normalCDF((Math.min(i1, i2) - m) / s))}`]; break; }
      case 18: { const a = numero('a'), b = numero('b'); const inf = texto('infinito') === 'sim'; if (!inf && b < a) throw Error('O limite superior deve ser maior ou igual ao limite inferior.'); const superior = inf ? 1 : normalCDF(b); linhas = [`Probabilidade do intervalo: ${porcentagem(Math.max(0, superior - normalCDF(a)))}`, `Φ(limite inferior) = ${formatar(normalCDF(a))}`, `Φ(limite superior) = ${inf ? '1 (infinito)' : formatar(normalCDF(b))}`]; break; }
      case 19: { const m = numero('media'), s = numero('dp'), tipo = texto('tipo'), a = numero('a'), b = numero('b'); if (s <= 0) throw Error('O desvio-padrão deve ser maior que zero.'); let p; if (tipo === 'entre') p = normalCDF((Math.max(a, b) - m) / s) - normalCDF((Math.min(a, b) - m) / s); else if (tipo === 'maior') p = 1 - normalCDF((a - m) / s); else p = normalCDF((a - m) / s); linhas = [`Probabilidade do evento: ${porcentagem(Math.max(0, p))}`, `Média μ = ${formatar(m)}; desvio-padrão σ = ${formatar(s)}.`]; break; }
    }
    mostrarResultado('Resultado', linhas);
  } catch (erro) {
    const div = document.getElementById('resultado'); div.className = 'resultado erro'; div.innerHTML = `<h3>Confira os dados</h3><p>${erro.message}</p>`;
  }
}

mostrarExercicio(1);
