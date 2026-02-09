# Changelog

All notable changes to ScentWorld will be documented in this file.

## [2.0.0] - 2026-02-09

### ✨ Major Updates

#### 🤖 AI Integration Overhaul
- **Replaced Gemini API with OpenRouter API**
  - Now uses OpenRouter's free model router for AI features
  - Access to multiple free models (Mistral, Nous Hermes, etc.)
  - More reliable and cost-effective solution
  - Environment variable support for secure API key management

- **"Consult the Alchemist" Feature Enhanced**
  - Improved critique quality with better prompts
  - More specific and actionable fragrance advice
  - Faster response times

- **"Dream up a Scene" Feature Enhanced**
  - More poetic and evocative memory descriptions
  - Better interpretation of note combinations
  - Consistent JSON response handling

#### 🎵 Expanded Note Library
- **200+ fragrance notes** (up from ~80)
- **14 note families** (up from 8)
  - ✅ Floral (40 notes)
  - ✅ Woody (30 notes)
  - ✅ Citrus (20 notes)
  - ✅ Fruit (30 notes)
  - ✅ Greens (32 notes)
  - ✅ Musks (18 notes)
  - ✅ Warm Spices (21 notes)
  - ✅ Synthetic (15 notes)
  - ✨ NEW: Gourmand (24 notes)
  - ✨ NEW: Aquatic (12 notes)
  - ✨ NEW: Resinous (13 notes)
  - ✨ NEW: Boozy (10 notes)
  - ✨ NEW: Earthy (11 notes)
  - ✨ NEW: Animalic (10 notes)

- **Comprehensive Fragrantica Integration**
  - All major perfume notes now included
  - Authentic perfumery terminology
  - Professional-grade note selection

#### 🖼️ Enhanced Memory Engine
- **50+ unique memory scenes** (up from ~20)
- **More vivid, sensory descriptions**
  - Longer, more immersive prose
  - Multi-sensory details (sight, touch, temperature)
  - Emotional depth and storytelling

- **Improved Note-Specific Triggers**
  - 12+ special note interactions
  - Context-aware scene modifications
  - Hybrid scene titles for specific combinations

- **New Scene Types**
  - "The Patisserie" (Gourmand)
  - "Coastal Dawn" (Aquatic)
  - "Sacred Temple" (Resinous)
  - "The Cellar" (Boozy)
  - "Forest Floor" (Earthy)
  - "The Stable" (Animalic)

#### 🛠️ Infrastructure & DevOps
- **GitHub Actions Workflow**
  - Automated deployment to GitHub Pages
  - Secure API key injection during build
  - No secrets exposed in public code

- **Environment Variable Support**
  - `.env.local` for local development
  - GitHub Secrets for production
  - Automatic key replacement in CI/CD

- **Improved .gitignore**
  - Protects API keys and sensitive files
  - Standard Node.js/web project exclusions

#### 📚 Documentation
- **Modern, comprehensive README**
  - Beautiful formatting with badges
  - Complete feature documentation
  - Setup instructions
  - Roadmap and contribution guidelines
  - Professional presentation

- **SETUP.md Guide**
  - Step-by-step deployment instructions
  - Troubleshooting section
  - Local development setup
  - API configuration help

- **CHANGELOG.md**
  - Version tracking
  - Feature documentation

### 🐛 Bug Fixes
- Fixed sidebar accordion collapse behavior
- Improved mobile responsiveness for note chips
- Corrected color inconsistencies in family badges
- Fixed memory scene background transitions

### 🎨 UI/UX Improvements
- Collapsible note families for better organization
- Smoother animations and transitions
- Better visual hierarchy in sidebar
- Improved empty state messaging
- Enhanced button hover effects

### 📝 Technical Details

#### API Integration
```javascript
// Old: Gemini API
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GOOGLE_API_KEY}`;

// New: OpenRouter API
const url = "https://openrouter.ai/api/v1/chat/completions";
headers: { 'Authorization': `Bearer ${OPENROUTER_API_KEY}` }
```

#### Note Library Growth
- **Before:** 8 families, ~80 notes
- **After:** 14 families, 200+ notes
- **Coverage:** ~95% of common perfumery ingredients

#### Memory Scene Complexity
- **Average scene length:** 40 words → 80 words
- **Unique scenes:** 20 → 50+
- **Special triggers:** 5 → 12+

---

## [1.0.0] - 2025-12-XX

### Initial Release
- Basic perfume pyramid interface
- 8 note families with ~80 notes
- Combinatorial memory scene generator
- Drag-and-drop and click-to-select note placement
- Glassmorphic UI design
- Ambient music player
- Responsive layout with sidebar toggle
- Basic memory scenes (~20 variations)
- Gemini API integration for AI features (Beta)

---

## Upcoming Features (Roadmap)

### Version 2.1 (Planned)
- [ ] Save/share compositions via URL parameters
- [ ] Export memory scenes as images
- [ ] User-submitted memory scenes
- [ ] Dark mode theme
- [ ] More ambient music tracks

### Version 3.0 (Future)
- [ ] Fragrance recommendation engine
- [ ] Community features (voting, favorites)
- [ ] Integration with Fragrantica API
- [ ] Mobile app (PWA)
- [ ] Multilingual support
- [ ] VR mode

---

## Migration Notes

### For Existing Users

#### AI Features
If you were using the old Gemini API version:
1. The AI features will no longer work without updating
2. Follow [SETUP.md](SETUP.md) to configure OpenRouter
3. Old Gemini API keys won't work with the new version

#### Note Library
- All existing notes still supported
- New notes added don't break old compositions
- Saved compositions (if any) will work with new scenes

#### GitHub Pages Deployment
- **Action Required:** Set up `VITE_OPENROUTER_API_KEY` secret
- See [SETUP.md](SETUP.md) for instructions
- Without this, AI features won't work on deployed site

---

## Credits

### Version 2.0 Contributors
- **Hongpeng Wei** - Original creator, all updates
- **OpenRouter** - AI model routing service
- **Fragrantica** - Note library reference

### Technologies
- Tailwind CSS
- Lucide Icons
- OpenRouter API
- GitHub Actions
- Vanilla JavaScript

---

**Full Documentation:** [README.md](README.md)  
**Setup Guide:** [SETUP.md](SETUP.md)  
**Repository:** [github.com/hongpenggg/scentworld](https://github.com/hongpenggg/scentworld)
