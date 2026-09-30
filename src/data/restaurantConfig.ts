/**
 * Configuração central do restaurante.
 *
 * REGRA: nenhum dado aqui deve ser inventado. Campos marcados com
 * `confirmar: true` precisam ser validados com o restaurante antes
 * da publicação. Preencha `value` com `null` quando não houver
 * informação oficial confirmada — a interface trata isso exibindo
 * estrutura editável/placeholder em vez de texto fictício.
 */

export interface Confirmable<T> {
  value: T;
  /** true = validar com o restaurante antes de publicar */
  confirmar: boolean;
  fonte?: string;
}

export const restaurant = {
  nome: 'Vicino Cucina & Vino',
  nomeCurto: 'Vicino',
  slogan: "L'ingrediente segreto è l'amore",
  sloganTraducao: 'O ingrediente secreto é o amor',
  cidade: 'Guarulhos — SP',
  bairro: 'Maia · Bosque Maia',

  endereco: {
    rua: "Rua Caetano D'Andrea, 252",
    complemento: 'Maia',
    cidade: 'Guarulhos',
    uf: 'SP',
    // ⚠️ Confirmar CEP com o restaurante antes de publicar.
    cep: { value: null as string | null, confirmar: true },
  },

  telefone: {
    display: '(11) 4070-8050',
    href: 'tel:+551140708050',
  },

  whatsapp: {
    display: '(11) 4070-8050',
    url: 'https://api.whatsapp.com/send/?phone=551140708050',
  },

  instagram: {
    handle: '@vicinocucina',
    url: 'https://www.instagram.com/vicinocucina/',
  },

  facebook: {
    url: 'https://pt-br.facebook.com/vicinocucina',
  },

  ifood: {
    url: 'https://www.ifood.com.br/delivery/guarulhos-sp/vicino---cucina--vino-jardim-maria-helena/a0d28ac8-5c52-4b6b-b32c-9a1816fa7ea3',
  },

  reserva: {
    // Sistema oficial de reservas (GetInApp), link real do site atual.
    url: 'https://widget.getinapp.com.br/Z6Rq3G1L',
    rotulo: 'Reservar mesa',
  },

  cardapioCompleto: {
    // Cardápio digital oficial.
    url: 'https://vicino-cucina-e-vinho.adsagencia.com/',
  },

  mapa: {
    query: "Vicino Cucina & Vino Rua Caetano D'Andrea 252 Guarulhos",
    embed:
      "https://www.google.com/maps?q=Vicino+Cucina+%26+Vino,+Rua+Caetano+D%27Andrea,+252,+Guarulhos&output=embed",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Vicino+Cucina+%26+Vino+Rua+Caetano+D%27Andrea+252+Guarulhos",
  },

  /**
   * Horários publicados no site oficial.
   * ⚠️ Validar com o restaurante antes de publicar — podem ter mudado.
   */
  horarios: {
    confirmar: true,
    grupos: [
      {
        rotulo: 'Segunda a quinta',
        linhas: ['Almoço · 12h às 15h', 'Jantar · 18h às 23h30'],
      },
      {
        rotulo: 'Sexta e sábado',
        linhas: ['12h às 00h'],
      },
      {
        rotulo: 'Domingo',
        linhas: ['12h às 23h'],
      },
    ],
  },
} as const;

export type RestaurantConfig = typeof restaurant;
