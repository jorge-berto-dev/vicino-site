/**
 * Conteúdo editorial do site.
 *
 * REGRA ABSOLUTA: somente informações de fonte oficial
 * (site vicinocucina.com.br e Instagram @vicinocucina).
 * Itens com `confirmado: false` são placeholders de estrutura
 * editável e são renderizados como tal — nunca como fato.
 */

export interface Dish {
  nome: string;
  descricao: string;
  imagem?: string;
  imagemAlt?: string;
  categoria: string;
  confirmado: boolean;
  preco?: string | null;
}

export interface MenuCategory {
  id: string;
  rotulo: string;
  nota?: string;
  itens: Dish[];
}

/* ---------- Pratos confirmados no site oficial ---------- */

export const pratosDestaque: Dish[] = [
  {
    nome: 'Pólipo Grelhado com Molho de Ervas',
    descricao: 'Acompanha fettuccine a putanesca.',
    imagem: '/assets/vicino/vicino-prato-07.jpg',
    imagemAlt: 'Pólipo grelhado com molho de ervas e fettuccine — Vicino Cucina & Vino',
    categoria: 'Peixes & frutos do mar',
    confirmado: true,
    preco: null,
  },
  {
    nome: 'Spaghetti Chitarra alla Carbonara',
    descricao: 'Guanciale, pecorino, pimenta-do-reino preta e gema de ovo.',
    imagem: '/assets/vicino/vicino-prato-04.jpg',
    imagemAlt: 'Spaghetti chitarra alla carbonara com gema de ovo — Vicino Cucina & Vino',
    categoria: 'Massas',
    confirmado: true,
    preco: null,
  },
  {
    nome: 'Gnocchi Zafferano',
    descricao:
      'Gnocchi de batata com açafrão, camarão, lula e polvo flambados no cognac, e zucchini.',
    imagem: '/assets/vicino/vicino-prato-03.jpg',
    imagemAlt: 'Gnocchi zafferano com camarão — Vicino Cucina & Vino',
    categoria: 'Massas',
    confirmado: true,
    preco: null,
  },
  {
    nome: 'Trio de Cannoli',
    descricao: 'Dulce de leche e flor de sal, Nutella com praliné de nuts e ricota com pistache.',
    imagem: '/assets/vicino/vicino-sobremesa.jpg',
    imagemAlt: 'Trio de cannoli — Vicino Cucina & Vino',
    categoria: 'Sobremesas',
    confirmado: true,
    preco: null,
  },
];

/* ---------- Cardápio (estrutura editável) ---------- */

