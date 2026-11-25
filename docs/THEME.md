# MasterVLSI — Theme & Design Document

The design language for mastervlsi.com. Read this before adding a page or component.

## 1. The idea

**"Friendly, clear, trustworthy."** The look follows modern Indian ed-tech (the reference is
pw.live): a white canvas, soft pastel washes, one indigo brand colour, rounded cards and a warm
humanist sans. A student or parent should feel the site is approachable in the first second, and
find fees, syllabus and contact numbers without hunting.

Three rules:

1. **Light and airy.** White or very lightly tinted sections. The footer is the only dark band.
2. **One brand colour.** Indigo marks actions and highlights. Pastels are for backgrounds only.
3. **Everything is a rounded card.** 12px radius, 1px border, soft shadow on hover.

## 2. Colour

Defined in `app/globals.css` under `@theme`. Token names are roles (kept from the first version so
pages did not need rewriting).

| Token | Hex | Use |
| --- | --- | --- |
| `volt` | `#5A4BDA` | **Brand indigo.** Buttons, links, active nav, highlighted words |
| `volt-hot` | `#7A5AF8` | Gradient partner for the CTA band, chip illustration |
| `ink` | `#1B2124` | Body and heading text |
| `slate` / `dim` | `#5F6570` | Secondary text (6:1 on white) |
| `paper` | `#FFFFFF` | Base background, cards |
| `mist` | `#F8F8F8` | Neutral alternate section |
| `rule` / `edge` | `#E4E7EC` | Card borders, dividers |
| — | `#F8F7FF` | Lavender section (`.on-dark`) and hero wash |
| — | `#F1F5FE` | Soft blue section (`.on-dark-2`) |
| — | `#FFF3E4` `#FFEEF0` `#E4F6FD` `#ECEBFF` | Pastel stat tiles (peach, pink, sky, lavender) |

The red tick in the logo stays brand red (`#E5252A`); it is the only red on the site.

**Sections.** Wrap every section in one of `.on-light` (white), `.on-mist` (grey), `.on-dark`
(lavender), `.on-dark-2` (soft blue) or `.on-night` (dark, footer only). The `on-dark` names are
historical: they are now light tinted sections. Inside them the colour variables are re-scoped, so
`bg-ink` gives a white card and `text-paper` gives dark text.

**Contrast.** White on indigo is 6.0:1. Never put indigo text on a pastel tile darker than `#ECEBFF`.

## 3. Typography

One family: **Reddit Sans** (variable), loaded with `next/font/google` in `app/layout.tsx`. It is
the typeface pw.live uses: rounded, open and very readable at small sizes.

| Class | Size / weight | Use |
| --- | --- | --- |
| `.display.t-hero` | 2.1 → 3.5rem, 700 | One per page, the `<h1>` |
| `.display.t-1` | 1.7 → 2.4rem, 700 | Section titles (centred) |
| `.display.t-2` | 1.35 → 1.75rem, 700 | Sub-section and big card titles |
| `.t-3` | 1.125rem, 600 | Card titles |
| `.lede` | 1 → 1.125rem | Intro paragraph, max 62 characters wide |
| `.eyebrow` | 0.8rem, 600, caps | Indigo pill label above a title |
| body | 16px, 400, line-height 1.6 | |

Numbers use tabular figures (`.mono`). One or two words in an `<h1>` may be coloured indigo.

## 4. Layout

- `.wrap` — max width 1240px, 20px side padding on phones, 40px from tablet up.
- `.section` — 56px vertical padding on phones, 88px on desktop.
- Section headings are centred (`SectionHead`): eyebrow pill, title, optional lede and link.
- Card grids: `cells grid gap-4` — every direct child becomes a rounded white card.
- Free-standing cards use `.card` (lifts 2px with a soft shadow on hover).
- Stats use `StatRow`: four pastel tiles.

## 5. Components

| Component | File | Notes |
| --- | --- | --- |
| Header | `components/Header.tsx` | Utility bar (desktop) + sticky nav + full-screen mobile menu |
| Footer | `components/Footer.tsx` | |
| Logo | `components/Logo.tsx` | Chip outline with the red tick + wordmark |
| ChipDie | `components/ChipDie.tsx` | Hero floorplan illustration (SVG, animated trace) |
| PageHero, SectionHead, StatRow, Marquee, Faq, CtaBand, Poster | `components/ui.tsx` | Building blocks for every page |
| Curriculum | `components/Curriculum.tsx` | Filterable 20-module list |
| EnquiryForm | `components/EnquiryForm.tsx` | Opens WhatsApp with a pre-filled message |
| Reveal | `components/Reveal.tsx` | Scroll-in fade for grid cells |

**Buttons** — `.btn` plus one of `.btn-primary` (indigo fill, white text), `.btn-ghost` (indigo outline),
`.btn-dark` / `.btn-onvolt` (only on the indigo CTA band). Sentence case, 48px tall, 8px radius. Labels are verbs:
"Book free demo", "Get directions".

## 6. Motion

Quiet. Everything is disabled under `prefers-reduced-motion`.

- Cards fade up 18px once as they enter the viewport (`Reveal`) and lift slightly on hover.
- Company marquee scrolls slowly and pauses on hover.
- The hero chip has one signal running round the die and small status lights pulsing.

## 7. Voice

- Direct and specific. Numbers over adjectives: "450 m from Krishnarajapuram station", not "well connected".
- Engineer-to-engineer. It is fine to say LTSSM, RAL or SDF without explaining them on course pages.
- Honest. Fee terms are stated plainly, including the strict ones.
- Sentence case everywhere except buttons and eyebrows.

## 8. Site architecture

Structure follows the pattern used by established VLSI institutes (courses → placement → about →
contact, with a utility bar for phone and email), extended with the campus and fee pages students
ask for most.

| Route | Purpose |
| --- | --- |
| `/` | Positioning, entry paths, program summary, flow, outcomes, campus, FAQ |
| `/courses` | Full 20-module curriculum, tools, poster download |
| `/courses/protocols` | AMBA, low-speed and high-speed protocol coverage |
| `/placements` | Records, hiring companies, alumni wall, placement process |
| `/campus` | Connectivity, nearby companies, PG accommodation with phone numbers |
| `/fees` | Fee, instalments, complete terms and conditions |
| `/corporate` | Design and verification services for companies |
| `/resources` | YouTube playlists and VLSI glossary |
| `/about` | Mission, method, comparison |
| `/contact` | Office contacts by purpose, address, map, enquiry form |
| `/demo` | Free demo booking |

## 9. Content

All copy, numbers, phone numbers and lists live in **`lib/data.ts`**. Change content there; pages
read from it. The institute's original flyers are in `public/media/`.
