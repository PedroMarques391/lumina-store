export const getBrandSvg = (icon: string) => {
  const svgs: Record<string, string> = {
    apple: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>`,
    samsung: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 7h2v10H3V7zm16 0h2v10h-2V7zm-4 0h2v10h-2V7zm-8 0h2v10H7V7zm4 0h2v10h-2V7z"/></svg>`,
    nike: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.78 18.84l7.82-4.38c.83-.47 1.74-.41 2.05.14.31.55-.09 1.42-.92 1.88L2.78 21.16c-.83.47-1.74.41-2.05-.14-.31-.55.09-1.42.92-1.88zm19.44-15.6c-.31-.55-1.22-.61-2.05-.14L4.83 10.54c-.83.47-1.23 1.33-.92 1.88.31.55 1.22.61 2.05.14L21.3 5.12c.83-.47 1.23-1.33.92-1.88z"/></svg>`,
    adidas: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 17.5l-2-3.46L2 17.5h6.5zm7-12L12 10l3.5 6.06 4.5-2.6L15.5 5.5zm-7 12L12 10l-3.5-6.06-4.5 2.6L8.5 17.5z"/></svg>`,
    sony: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 9h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H5V9zm1 1v4h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H6zm8-1h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-3V9zm1 1v4h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-2zm-4 4V9h1v5h-1z"/></svg>`,
    tiffany: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.18l6 3v9.64l-6 3-6-3V7.18l6-3z"/><circle cx="12" cy="12" r="3"/></svg>`,
    cartier: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg>`,
    gucci: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v7.64l-8 4-8-4V8.18l8-4z"/><path d="M8 10h8v4H8z"/></svg>`,
  }
  return svgs[icon] || svgs.apple
}