export const cardapio: MenuCategory[] = [
  {
    id: 'entradas',
    rotulo: 'Entradas',
    nota: 'Para abrir a mesa — incluindo o mar de ostras frescas da entrada da casa.',
    itens: [
      {
        nome: 'Ostras frescas',
        descricao: 'Mar de ostras frescas logo na entrada da casa.',
        categoria: 'Entradas',
        confirmado: true,
        preco: null,
      },
      {
        nome: '[Nome da entrada]',
        descricao: 'Estrutura editável — substituir pelo item do cardápio oficial.',
        categoria: 'Entradas',
        confirmado: false,
        preco: null,
      },
    ],
  },
  {
    id: 'massas',
    rotulo: 'Massas & Gnocchi',
    nota: 'Massas frescas e gnocchi de batata, preparados com ingredientes selecionados.',
    itens: [
      {
        nome: 'Gnocchi Zafferano',
        descricao:
          'Gnocchi de batata com açafrão, camarão, lula e polvo flambados no cognac, e zucchini.',
        imagem: '/assets/vicino/vicino-prato-03.jpg',
        imagemAlt: 'Gnocchi zafferano com camarão — Vicino Cucina & Vino',
        categoria: 'Massas',
        confirmado: true,
        preco: null,
      },
      {
        nome: 'Gnocchi al Tartufo',
        descricao:
          'Gnocchi de batata, cogumelo porcini, cebola roxa, creme de leite e salsa trufada.',
        categoria: 'Massas',
        confirmado: true,
        preco: null,
      },
      {
        nome: 'Spaghetti Chitarra alla Carbonara',
        descricao: 'Guanciale, pecorino, pimenta-do-reino preta e gema de ovo.',
        imagem: '/assets/vicino/vicino-prato-04.jpg',
        imagemAlt: 'Spaghetti chitarra alla carbonara — Vicino Cucina & Vino',
        categoria: 'Massas',
        confirmado: true,
        preco: null,
      },
      {
        nome: '[Nome da massa]',
        descricao: 'Estrutura editável — substituir pelo item do cardápio oficial.',
        categoria: 'Massas',
        confirmado: false,
        preco: null,
      },
    ],
  },
  {
    id: 'principais',
    rotulo: 'Principais',
    nota: 'Carnes grelhadas e peixes, servidos à vista do salão.',
    itens: [
      {
        nome: 'Pólipo Grelhado com Molho de Ervas',
        descricao: 'Acompanha fettuccine a putanesca.',
        imagem: '/assets/vicino/vicino-prato-07.jpg',
        imagemAlt: 'Pólipo grelhado com fettuccine — Vicino Cucina & Vino',
        categoria: 'Principais',
        confirmado: true,
        preco: null,
      },
      {
        nome: '[Nome do principal]',
        descricao: 'Estrutura editável — substituir pelo item do cardápio oficial.',
        categoria: 'Principais',
        confirmado: false,
        preco: null,
      },
    ],
  },
  {
    id: 'carnes',
    rotulo: 'Carnes',
    itens: [
      {
        nome: '[Nome da carne]',
        descricao: 'Estrutura editável — substituir pelo item do cardápio oficial.',
        categoria: 'Carnes',
        confirmado: false,
        preco: null,
      },
    ],
  },
  {
    id: 'peixes',
    rotulo: 'Peixes & Frutos do Mar',
    itens: [
      {
        nome: 'Pólipo Grelhado com Molho de Ervas',
        descricao: 'Acompanha fettuccine a putanesca.',
        categoria: 'Peixes',
        confirmado: true,
        preco: null,
      },
      {
        nome: '[Nome do peixe]',
        descricao: 'Estrutura editável — substituir pelo item do cardápio oficial.',
        categoria: 'Peixes',
        confirmado: false,
        preco: null,
      },
    ],
  },
  {
    id: 'sobremesas',
    rotulo: 'Sobremesas',
    itens: [
      {
        nome: 'Trio de Cannoli',
        descricao:
          'Dulce de leche e flor de sal, Nutella com praliné de nuts e ricota com pistache.',
        imagem: '/assets/vicino/vicino-sobremesa.jpg',
        imagemAlt: 'Trio de cannoli — Vicino Cucina & Vino',
        categoria: 'Sobremesas',
        confirmado: true,
        preco: null,
      },
      {
        nome: '[Nome da sobremesa]',
        descricao: 'Estrutura editável — substituir pelo item do cardápio oficial.',
        categoria: 'Sobremesas',
        confirmado: false,
        preco: null,
      },
    ],
  },
  {
    id: 'vinhos',
    rotulo: 'Vinhos',
    nota: 'Carta com rótulos de diferentes países, servidos da adega climatizada da casa.',
    itens: [
      {
        nome: 'Tintos',
        descricao: 'Seleção da carta oficial — consultar rótulos e safras disponíveis no salão.',
        categoria: 'Vinhos',
        confirmado: false,
        preco: null,
      },
      {
        nome: 'Brancos',
        descricao: 'Seleção da carta oficial — consultar rótulos e safras disponíveis no salão.',
        categoria: 'Vinhos',
        confirmado: false,
        preco: null,
      },
      {
        nome: 'Rosés',
        descricao: 'Seleção da carta oficial — consultar rótulos e safras disponíveis no salão.',
        categoria: 'Vinhos',
        confirmado: false,
        preco: null,
      },
      {
        nome: 'Espumantes',
        descricao: 'Seleção da carta oficial — consultar rótulos e safras disponíveis no salão.',
        categoria: 'Vinhos',
        confirmado: false,
        preco: null,
      },
    ],
  },
  {
    id: 'bebidas',
    rotulo: 'Bebidas & Drinks',
    nota: 'Carta de drinks do bar da casa — ponto de encontro de celebrações e happy hours.',
    itens: [
      {
        nome: '[Nome do drink]',
        descricao: 'Estrutura editável — substituir pelo item da carta oficial.',
        categoria: 'Bebidas',
        confirmado: false,
        preco: null,
      },
    ],
  },
];

/* ---------- Gastronomia (categorias editoriais) ---------- */

export interface CategoriaGastronomia {
  titulo: string;
  texto: string;
  imagem: string;
  alt: string;
}

