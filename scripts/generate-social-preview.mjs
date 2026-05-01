import sharp from 'sharp';

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#141416"/>
      <stop offset="0.58" stop-color="#0c0c0d"/>
      <stop offset="1" stop-color="#17130c"/>
    </linearGradient>
    <radialGradient id="glowA" cx="20%" cy="18%" r="55%">
      <stop offset="0" stop-color="#6f322f" stop-opacity="0.42"/>
      <stop offset="1" stop-color="#6f322f" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="86%" cy="82%" r="45%">
      <stop offset="0" stop-color="#8a946c" stop-opacity="0.24"/>
      <stop offset="1" stop-color="#8a946c" stop-opacity="0"/>
    </radialGradient>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.86" numOctaves="4" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0.07"/>
      </feComponentTransfer>
    </filter>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect width="${width}" height="${height}" fill="url(#glowA)"/>
  <rect width="${width}" height="${height}" fill="url(#glowB)"/>
  <rect width="${width}" height="${height}" filter="url(#grain)" opacity="0.55"/>

  <rect x="64" y="58" width="1072" height="514" rx="34" fill="#fbf4e8" opacity="0.045"/>
  <rect x="64.5" y="58.5" width="1071" height="513" rx="33.5" fill="none" stroke="#fbf4e8" opacity="0.13"/>
  <rect x="96" y="90" width="66" height="66" rx="0" fill="none" stroke="#e8a832" stroke-width="2"/>
  <text x="129" y="132" text-anchor="middle" font-family="JetBrains Mono, Menlo, monospace" font-size="19" font-weight="600" letter-spacing="2.5" fill="#e8a832">IB</text>

  <text x="96" y="216" font-family="JetBrains Mono, Menlo, monospace" font-size="15" font-weight="600" letter-spacing="5" fill="#f0bc50">SOFTWARE ENGINEER &amp; WRITER</text>
  <text x="96" y="326" font-family="Georgia, 'Times New Roman', serif" font-size="88" font-style="italic" fill="#e8e4df">Building better teams,</text>
  <text x="96" y="418" font-family="Georgia, 'Times New Roman', serif" font-size="88" font-style="italic" fill="#e8e4df">habits, and software.</text>

  <text x="96" y="507" font-family="DM Sans, Arial, sans-serif" font-size="28" fill="#b8b1aa">Practical writing on delivery, leadership, communication, and engineering routines.</text>
  <text x="96" y="548" font-family="JetBrains Mono, Menlo, monospace" font-size="16" font-weight="600" letter-spacing="3" fill="#e8a832">IGORBARSI.COM</text>

  <path d="M937 160c49 0 89 40 89 89s-40 89-89 89-89-40-89-89 40-89 89-89Z" fill="#fbf4e8" opacity="0.055"/>
  <path d="M981 446h95" stroke="#e8a832" stroke-width="2" opacity="0.75"/>
  <path d="M1039 408l38 38-38 38" fill="none" stroke="#e8a832" stroke-width="2" opacity="0.75"/>
</svg>`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile('static/social-preview-2026.jpg');
