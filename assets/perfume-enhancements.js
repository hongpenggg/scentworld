(function () {
  if (typeof document === 'undefined') return;

  const CATALOG = [
    { key: 'issey', name: "L'Eau d'Issey Pour Homme", brand: 'ISSEY MIYAKE', top: ["Yuzu", "Lemon", "Bergamot", "Lemon Verbena", "Mandarin", "Cypress", "Calone", "Coriander", "Sage", "Tarragon"], heart: ["Lotus", "Nutmeg", "Lily-of-the-valley", "Geranium", "Saffron", "Cinnamon"], base: ["Vetiver", "Musk", "Cedar", "Sandalwood", "Amber", "Tobacco"], description: 'Fresh aquatic citrus and spice with a clean woody dry-down.' },
    { key: 'adg', name: 'Acqua di Giò', brand: 'GIORGIO ARMANI', top: ['Lime', 'Lemon', 'Bergamot', 'Jasmine', 'Orange', 'Mandarin', 'Neroli'], heart: ['Sea Water', 'Jasmine', 'Calone', 'Rosemary', 'Peach', 'Freesia', 'Hyacinth', 'Violet', 'Coriander', 'Rose', 'Nutmeg'], base: ['White Musk', 'Cedar', 'Oakmoss', 'Patchouli', 'Amber'], description: 'Mediterranean marine freshness with aromatic herbs and woods.' },
    { key: 'eros', name: 'Eros EDT', brand: 'VERSACE', top: ['Mint', 'Apple', 'Lemon'], heart: ['Tonka Bean', 'Ambroxan', 'Geranium'], base: ['Vanilla', 'Virginian Cedar', 'Atlas Cedar', 'Vetiver', 'Oakmoss'], description: 'Fresh mint and apple over warm tonka, vanilla, and cedar.' },
    { key: 'yedp', name: 'Y Eau de Parfum', brand: 'YVES SAINT LAURENT', top: ['Apple', 'Ginger', 'Bergamot'], heart: ['Sage', 'Juniper Berry', 'Geranium'], base: ['Amber', 'Tonka Bean', 'Cedar', 'Vetiver', 'Frankincense'], description: 'Crisp aromatic woods with ambered depth.' },
    { key: 'santal33', name: 'Santal 33', brand: 'LE LABO', top: ['Sandalwood', 'Leather', 'Ambroxan'], heart: ['Papyrus', 'Virginian Cedar', 'Cardamom', 'Violet', 'Iris'], base: ['Amber'], description: 'Smoky sandalwood and leather with airy musks.' },
    { key: 'passage', name: "Passage d'Enfer", brand: "L'ARTISAN PARFUMEUR", top: ['Ginger', 'Rose'], heart: ['Frankincense', 'Lily-of-the-valley', 'Oud'], base: ['White Musk', 'Benzoin', 'Cedar', 'Sandalwood'], description: 'Incense-lily serenity with musky woods.' },
    { key: 'baie19', name: 'Baie 19', brand: 'LE LABO', top: ['Patchouli', 'Ozonic Notes', 'Green Leaves'], heart: ['Juniper Berry'], base: ['Ambroxan', 'Musk'], description: 'Petrichor-like greens, ozone, and modern musks.' },
    { key: 'another13', name: 'Another 13', brand: 'LE LABO', top: ['Pear', 'Apple', 'Bergamot'], heart: ['Ambrette', 'Amyl Salicylate', 'Moss', 'Jasmine'], base: ['Iso E Super', 'Cetalox', 'Helvetolide', 'Ambrettolide'], description: 'Skin-scent musks and abstract woody freshness.' },
    { key: 'englishpear', name: 'English Pear & Freesia', brand: 'JO MALONE', top: ['Pear', 'Melon'], heart: ['Freesia', 'Rose'], base: ['Musk', 'Patchouli', 'Rhubarb', 'Amber'], description: 'Juicy pear and freesia over soft musk and patchouli.' },
    { key: 'englishoak', name: 'English Oak & Hazelnut', brand: 'JO MALONE', top: ['Hazelnut'], heart: ['Cedar'], base: ['Oak'], description: 'Nutty woods with dry oak structure.' },
    { key: 'sauvage', name: 'Sauvage', brand: 'DIOR', top: ['Bergamot', 'Black Pepper'], heart: ['Sichuan Pepper', 'Lavender', 'Pink Pepper', 'Vetiver', 'Patchouli', 'Geranium', 'Elemi'], base: ['Ambroxan', 'Cedar', 'Labdanum'], description: 'Bright peppery freshness over ambroxan and woods.' },
    { key: 'bleu', name: 'Bleu de Chanel', brand: 'CHANEL', top: ['Grapefruit', 'Lemon', 'Mint', 'Pink Pepper'], heart: ['Ginger', 'Nutmeg', 'Jasmine', 'Iso E Super'], base: ['Incense', 'Cedar', 'Vetiver', 'Sandalwood', 'Patchouli', 'Labdanum', 'White Musk'], description: 'Fresh aromatic citrus with incense and woods.' },
    { key: 'chanel5', name: 'N°5', brand: 'CHANEL', top: ['Aldehyde', 'Ylang Ylang', 'Neroli', 'Bergamot', 'Lemon'], heart: ['Iris', 'Jasmine', 'Rose', 'Orris Root', 'Lily-of-the-valley'], base: ['Civet Musk', 'Musk', 'Sandalwood', 'Amber', 'Moss', 'Vanilla', 'Vetiver', 'Patchouli'], description: 'The archetypal aldehydic floral with plush musky base.' },
    { key: 'shalimar', name: 'Shalimar', brand: 'GUERLAIN', top: ['Bergamot', 'Lemon'], heart: ['Iris', 'Jasmine', 'Rose'], base: ['Vanilla', 'Opoponax', 'Civet', 'Incense'], description: 'Oriental pillar with rich vanilla-resin depth.' },
    { key: 'missdior', name: 'Miss Dior (Original/Chérie)', brand: 'DIOR', top: ['Galbanum', 'Green Leaves', 'Neroli'], heart: ['Rose', 'Jasmine', 'Lily-of-the-valley'], base: ['Oakmoss', 'Patchouli', 'Labdanum'], description: 'Green floral chypre structure with mossy elegance.' },
    { key: 'opium', name: 'Opium', brand: 'YVES SAINT LAURENT', top: ['Mandarin', 'Plum', 'Clove', 'Black Pepper'], heart: ['Jasmine', 'Rose', 'Carnation', 'Coriander'], base: ['Vetiver', 'Cedar', 'Sandalwood', 'Benzoin', 'Vanilla'], description: 'Spiced oriental with balsamic base.' },
    { key: 'ckone', name: 'CK One', brand: 'CALVIN KLEIN', top: ['Bergamot', 'Cardamom', 'Pineapple', 'Green Tea'], heart: ['Jasmine', 'Violet', 'Rose', 'Iris'], base: ['Musk', 'Amber', 'Sandalwood', 'Oakmoss'], description: 'Clean citrus-tea freshness with transparent musk woods.' },
    { key: 'angel', name: 'Angel', brand: 'THIERRY MUGLER', top: ['Bergamot', 'Melon', 'Mandarin'], heart: ['Honey', 'Chocolate', 'Caramel'], base: ['Patchouli', 'Vanilla', 'Musk'], description: 'Era-defining gourmand patchouli signature.' },
    { key: 'lightblue', name: 'Light Blue', brand: 'DOLCE & GABBANA', top: ['Lemon', 'Apple', 'Cedar'], heart: ['Bamboo', 'Jasmine', 'White Rose'], base: ['Cedar', 'Musk', 'Amber'], description: 'Crisp Mediterranean citrus-fruity floral.' },
    { key: 'flowerbomb', name: 'Flowerbomb', brand: 'VIKTOR & ROLF', top: ['Bergamot', 'Green Tea'], heart: ['Jasmine', 'Rose', 'Freesia', 'Orchid'], base: ['Patchouli', 'Musk', 'Amber'], description: 'Explosive floral bouquet with warm patchouli-musk dry-down.' },
    { key: 'aventus', name: 'Aventus', brand: 'CREED', top: ['Pineapple', 'Bergamot', 'Blackcurrant', 'Apple'], heart: ['Birch', 'Patchouli', 'Jasmine', 'Rose'], base: ['Oakmoss', 'Ambergris', 'Musk', 'Vanilla'], description: 'Fruity-smoky woods that redefined modern masculine trends.' },
    { key: 'blackorchid', name: 'Black Orchid', brand: 'TOM FORD', top: ['Black Truffle', 'Ylang Ylang', 'Bergamot'], heart: ['Black Orchid', 'Spice', 'Jasmine'], base: ['Patchouli', 'Vanilla', 'Sandalwood', 'Dark Chocolate', 'Incense'], description: 'Dark opulent floral-oriental.' },
    { key: 'oudwood', name: 'Oud Wood', brand: 'TOM FORD', top: ['Rosewood', 'Cardamom'], heart: ['Oud', 'Sandalwood', 'Vetiver'], base: ['Amber', 'Tonka Bean', 'Vanilla'], description: 'Smooth oud with creamy woods and amber warmth.' },
    { key: 'portraitlady', name: 'Portrait of a Lady', brand: 'FREDERIC MALLE', top: ['Blackcurrant', 'Bergamot'], heart: ['Rose', 'Raspberry', 'Patchouli'], base: ['Sandalwood', 'Musk', 'Incense', 'Frankincense'], description: 'Grand rose-patchouli with deep incense trail.' },
    { key: 'tobaccovanille', name: 'Tobacco Vanille', brand: 'TOM FORD', top: ['Tobacco', 'Spices'], heart: ['Tobacco Flower', 'Jasmine', 'Vanilla'], base: ['Tonka Bean', 'Amber', 'Vetiver', 'Cocoa'], description: 'Rich tobacco vanilla with plush spice.' },
    { key: 'br540', name: 'Baccarat Rouge 540', brand: 'MAISON FRANCIS KURKDJIAN', top: ['Jasmine', 'Saffron'], heart: ['Amberwood', 'Ambergris'], base: ['Fir Resin', 'Cedar'], description: 'Radiant amber-woody signature.' },
    { key: 'ambrenuit', name: 'Ambre Nuit', brand: 'DIOR (DIOR PRIVÉE)', top: ['Bergamot', 'Pink Pepper'], heart: ['Rose', 'Amber'], base: ['Cashmeran', 'Labdanum'], description: 'Soft spicy rose amber with resinous finish.' },
    { key: 'fahrenheit', name: 'Fahrenheit', brand: 'DIOR', top: ['Violet Leaf', 'Lavender', 'Nutmeg', 'Hawthorn'], heart: ['Honeysuckle', 'Carnation', 'Cedar', 'Leather'], base: ['Sandalwood', 'Vetiver', 'Amber', 'Musk'], description: 'Iconic violet-leather contrast.' },
    { key: 'pologreen', name: 'Polo Green', brand: 'RALPH LAUREN', top: ['Pine', 'Basil', 'Artemisia', 'Juniper'], heart: ['Leather', 'Tobacco', 'Jasmine'], base: ['Oakmoss', 'Patchouli', 'Vetiver', 'Cedar'], description: 'Classic aromatic chypre with rugged character.' },
    { key: 'amenpuremalt', name: 'A*Men (Pure Malt)', brand: 'THIERRY MUGLER', top: ['Patchouli', 'Lavender'], heart: ['Caramel', 'Coffee', 'Tobacco'], base: ['Woody Notes', 'Musk', 'Amber'], description: 'Boozy gourmand woody profile.' },
    { key: 'pourunhomme', name: 'Pour Un Homme de Caron', brand: 'CARON', top: ['Bergamot', 'Lavender'], heart: ['Lavender'], base: ['Vanilla', 'Musk', 'Amber'], description: 'Heritage lavender-vanilla benchmark.' },
    { key: 'neroliportofino', name: 'Neroli Portofino', brand: 'TOM FORD', top: ['Neroli', 'Lemon Verbena', 'Mandarin'], heart: ['Neroli', 'Jasmine', 'Orange Blossom'], base: ['Amber', 'Musk', 'Oakmoss'], description: 'Sparkling neroli citrus cologne style.' },
    { key: 'moondust', name: 'Moon Dust', brand: 'BYREDO', top: ['Violet', 'Magnolia'], heart: ['Vetiver', 'Leather'], base: ['Ambroxan', 'White Musk'], description: 'Powdery-floral metallic woods with musky modernity.' },
    { key: 'fleurdumal', name: 'Fleur du Mal', brand: 'SERGE LUTENS', top: ['Cardamom', 'Lemon'], heart: ['Tuberose', 'Rose', 'Jasmine', 'Ylang Ylang'], base: ['Oud', 'Musk', 'Vanilla', 'Myrrh'], description: 'Spiced white floral with dark oriental base.' }
  ];

  const profiles = {
    Aftershave: { range: '<3%', longevity: '1-2h', sillage: 'Skin-close' },
    EDC: { range: '3-8%', longevity: '2-4h', sillage: 'Light' },
    EDT: { range: '8-15%', longevity: '4-6h', sillage: 'Moderate' },
    EDP: { range: '15-20%', longevity: '6-8h', sillage: 'Moderate-Strong' },
    Parfum: { range: '20-40%', longevity: '8-12h+', sillage: 'Strong' }
  };
  const solvents = {
    'Ethanol 95%': 'Fast lift and clear top note sparkle.',
    IPM: 'Silkier skin feel and smoother diffusion.',
    DPG: 'Slower evaporation and rounder heart.',
    'Fractionated coconut oil': 'Oil-perfume behaviour: closer and slower dry-down.'
  };
  const fixatives = new Set(['Labdanum', 'Benzoin', 'Iso E Super', 'Ambroxan', 'Musk', 'White Musk', 'Amber', 'Ambergris', 'Cashmeran', 'Oakmoss', 'Patchouli', 'Myrrh', 'Frankincense']);
  const ifraMap = { Oakmoss: 'Restricted: keep very low (% depends on category).', 'Musk Ambrette': 'Prohibited/restricted in modern IFRA.', Bergamot: 'Use bergapten-free quality or lower usage.', Civet: 'Animalic materials may be restricted and ethically constrained.' };
  const tutorials = {
    'Build a classic fougère': [{ title: 'Bright top', why: 'Open with freshness.', notes: [{ l: 'top', n: 'Bergamot' }, { l: 'top', n: 'Lavender' }] }, { title: 'Aromatic heart', why: 'Add herbal structure.', notes: [{ l: 'heart', n: 'Geranium' }, { l: 'heart', n: 'Sage' }] }, { title: 'Mossy base', why: 'Create classic fougère trail.', notes: [{ l: 'base', n: 'Oakmoss' }, { l: 'base', n: 'Vetiver' }, { l: 'base', n: 'Tonka Bean' }] }],
    'Construct a chypre': [{ title: 'Citrus opening', why: 'Traditional start.', notes: [{ l: 'top', n: 'Bergamot' }] }, { title: 'Floral heart', why: 'Adds body and elegance.', notes: [{ l: 'heart', n: 'Rose' }, { l: 'heart', n: 'Jasmine' }] }, { title: 'Moss-patchouli base', why: 'Defines chypre DNA.', notes: [{ l: 'base', n: 'Oakmoss' }, { l: 'base', n: 'Patchouli' }, { l: 'base', n: 'Labdanum' }] }],
    'Layer an oriental': [{ title: 'Spice start', why: 'Spark warmth.', notes: [{ l: 'top', n: 'Mandarin' }, { l: 'top', n: 'Cardamom' }] }, { title: 'Floral heart', why: 'Round the spices.', notes: [{ l: 'heart', n: 'Rose' }, { l: 'heart', n: 'Jasmine' }] }, { title: 'Resin-vanilla base', why: 'Long sensual dry-down.', notes: [{ l: 'base', n: 'Benzoin' }, { l: 'base', n: 'Vanilla' }, { l: 'base', n: 'Labdanum' }] }]
  };
  const presetAccords = [{ name: 'Rose Accord', notes: ['Rose', 'Geranium', 'Linalool'] }, { name: 'Fougère Accord', notes: ['Lavender', 'Oakmoss', 'Coumarin', 'Bergamot'] }, { name: 'Chypre Accord', notes: ['Bergamot', 'Rose', 'Patchouli', 'Oakmoss'] }, { name: 'Amber Accord', notes: ['Labdanum', 'Vanilla', 'Benzoin'] }];
  const noteMeta = { Rose: ['Rosa species', 'solvent extraction / distillation', 'petal, dewy floral', 'Miss Dior, Portrait of a Lady'], Jasmine: ['Jasminum spp.', 'solvent extraction', 'narcotic white floral', 'N°5, Flowerbomb'], Bergamot: ['Citrus bergamia', 'cold expression', 'sparkling citrus', 'cologne/chypre openings'], Sandalwood: ['Santalum spp.', 'distillation / synthesis', 'creamy woody', 'Santal 33, Oud Wood'], Patchouli: ['Pogostemon cablin', 'steam distillation', 'earthy woody', 'Angel, Flowerbomb'] };

  let state = { concentrations: {}, concentrationType: 'EDP', solvent: 'Ethanol 95%', timeline: 2, customAccords: [] };
  const families14 = ['Floral', 'Woody', 'Citrus', 'Fruit', 'Greens', 'Musks', 'Warm Spices', 'Synthetic', 'Gourmand', 'Aquatic', 'Resinous', 'Boozy', 'Earthy', 'Animalic'];

  const getFamily = (n) => {
    try {
      if (typeof getNoteFamily === 'function') return getNoteFamily(n);
      for (const [f, notes] of Object.entries(families || {})) if (notes.includes(n)) return f;
    } catch (_) {}
    return 'Synthetic';
  };
  const mix = () => (typeof currentMix === 'object' && currentMix ? currentMix : { top: [], heart: [], base: [] });
  const entries = () => ['top', 'heart', 'base'].flatMap((l) => (mix()[l] || []).map((x) => ({ layer: l, name: x.name, family: x.family || getFamily(x.name), id: `${l}::${x.name}` })));
  const total = () => Math.round(Object.values(state.concentrations).reduce((a, b) => a + Number(b || 0), 0) * 10) / 10;
  const locked = () => Math.abs(total() - 100) <= 0.2;
  const pct = (e) => Number(state.concentrations[e.id] || 0);
  const refreshScene = () => { if (typeof calculateScene === 'function') calculateScene(); if (typeof generateStandardScene === 'function') generateStandardScene(); };

  function normalize() {
    const keys = Object.keys(state.concentrations);
    if (!keys.length) return;
    const s = keys.reduce((a, k) => a + Number(state.concentrations[k] || 0), 0) || 1;
    keys.forEach((k) => (state.concentrations[k] = Math.round((state.concentrations[k] / s) * 1000) / 10));
    state.concentrations[keys[keys.length - 1]] = Math.round((state.concentrations[keys[keys.length - 1]] + (100 - total())) * 10) / 10;
  }
  function syncConcentrations() {
    const all = entries();
    const keep = new Set(all.map((e) => e.id));
    Object.keys(state.concentrations).forEach((k) => !keep.has(k) && delete state.concentrations[k]);
    if (!all.length) return;
    const missing = all.filter((e) => state.concentrations[e.id] == null);
    if (missing.length) {
      const v = Math.round((100 / all.length) * 10) / 10;
      all.forEach((e) => state.concentrations[e.id] = state.concentrations[e.id] == null ? v : state.concentrations[e.id]);
      normalize();
    }
  }
  function applyDominance() {
    const map = { top: '#zone-top', heart: '#zone-heart', base: '#zone-base' };
    entries().forEach((e) => {
      const z = document.querySelector(map[e.layer]);
      if (!z) return;
      const chip = Array.from(z.querySelectorAll('.note-chip')).find((c) => c.textContent.replace('×', '').trim() === e.name);
      if (!chip) return;
      const p = pct(e);
      chip.style.opacity = String(Math.min(1, 0.45 + p / 85));
      chip.style.transform = `scale(${Math.min(1.2, 0.88 + p / 150)})`;
    });
  }
  function encodeFormula() { return entries().map((e) => `${encodeURIComponent(e.name)}:${Math.round(pct(e))}:${e.layer}`).join(','); }
  function decodeFormula(s) {
    return (s || '').split(',').map((x) => { const [n, p, l] = x.split(':'); return { name: decodeURIComponent(n || ''), pct: Number(p || 0), layer: l || 'heart' }; }).filter((x) => x.name && ['top', 'heart', 'base'].includes(x.layer));
  }
  function addFromFormula(list) {
    if (typeof addNote !== 'function' || !list.length) return;
    if (typeof resetPyramid === 'function') resetPyramid();
    list.forEach((x) => addNote(x.layer, x.name, getFamily(x.name), true));
    refreshScene();
    entries().forEach((e) => {
      const src = list.find((x) => x.name === e.name && x.layer === e.layer);
      if (src) state.concentrations[e.id] = src.pct;
    });
    normalize();
  }
  function ifraWarnings() {
    return entries().map((e) => e.name).filter((n) => ifraMap[n]).map((n) => `${n}: ${ifraMap[n]}`);
  }
  function fixation() {
    const bs = entries().filter((e) => e.layer === 'base');
    const fixed = bs.filter((e) => fixatives.has(e.name)).reduce((s, e) => s + pct(e), 0);
    return { score: Math.max(0, Math.min(100, Math.round(fixed * 1.4 + bs.length * 4))), fixed };
  }
  function similar() {
    const vec = Object.fromEntries(families14.map((f) => [f, 0]));
    entries().forEach((e) => vec[e.family] = (vec[e.family] || 0) + pct(e));
    const cos = (a, b) => {
      let d = 0, na = 0, nb = 0;
      families14.forEach((f) => { d += (a[f] || 0) * (b[f] || 0); na += (a[f] || 0) ** 2; nb += (b[f] || 0) ** 2; });
      return !na || !nb ? 0 : d / (Math.sqrt(na) * Math.sqrt(nb));
    };
    return CATALOG.map((p) => {
      const v = Object.fromEntries(families14.map((f) => [f, 0]));
      [...p.top, ...p.heart, ...p.base].forEach((n) => v[getFamily(n)] = (v[getFamily(n)] || 0) + 1);
      return { name: p.name, score: Math.round(cos(vec, v) * 100) };
    }).sort((a, b) => b.score - a.score).slice(0, 3);
  }

  function installStyles() {
    if (document.getElementById('sw-enhance-style')) return;
    const s = document.createElement('style');
    s.id = 'sw-enhance-style';
    s.textContent = `.sw-panel{margin-top:1rem;padding:1rem;border:1px solid rgba(120,120,120,.2);border-radius:16px;background:rgba(255,255,255,.8)}.sw-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:.8rem}.sw-card{background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:12px;padding:.7rem}.sw-title{font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:#666;font-weight:700;margin-bottom:.45rem}.sw-small{font-size:.75rem;color:#4b5563}.sw-muted{color:#9ca3af}.sw-row{display:flex;align-items:center;justify-content:space-between;gap:.5rem}.sw-input{width:100%}.sw-badge{display:inline-flex;padding:.1rem .45rem;border-radius:999px;font-size:.62rem;border:1px solid rgba(0,0,0,.12)}.sw-badge.green{background:#dcfce7;color:#166534}.sw-badge.amber{background:#fef3c7;color:#92400e}.sw-badge.red{background:#fee2e2;color:#991b1b}.sw-wheel{width:160px;height:160px;border-radius:50%;margin:auto;border:1px solid #ddd}.sw-radar{width:100%;height:180px}.sw-matrix td,.sw-matrix th{border:1px solid #e5e7eb;padding:.2rem .35rem;font-size:.62rem;text-align:center}.sw-note-panel{position:fixed;right:16px;bottom:16px;width:300px;max-width:85vw;z-index:1200;background:#fff;border:1px solid #ddd;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.15);padding:.8rem;display:none}.sw-note-panel.open{display:block}`;
    document.head.appendChild(s);
  }
  function syncCatalog() {
    if (typeof iconicPerfumes !== 'object') return;
    Object.keys(iconicPerfumes).forEach((k) => delete iconicPerfumes[k]);
    CATALOG.forEach((p) => iconicPerfumes[p.key] = { name: p.name, brand: p.brand, top: p.top, heart: p.heart, base: p.base, description: p.description });
    document.querySelectorAll('.perfume-dropdown').forEach((d) => {
      d.innerHTML = '';
      CATALOG.forEach((p) => {
        const i = document.createElement('div'); i.className = 'perfume-item'; i.onclick = () => typeof loadPerfume === 'function' && loadPerfume(p.key);
        i.innerHTML = `<div class="perfume-item-name">${p.name}</div><div class="perfume-item-brand">${p.brand}</div>`;
        d.appendChild(i);
      });
    });
  }
  function buildPanel() {
    if (document.getElementById('sw-advanced-panel')) return;
    const host = document.querySelector('.layout-wrapper')?.parentElement || document.querySelector('main .max-w-3xl')?.parentElement || document.querySelector('main') || document.body;
    const panel = document.createElement('section');
    panel.id = 'sw-advanced-panel';
    panel.className = 'sw-panel';
    panel.innerHTML = `<div class="sw-title">Advanced Perfumery R&D Panel</div><div class="sw-grid"><div class="sw-card"><div class="sw-title">Formula concentration</div><div id="sw-conc-list"></div><div class="sw-row"><span class="sw-small">Total</span><span id="sw-total" class="sw-badge amber">0%</span></div><button id="sw-normalize" type="button" class="sw-small">Normalize to 100%</button></div><div class="sw-card"><div class="sw-title">Concentration / solvent</div><label class="sw-small">Type <select id="sw-type">${Object.keys(profiles).map((k) => `<option>${k}</option>`).join('')}</select></label><br><label class="sw-small">Carrier <select id="sw-solvent">${Object.keys(solvents).map((k) => `<option>${k}</option>`).join('')}</select></label><div id="sw-long" class="sw-small" style="margin-top:.4rem"></div><div id="sw-solvent-desc" class="sw-small sw-muted"></div></div><div class="sw-card"><div class="sw-title">Fixation / volatility</div><div id="sw-fix" class="sw-small"></div><input id="sw-time" type="range" min="0" max="12" step="0.5" value="2" class="sw-input"><div id="sw-time-label" class="sw-small"></div><div id="sw-active" class="sw-small sw-muted"></div></div><div class="sw-card"><div class="sw-title">IFRA + allergens</div><div id="sw-ifra" class="sw-small"></div><div id="sw-allergen" class="sw-small" style="margin-top:.3rem"></div></div><div class="sw-card"><div class="sw-title">Accords builder</div><div id="sw-accords"></div><div class="sw-row" style="margin-top:.35rem"><input id="sw-accord-name" class="sw-input" placeholder="Custom accord"><input id="sw-accord-notes" class="sw-input" placeholder="rose,geranium,linalool"></div><button id="sw-save-accord" type="button" class="sw-small">Save custom accord</button></div><div class="sw-card"><div class="sw-title">Interaction matrix</div><div id="sw-matrix"></div></div><div class="sw-card"><div class="sw-title">Cost estimator + sharing</div><div id="sw-cost" class="sw-small"></div><div class="sw-row"><button id="sw-copy-link" class="sw-small" type="button">Copy shareable link</button><span id="sw-copy-state" class="sw-small sw-muted"></span></div></div><div class="sw-card"><div class="sw-title">Scent wheel</div><div id="sw-wheel" class="sw-wheel"></div><div id="sw-wheel-text" class="sw-small"></div></div><div class="sw-card"><div class="sw-title">Family radar + similar</div><svg id="sw-radar" class="sw-radar" viewBox="0 0 240 180"></svg><div id="sw-similar" class="sw-small"></div></div><div class="sw-card"><div class="sw-title">Guided tutorials</div><select id="sw-tutorial" class="sw-input">${Object.keys(tutorials).map((t) => `<option>${t}</option>`).join('')}</select><div id="sw-tutorial-steps" class="sw-small"></div></div><div class="sw-card" id="sw-persona-card" style="display:${/scentworldai|gemini/i.test(location.pathname) ? 'block' : 'none'}"><div class="sw-title">AI Persona profiler</div><div id="sw-persona" class="sw-small"></div></div></div>`;
    host.appendChild(panel);
    let notePanel = document.getElementById('sw-note-panel');
    if (!notePanel) {
      notePanel = document.createElement('aside');
      notePanel.id = 'sw-note-panel';
      notePanel.className = 'sw-note-panel';
      notePanel.innerHTML = `<div class="sw-row"><strong id="sw-note-title">Note</strong><button id="sw-note-close" type="button">×</button></div><div id="sw-note-body" class="sw-small" style="margin-top:.35rem"></div>`;
      document.body.appendChild(notePanel);
      notePanel.querySelector('#sw-note-close').onclick = () => notePanel.classList.remove('open');
    }
    panel.querySelector('#sw-normalize').onclick = () => { normalize(); render(); };
    panel.querySelector('#sw-type').onchange = (e) => { state.concentrationType = e.target.value; render(); };
    panel.querySelector('#sw-solvent').onchange = (e) => { state.solvent = e.target.value; render(); };
    panel.querySelector('#sw-time').oninput = (e) => { state.timeline = Number(e.target.value); render(); };
    panel.querySelector('#sw-save-accord').onclick = () => {
      const name = panel.querySelector('#sw-accord-name').value.trim();
      const notes = panel.querySelector('#sw-accord-notes').value.split(',').map((x) => x.trim()).filter(Boolean);
      if (!name || !notes.length) return;
      state.customAccords.push({ name, notes });
      panel.querySelector('#sw-accord-name').value = '';
      panel.querySelector('#sw-accord-notes').value = '';
      render();
    };
    panel.querySelector('#sw-copy-link').onclick = async () => {
      const u = new URL(location.href); u.searchParams.set('formula', encodeFormula());
      try { await navigator.clipboard.writeText(u.toString()); panel.querySelector('#sw-copy-state').textContent = 'Copied'; } catch (_) { panel.querySelector('#sw-copy-state').textContent = 'Copy failed'; }
      setTimeout(() => panel.querySelector('#sw-copy-state').textContent = '', 1500);
    };
    panel.querySelector('#sw-tutorial').onchange = () => renderTutorial();
    document.addEventListener('click', (ev) => {
      const chip = ev.target.closest('.note-chip[data-note]'); if (!chip) return;
      const n = chip.dataset.note, d = noteMeta[n] || ['Varies', 'Distillation/extraction/synthesis', `${getFamily(n)} descriptor`, 'Used in classic and modern perfumery'];
      const p = document.getElementById('sw-note-panel');
      p.querySelector('#sw-note-title').textContent = n;
      p.querySelector('#sw-note-body').innerHTML = `<div><strong>Botanical/material origin:</strong> ${d[0]}</div><div><strong>Extraction method:</strong> ${d[1]}</div><div><strong>Olfactory descriptor:</strong> ${d[2]}</div><div><strong>Famous uses:</strong> ${d[3]}</div>`;
      p.classList.add('open');
    });
  }
  function renderTutorial() {
    const panel = document.getElementById('sw-advanced-panel'); if (!panel) return;
    const key = panel.querySelector('#sw-tutorial').value;
    const steps = tutorials[key] || [];
    panel.querySelector('#sw-tutorial-steps').innerHTML = steps.map((s, i) => `<div style="margin:.3rem 0"><strong>${i + 1}. ${s.title}</strong><div class="sw-muted">${s.why}</div><button type="button" class="sw-small sw-step" data-i="${i}">Load step</button></div>`).join('');
    panel.querySelectorAll('.sw-step').forEach((b) => b.onclick = () => {
      const s = steps[Number(b.dataset.i)];
      if (!s || typeof addNote !== 'function') return;
      if (typeof resetPyramid === 'function') resetPyramid();
      s.notes.forEach((n) => addNote(n.l, n.n, getFamily(n.n), true));
      refreshScene(); render();
    });
  }
  function render() {
    syncConcentrations();
    const panel = document.getElementById('sw-advanced-panel'); if (!panel) return;
    const list = entries();
    panel.querySelector('#sw-conc-list').innerHTML = list.map((e) => `<div class="sw-small"><div class="sw-row"><span>${e.name} <span class="sw-muted">(${e.layer})${e.layer === 'base' && fixatives.has(e.name) ? ' 🧷' : ''}</span></span><span>${pct(e).toFixed(1)}%</span></div><input type="range" min="0" max="100" step="0.5" value="${pct(e)}" data-id="${e.id}" class="sw-input sw-conc"></div>`).join('') || '<div class="sw-small sw-muted">Add notes to configure concentration.</div>';
    panel.querySelectorAll('.sw-conc').forEach((x) => x.oninput = () => { state.concentrations[x.dataset.id] = Number(x.value); render(); });
    panel.querySelector('#sw-total').textContent = `${total().toFixed(1)}% ${locked() ? '🔒 locked' : '🔓 unlock'}`;
    panel.querySelector('#sw-total').className = `sw-badge ${locked() ? 'green' : 'amber'}`;
    panel.querySelector('#sw-type').value = state.concentrationType;
    panel.querySelector('#sw-solvent').value = state.solvent;
    const p = profiles[state.concentrationType];
    panel.querySelector('#sw-long').innerHTML = `Oil concentration: <strong>${state.concentrationType}</strong> (${p.range})<br>Estimated longevity: ${p.longevity}<br>Estimated sillage: ${p.sillage}<br>Projection: strong (first hour) → moderate (2–4 hrs) → skin-close (4–8 hrs).`;
    panel.querySelector('#sw-solvent-desc').textContent = solvents[state.solvent];
    const f = fixation();
    panel.querySelector('#sw-fix').innerHTML = `Fixation score: <strong>${f.score}/100</strong> · Fixative share: ${f.fixed.toFixed(1)}%`;
    panel.querySelector('#sw-time').value = String(state.timeline);
    panel.querySelector('#sw-time-label').textContent = `Volatility timeline preview: ${state.timeline}h`;
    panel.querySelector('#sw-active').textContent = `Active notes now: ${(state.timeline <= 0.5 ? mix().top : state.timeline <= 4 ? mix().heart : mix().base).map((n) => n.name).join(', ') || 'none'}`;
    const warns = ifraWarnings();
    panel.querySelector('#sw-ifra').innerHTML = warns.length ? warns.map((w) => `⚠️ ${w}`).join('<br>') : '<span class="sw-muted">No mapped restricted notes flagged.</span>';
    const allergens = Array.from(new Set(entries().flatMap((e) => ({ Bergamot: ['linalool', 'limonene'], Lemon: ['limonene', 'citral'], Orange: ['limonene'], Rose: ['citronellol', 'geraniol'], Jasmine: ['benzyl benzoate', 'linalool'], Lavender: ['linalool'], Oakmoss: ['evernia prunastri extract'], Ylang: ['isoeugenol'], Cinnamon: ['cinnamal'] }[e.name] || [])))).sort();
    panel.querySelector('#sw-allergen').textContent = `This formula contains: ${allergens.join(', ') || 'none of the mapped 26 allergens'}.`;
    const accordData = [...presetAccords, ...state.customAccords];
    panel.querySelector('#sw-accords').innerHTML = accordData.map((a, i) => `<div class="sw-row"><span class="sw-small"><strong>${a.name}</strong> = ${a.notes.join(' + ')}</span><button type="button" class="sw-apply" data-i="${i}">Apply</button></div>`).join('');
    panel.querySelectorAll('.sw-apply').forEach((b) => b.onclick = () => accordData[Number(b.dataset.i)].notes.forEach((n, i) => addNote(i === 0 ? 'top' : i === 1 ? 'heart' : 'base', n, getFamily(n))));
    const notes = list.slice(0, 6).map((x) => x.name);
    const t = (a, b) => ({ 'Calone|Labdanum': 'red', 'Hedione|Jasmine': 'green', 'Bergamot|Oakmoss': 'green', 'Rose|Patchouli': 'green', 'Vanilla|Incense': 'amber' }[[a, b].sort().join('|')] || 'amber');
    panel.querySelector('#sw-matrix').innerHTML = notes.length > 1 ? `<table class="sw-matrix" style="border-collapse:collapse;width:100%"><thead><tr><th></th>${notes.map((n) => `<th>${n.slice(0, 8)}</th>`).join('')}</tr></thead><tbody>${notes.map((r) => `<tr><th>${r.slice(0, 8)}</th>${notes.map((c) => r === c ? '<td>—</td>' : `<td style="background:${t(r, c) === 'green' ? '#bbf7d0' : t(r, c) === 'red' ? '#fecaca' : '#fef3c7'}">${t(r, c)}</td>`).join('')}</tr>`).join('')}</tbody></table>` : '<span class="sw-muted">Select at least 2 notes.</span>';
    const cost = list.reduce((s, e) => {
      const q = pct(e) / 100;
      const v = ['Oud', 'Ambergris', 'Iris', 'Saffron'].includes(e.name) ? 18 : ['Sandalwood', 'Patchouli', 'Neroli', 'Vanilla'].includes(e.name) ? 5.5 : 1.2;
      return s + v * q;
    }, 0);
    panel.querySelector('#sw-cost').innerHTML = `Estimated material tier: <strong>${cost > 18 ? 'luxury' : cost > 8 ? 'expensive' : cost > 3.5 ? 'moderate' : 'cheap'}</strong><br>Estimated cost-per-gram: <strong>$${cost.toFixed(2)}</strong>`;
    const bal = Object.fromEntries(families14.map((f) => [f, 0]));
    list.forEach((e) => bal[e.family] = (bal[e.family] || 0) + pct(e));
    const sum = families14.reduce((s, f) => s + bal[f], 0) || 1;
    let c = 0;
    panel.querySelector('#sw-wheel').style.background = `conic-gradient(${families14.map((f) => { const span = bal[f] / sum * 360, out = `${bal[f] ? 'rgba(212,175,55,0.85)' : 'rgba(229,231,235,0.95)'} ${c}deg ${c + span}deg`; c += span; return out; }).join(',')})`;
    const activeFamilies = families14.filter((f) => bal[f] > 0);
    panel.querySelector('#sw-wheel-text').textContent = `Covered: ${activeFamilies.join(', ') || 'none'} · Gaps: ${families14.filter((f) => !activeFamilies.includes(f)).slice(0, 4).join(', ') || 'none'}`;
    const cx = 120, cy = 88, r = 64;
    const points = families14.map((f, i) => { const a = Math.PI * 2 * i / families14.length - Math.PI / 2, rr = Math.min(100, bal[f]) / 100 * r; return `${cx + Math.cos(a) * rr},${cy + Math.sin(a) * rr}`; }).join(' ');
    panel.querySelector('#sw-radar').innerHTML = `${families14.map((_, i) => { const a = Math.PI * 2 * i / families14.length - Math.PI / 2; return `<line x1="${cx}" y1="${cy}" x2="${cx + Math.cos(a) * r}" y2="${cy + Math.sin(a) * r}" stroke="#e5e7eb"/>`; }).join('')}<polygon points="${points}" fill="rgba(212,175,55,.25)" stroke="#b45309" stroke-width="1.2"/>`;
    panel.querySelector('#sw-similar').innerHTML = similar().map((x) => `${x.score}% similar to ${x.name}`).join('<br>') || 'No similarity signal yet.';
    if (panel.querySelector('#sw-persona-card')?.style.display !== 'none') {
      const dom = Object.keys(Object.fromEntries(entries().map((e) => [e.family, 0]).map(([f]) => [f, entries().filter((e) => e.family === f).length]))).sort((a, b) => entries().filter((e) => e.family === b).length - entries().filter((e) => e.family === a).length)[0] || 'Balanced';
      const season = dom === 'Citrus' || dom === 'Aquatic' ? 'Spring / Summer' : dom === 'Woody' || dom === 'Resinous' ? 'Autumn / Winter' : 'All-season';
      const gender = dom === 'Floral' ? 'Unisex leaning feminine' : dom === 'Woody' ? 'Unisex leaning masculine' : 'Unisex';
      panel.querySelector('#sw-persona').innerHTML = `Ideal wearer: ${dom.toLowerCase()}-loving, style-conscious profile (approx. 24–42), versatile city-to-evening.<br><strong>Season suitability:</strong> ${season}<br><strong>Gender suitability:</strong> ${gender}`;
    }
    renderTutorial();
    applyDominance();
    const u = new URL(location.href); u.searchParams.set('formula', encodeFormula()); history.replaceState({}, '', u.toString());
  }
  function hook() {
    ['addNote', 'removeNote', 'resetPyramid', 'loadPerfume', 'drop'].forEach((k) => {
      const fn = window[k];
      if (typeof fn !== 'function' || fn.__swHooked) return;
      window[k] = function (...args) { const out = fn.apply(this, args); setTimeout(render, 0); return out; };
      window[k].__swHooked = true;
    });
  }
  function init() {
    installStyles();
    syncCatalog();
    buildPanel();
    hook();
    const formula = new URL(location.href).searchParams.get('formula');
    if (formula) addFromFormula(decodeFormula(formula));
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
