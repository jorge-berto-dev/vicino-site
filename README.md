# Vicino Cucina & Vino — Novo Site

Experiência digital contemporânea para o restaurante **Vicino Cucina & Vino**
(Guarulhos — SP): fotografia oficial em grande escala, narrativa editorial,
cardápio estruturado e jornada curta até a reserva.

## Stack

- React 18 + TypeScript + Vite 5
- Tailwind CSS 3 + Lucide Icons
- Sem frameworks de animação — reveal on scroll via `IntersectionObserver` + CSS

## Como executar localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build e preview

```bash
npm run build    # gera dist/
npm run preview  # serve o build localmente
```

## Publicação

O projeto é estático (`dist/`). Pode ser publicado em qualquer hospedagem
estática (Vercel, Netlify, cPanel etc.):

```bash
npm run build
# publique o conteúdo de dist/ na raiz de https://vicinocucina.com.br/
```

## Atualizar os dados do restaurante

Tudo que é dado real vive em um só lugar:

- **`src/data/restaurantConfig.ts`** — nome, telefone, WhatsApp, endereço,
  Instagram, Google Maps, horários, links de reserva e cardápio digital.
- **`src/data/content.ts`** — pratos, categorias do cardápio, galeria e depoimento.

Campos marcados com `confirmado: false` (ou `confirmar: true`) são
**placeholders de estrutura editável** — precisam ser validados com o
restaurante antes da publicação. Nenhum prato, preço, horário ou avaliação
foi inventado: o que não tinha fonte oficial virou placeholder.

## Fotografias

`public/assets/vicino/` contém as **fotografias oficiais** baixadas do site
atual (pratos, ambiente, adega, bar, fachada). Todas são exibidas com `alt`
descritivo, `loading="lazy"` (exceto o hero, com `fetchpriority="high"`) e
`object-cover` — nunca esticadas ou distorcidas.

Para trocar uma foto, substitua o arquivo mantendo o nome, ou atualize o
caminho em `src/data/content.ts`.

## Estrutura

```
src/
  components/   Header, Footer, MobileBar, ui (Reveal, SectionHeading, Button)
  sections/     Hero, About, Gastronomy, Dishes, MenuSection, Cellar,
                Ambience, Events, Social, Visit, FinalCTA
  data/         restaurantConfig.ts, content.ts
  App.tsx       Ordem das 12 seções da home
```

## Revisão pré-publicação (checklist)

- [ ] Confirmar endereço, CEP, telefone e WhatsApp com a casa
- [ ] Confirmar horários de almoço/jantar com a casa
- [ ] Preencher itens `confirmado: false` do cardápio com o cardápio oficial
- [ ] Confirmar preços (hoje exibimos “conforme cardápio do dia no salão”)
- [ ] Testar links de reserva (GetInApp), WhatsApp e cardápio digital
- [ ] Rodar Lighthouse e validar 320px → 1920px sem overflow horizontal
