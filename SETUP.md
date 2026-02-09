# ScentWorld Setup Instructions

## 🚀 Quick Setup for GitHub Pages Deployment

### 1. Get Your OpenRouter API Key

1. Visit [OpenRouter.ai](https://openrouter.ai/)
2. Sign up for a free account
3. Navigate to **Keys** in your dashboard
4. Create a new API key
5. Copy your key (starts with `sk-or-v1-...`)

### 2. Configure GitHub Repository Secret

1. Go to your repository: `https://github.com/hongpenggg/scentworld`
2. Click **Settings** (top navigation)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add the following:
   - **Name:** `VITE_OPENROUTER_API_KEY`
   - **Secret:** `sk-or-v1-your-actual-key-here`
6. Click **Add secret**

### 3. Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Source**, select:
   - Source: `GitHub Actions`
3. Save the configuration

### 4. Deploy Your Site

The GitHub Actions workflow will automatically deploy on every push to `main`. To trigger the first deployment:

```bash
# Make any change (e.g., update README)
git commit --allow-empty -m "Trigger deployment"
git push origin main
```

Or manually trigger the workflow:
1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages**
3. Click **Run workflow**

### 5. Verify Deployment

Once the workflow completes (2-3 minutes):
- Your site will be live at: `https://hongpenggg.github.io/scentworld/`
- The AI version will work at: `https://hongpenggg.github.io/scentworld/gemini.html`

---

## 💻 Local Development Setup

### For Testing AI Features Locally

1. **Create a `.env.local` file** in the root directory:
   ```bash
   touch .env.local
   ```

2. **Add your API key:**
   ```env
   VITE_OPENROUTER_API_KEY=sk-or-v1-your-key-here
   ```

3. **Important:** The `.env.local` file is gitignored and won't be committed

4. **For quick local testing**, you can temporarily hardcode your key in `gemini.html`:
   ```javascript
   // Line ~50 in gemini.html
   const OPENROUTER_API_KEY = "sk-or-v1-your-key-here";
   ```

   ⚠️ **Remember to remove this before committing!**

5. **Open the file:**
   ```bash
   open gemini.html  # macOS
   start gemini.html # Windows
   ```

---

## 🔍 Troubleshooting

### "API Key not configured" Error

**On GitHub Pages:**
- Check that `VITE_OPENROUTER_API_KEY` secret is set correctly
- Verify the secret name matches exactly (case-sensitive)
- Re-run the deployment workflow

**Locally:**
- Ensure `.env.local` exists and contains your key
- Check for typos in the key
- Try hardcoding the key temporarily for testing

### GitHub Actions Workflow Fails

1. Check the Actions tab for error logs
2. Common issues:
   - Missing `VITE_OPENROUTER_API_KEY` secret
   - Pages not enabled in Settings
   - Incorrect workflow permissions

3. Fix permissions if needed:
   - Go to Settings → Actions → General
   - Under **Workflow permissions**, select:
     - ☑️ Read and write permissions
     - ☑️ Allow GitHub Actions to create and approve pull requests

### OpenRouter API Issues

**Rate Limits:**
- Free tier has generous limits but isn't unlimited
- If you hit limits, wait a few minutes or upgrade your plan

**Model Selection:**
- The app uses `openrouter/auto` which routes to the best free model
- Common free models: Mistral 7B, Nous Hermes, Mythomist
- Models may change based on availability

**Response Format:**
- The app requests JSON responses
- Some models may not support structured output
- If errors occur, OpenRouter will auto-route to a compatible model

---

## 🛠️ Advanced Configuration

### Custom Model Selection

To use a specific model instead of auto-routing, edit `gemini.html`:

```javascript
// Line ~140 in callOpenRouter function
const payload = {
    model: "mistralai/mistral-7b-instruct-v0.1",  // Specific model
    // Or keep: "openrouter/auto" for automatic selection
    ...
};
```

### Available Free Models (as of Feb 2026)

- `openrouter/auto` - Auto-selects best free model
- `mistralai/mistral-7b-instruct-v0.1`
- `nousresearch/nous-hermes-2-mixtral-8x7b-dpo`
- `meta-llama/llama-3-8b-instruct`
- `google/gemma-7b-it`

Check [OpenRouter Models](https://openrouter.ai/models) for current availability.

---

## 📚 Additional Resources

- **OpenRouter Docs:** https://openrouter.ai/docs
- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **GitHub Actions Docs:** https://docs.github.com/en/actions
- **ScentWorld Issues:** https://github.com/hongpenggg/scentworld/issues

---

## ✅ Verification Checklist

- [ ] OpenRouter account created
- [ ] API key generated
- [ ] GitHub secret `VITE_OPENROUTER_API_KEY` added
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] Deployment workflow run successfully
- [ ] Site accessible at `https://hongpenggg.github.io/scentworld/`
- [ ] AI features working on `gemini.html`
- [ ] No API key visible in public code

---

**Need help?** Open an issue on [GitHub](https://github.com/hongpenggg/scentworld/issues) or check the [README](README.md) for more information.
