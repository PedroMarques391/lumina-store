import type { AboutSectionProps } from '@/components/about/AboutSections.vue'

export const aboutSections: AboutSectionProps[] = [
  {
    title: 'Escaping the Noise',
    paragraph1:
      'In a world of fast fashion and fleeting trends, finding pieces that truly define you can be overwhelming. We felt lost in a sea of generic designs and poor materials.',
    paragraph2:
      'Lumina started with a simple question: Where can we find pieces that look good today and even better tomorrow?   We decided to stop searching and start curating. What began as a personal mood board became a destination for style enthusiasts.',
    imagePath:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop',
    direction: 'left',
    backgroundColor: 'bg-base-100',
  },
  {
    title: 'Quality in Every Detail',
    paragraph1:
      "We believe that a simple gold ring or a well-fitted jacket can change your entire demeanor. It's not about having the most clothes; it's about having the *right* clothes.",
    paragraph2:
      "Our curation process is rigorous. We look for shine, durability, and comfort. If a piece doesn't make us feel special, it doesn't make it to the store.",
    imagePath:
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop',
    direction: 'right',
    backgroundColor: 'bg-base-200',
  },
]
