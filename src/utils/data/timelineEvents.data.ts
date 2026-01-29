interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: string
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2023',
    title: 'The Spark',
    description:
      "It started with a simple search for a gold ring that wouldn't fade in a week. Frustrated by disposable fashion and lackluster accessories, the concept of Lumina was born. We wanted quality that lasts.",
    icon: 'diamond',
  },
  {
    year: '2024',
    title: 'The First Collection',
    description:
      'We launched our pilot collection focusing solely on Fine Jewelry. We curated pieces that balanced modern minimalism with classic elegance. The response was immediate: people were hungry for affordable luxury.',
    icon: 'search',
  },
  {
    year: '2025',
    title: 'Weaving the Thread',
    description:
      'Jewelry was just the beginning. We expanded into Men\'s and Women\'s apparel, seeking fabrics that breathe and cuts that flatter. We partnered with sustainable suppliers to bring "Slow Fashion" values to our store.',
    icon: 'shirt',
  },
  {
    year: '2026',
    title: 'A Global Lifestyle',
    description:
      "Today, Lumina is more than a store; it's a style authority. From the perfect winter jacket to the necklace that completes the look, we define the modern wardrobe for thousands of customers worldwide.",
    icon: 'globe',
  },
]