export const categoriasGastronomia: CategoriaGastronomia[] = [
  {
    titulo: 'Entradas',
    texto: 'Do mar de ostras frescas da entrada às burratas de preparo à vista.',
    imagem: '/assets/vicino/vicino-prato-02.jpg',
    alt: 'Entrada com burrata e azeite — Vicino Cucina & Vino',
  },
  {
    titulo: 'Massas & Gnocchi',
    texto: 'Frescas, de batata, ao sugo ou autorais — o coração da casa.',
    imagem: '/assets/vicino/vicino-prato-04.jpg',
    alt: 'Massa fresca — Vicino Cucina & Vino',
  },
  {
    titulo: 'Carnes grelhadas',
    texto: 'Cortes na grelha, no ponto da casa, com acompanhamentos.',
    imagem: '/assets/vicino/vicino-prato-05.jpg',
    alt: 'Carne grelhada com tomates confit — Vicino Cucina & Vino',
  },
  {
    titulo: 'Peixes & mar',
    texto: 'Pólipo grelhado, camarões e o melhor dos frutos do mar.',
    imagem: '/assets/vicino/vicino-prato-07.jpg',
    alt: 'Pólipo grelhado — Vicino Cucina & Vino',
  },
  {
    titulo: 'Sobremesas',
    texto: 'Cannoli, doces italianos e o fecho da noite.',
    imagem: '/assets/vicino/vicino-sobremesa.jpg',
    alt: 'Sobremesa italiana — Vicino Cucina & Vino',
  },
  {
    titulo: 'Bar & drinks',
    texto: 'Carta de drinks autoral para celebrações e happy hours.',
    imagem: '/assets/vicino/vicino-drink-03.jpg',
    alt: 'Drink autoral no bar — Vicino Cucina & Vino',
  },
];

/* ---------- Galeria / ambiente (fotos oficiais) ---------- */

export interface FotoGaleria {
  src: string;
  alt: string;
  legenda: string;
}

export const galeriaAmbiente: FotoGaleria[] = [
  {
    src: '/assets/vicino/vicino-galeria-ambiente-03.jpg',
    alt: 'Fachada do Vicino Cucina & Vino com letreiro da casa',
    legenda: 'A casa — Bosque Maia',
  },
  {
    src: '/assets/vicino/vicino-galeria-ambiente-01.jpg',
    alt: 'Adega climatizada do Vicino Cucina & Vino',
    legenda: 'A adega climatizada',
  },
  {
    src: '/assets/vicino/vicino-galeria-ambiente-05.jpg',
    alt: 'Bar do Vicino Cucina & Vino com balcão em madeira',
    legenda: 'O bar',
  },
  {
    src: '/assets/vicino/vicino-galeria-ambiente-02.jpg',
    alt: 'Salão do Vicino Cucina & Vino',
    legenda: 'O salão',
  },
  {
    src: '/assets/vicino/vicino-galeria-ambiente-04.jpg',
    alt: 'Detalhe do salão do Vicino Cucina & Vino',
    legenda: 'Detalhes do salão',
  },
  {
    src: '/assets/vicino/vicino-galeria-ambiente-06.jpg',
    alt: 'Ambiente interno do Vicino Cucina & Vino',
    legenda: 'Rústico-chique',
  },
  {
    src: '/assets/vicino/vicino-galeria-ambiente-07.jpg',
    alt: 'Mesas do salão do Vicino Cucina & Vino',
    legenda: 'Mesas redondas e retangulares',
  },
  {
    src: '/assets/vicino/vicino-galeria-ambiente-08.jpg',
    alt: 'Iluminação e decoração do Vicino Cucina & Vino',
    legenda: 'Iluminação quente',
  },
  {
    src: '/assets/vicino/vicino-galeria-ambiente-09.jpg',
    alt: 'Espaço para eventos do Vicino Cucina & Vino',
    legenda: 'Espaço de celebrações',
  },
];

/* ---------- Prova social: somente depoimento oficial ---------- */

export interface Depoimento {
  texto: string;
  autor: string;
  local: string;
  fonte: string;
}

export const depoimentos: Depoimento[] = [
  {
    texto:
      'O Vicino tem o cardápio perfeito para qualquer ocasião. A combinação de cores, aromas e sabores são perfeitos aos olhos, olfato e paladar. Não tem como dar a primeira mordida sem fechar os olhos e sorrir. O acolhimento é perfeito e o atendimento é tutte buona gente!',
    autor: 'Giuseppe Cangelosi',
    local: 'Guarulhos',
    fonte: 'Depoimento publicado no site oficial',
  },
];
