<div align="center">

# 🌸 ScentWorld

### *The Olfactory Playground*

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://hongpenggg.github.io/scentworld/)
[![AI Version](https://img.shields.io/badge/AI-powered-blueviolet?style=for-the-badge)](https://hongpenggg.github.io/scentworld/gemini.html)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

*Compose fragrances, unlock memories, and paint olfactory stories through an interactive digital canvas.*

[✨ Try It Live](#-live-versions) • [🎨 Features](#-features) • [🚀 Getting Started](#-getting-started) • [🤖 AI Integration](#-ai-integration)

</div>

---

## 🌟 What is ScentWorld?

ScentWorld is an immersive web application that transforms fragrance composition into a visual and narrative experience. By dragging and dropping scent notes into a perfume pyramid, users unlock vivid memory scenes that evolve dynamically with each addition.

Think of it as a digital perfume organ meets storytelling engine — where jasmine, leather, and sea salt don't just blend into a fragrance, but conjure entire worlds.

---

## ✨ Live Versions

### 🎭 [**Main Version**](https://hongpenggg.github.io/scentworld/)
The core experience featuring:
- 200+ fragrance notes across 14 categories
- Dynamic memory scene generation
- Elegant glassmorphic UI with ambient music
- Drag-and-drop or click-to-select note placement

### 🤖 [**ScentWorld AI**](https://hongpenggg.github.io/scentworld/gemini.html)
AI-enhanced edition with:
- **"Dream up a Scene"** — AI generates unique, poetic memory descriptions
- **"Consult the Alchemist"** — Get personalized fragrance critiques and suggestions
- Powered by OpenRouter's free models for creative text generation

---

## 🎨 Features

### Core Experience
- **🎯 Intuitive Interface** — Drag notes from the sidebar or click to assign to pyramid layers
- **🔺 Perfume Pyramid** — Authentic Top/Heart/Base note structure
- **🖼️ Living Memory Canvas** — Scenes that shift based on note combinations
- **🎵 Ambient Soundscape** — Classical piano accompaniment (toggleable)
- **📱 Responsive Design** — Seamless experience on desktop and mobile
- **🌈 14 Note Families** — From Florals to Synthetics, with color-coded chips

### AI-Powered Features
- **✨ Dream Mode** — Generate personalized memory narratives using AI
- **⚗️ Alchemist Critique** — Receive expert feedback on balance and composition
- **🔮 Adaptive Storytelling** — AI interprets your fragrance choices into prose

### Technical Highlights
- **Zero Dependencies** — Pure HTML/CSS/JS with Tailwind CDN
- **Smooth Animations** — Glassmorphism effects and parallax transitions
- **Smart Memory Engine** — Combinatorial logic generates 50+ unique scenes
- **Environment Variable Support** — Secure API key management with `.env.local`

---

## 🚀 Getting Started

### Quick Start (No Installation)

Simply visit the [live demo](https://hongpenggg.github.io/scentworld/) — no setup required!

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/hongpenggg/scentworld.git
   cd scentworld
   ```

2. **Open in browser**
   ```bash
   # Main version
   open index.html
   
   # AI version (requires API key setup)
   open gemini.html
   ```

3. **Set up AI features** (optional)
   - Create a `.env.local` file in the root directory
   - Add your OpenRouter API key:
     ```env
     VITE_OPENROUTER_API_KEY=your_key_here
     ```
   - Get a free API key at [OpenRouter](https://openrouter.ai/)

---

## 🤖 AI Integration

### OpenRouter Setup

ScentWorld AI uses [OpenRouter](https://openrouter.ai/) to access the best free language models for creative generation.

#### Local Development
1. Sign up at [OpenRouter](https://openrouter.ai/)
2. Get your API key from the dashboard
3. Create `.env.local`:
   ```env
   VITE_OPENROUTER_API_KEY=sk-or-v1-your-key-here
   ```

#### GitHub Pages Deployment
If hosting on GitHub Pages:
1. Go to your repository → **Settings** → **Secrets and variables** → **Actions**
2. Create a new secret: `VITE_OPENROUTER_API_KEY`
3. Paste your OpenRouter API key

> **Note:** The free tier uses OpenRouter's auto-routing to select the best available free model (e.g., Mistral 7B, Nous Hermes, etc.)

---

## 📚 Note Library

ScentWorld features **200+ authentic fragrance notes** organized into 14 families:

| Family | Count | Examples |
|--------|-------|----------|
| 🌸 **Florals** | 40+ | Rose, Jasmine, Lavender, Tuberose, Osmanthus |
| 🌲 **Woody** | 30+ | Sandalwood, Cedar, Oud, Vetiver, Patchouli |
| 🍋 **Citrus** | 20+ | Bergamot, Lemon, Yuzu, Grapefruit, Neroli |
| 🍑 **Fruits** | 25+ | Fig, Peach, Apple, Blackcurrant, Coconut |
| 🌿 **Greens** | 30+ | Mint, Basil, Tea, Galbanum, Violet Leaf |
| 💜 **Musks** | 15+ | White Musk, Amber, Ambergris, Cashmeran |
| 🔥 **Warm Spices** | 20+ | Cinnamon, Cardamom, Saffron, Ginger, Clove |
| 🧪 **Synthetics** | 15+ | Ambroxan, Iso E Super, Calone, Hedione |
| 🍬 **Gourmands** | 15+ | Vanilla, Chocolate, Caramel, Coffee, Honey |
| 🌊 **Aquatics** | 10+ | Marine, Seaweed, Salty, Ozonic, Mineral |
| 🪵 **Resins** | 12+ | Frankincense, Myrrh, Benzoin, Labdanum |
| 🥃 **Boozy** | 8+ | Rum, Whiskey, Wine, Cognac |
| 🌱 **Earthy** | 10+ | Soil, Mushroom, Moss, Tree Bark |
| 🐾 **Animalic** | 8+ | Leather, Castoreum, Civet, Musk (animalic) |

*All notes sourced from Fragrantica's comprehensive database and professional perfumery resources.*

---

## 🎨 How It Works

### The Memory Engine

ScentWorld's core innovation is its **Combinatorial Scene Generator**:

1. **Family Analysis** — Counts note families (Floral, Woody, etc.) in your composition
2. **Dominant Detection** — Identifies primary and secondary family influences
3. **Base Scene Selection** — Maps dominant family to an atmospheric setting
4. **Layering Modifiers** — Adds secondary family characteristics
5. **Note-Specific Details** — Inserts unique flavor text for special ingredients (e.g., oud, ink, marine)
6. **Hybrid Titles** — Creates special names for specific family combinations

**Example:**
- **Top:** Bergamot, Lemon → *Citrus*
- **Heart:** Rose, Jasmine → *Floral*  
- **Base:** Sandalwood, Oud → *Woody*

→ **Generated Scene:** *"The Enchanted Library"* — A mahogany study where bright sunlight streams through stained glass, the air thick with blooming jasmine climbing ancient bookshelves...

---

## 🛠️ Tech Stack

- **Frontend:** Pure HTML5, CSS3 (Tailwind), Vanilla JavaScript
- **Fonts:** Playfair Display (serif), Inter/Lato (sans-serif)
- **Icons:** Lucide Icons
- **AI Integration:** OpenRouter API (free tier)
- **Hosting:** GitHub Pages
- **Animation:** CSS transitions, glassmorphism, parallax effects

**Why no framework?**  
ScentWorld prioritizes simplicity, instant load times, and accessibility. The entire experience runs client-side with zero dependencies.

---

## 🎭 Use Cases

- **Perfume Enthusiasts** — Visualize fragrance compositions before buying
- **Aspiring Perfumers** — Learn note interactions and pyramid balance
- **Writers & Creatives** — Generate olfactory inspiration for storytelling
- **Sensory Education** — Teach fragrance families and note categories
- **Meditation & Mindfulness** — Explore scent-memory associations

---

## 🗺️ Roadmap

- [x] Core memory engine with 50+ scenes
- [x] AI-generated narrative mode
- [x] Comprehensive note library (200+ notes)
- [x] OpenRouter integration
- [ ] Save/share compositions via URL parameters
- [ ] User-submitted memory scenes
- [ ] Fragrance recommendation engine
- [ ] Mobile app version (PWA)
- [ ] Multilingual support (French, Japanese, Arabic)
- [ ] Integration with Fragrantica API
- [ ] VR mode for immersive olfactory visualization

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Ideas for Contributions
- Add new memory scene templates
- Expand note library with rare ingredients
- Improve AI prompts for better narratives
- Create themed UI variants (dark mode, seasons)
- Translate to new languages

---

## 📄 License

MIT License — feel free to use, modify, and distribute with attribution.

---

## 🙏 Acknowledgments

- **Music:** Janáček's *Sonata 1.X.1905* performed by Charlie Albright (Free Music Archive)
- **Note Data:** Fragrantica, Basenotes, Perfume Society
- **AI Models:** OpenRouter community (Mistral, Nous Research, Meta)
- **Design Inspiration:** Luxury perfume houses and olfactory art installations

---

## 📧 Contact

**Hongpeng Wei**  
[GitHub](https://github.com/hongpenggg) • [Website](https://hongpenggg.github.io)

---

<div align="center">

### 🌸 *"Perfume is the unseen, unforgettable, ultimate accessory of fashion that heralds your arrival and prolongs your departure."*  
— Coco Chanel

**Made with 💜 for fragrance lovers everywhere**

[⬆ Back to Top](#-scentworld)

</div>
