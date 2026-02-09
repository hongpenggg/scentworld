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

**Free Tier Usage:**
- ✅ **The app uses `openrouter/free`** - completely free, no charges
- ❌ **Do NOT use `openrouter/auto`** - routes to paid models and charges your account
- The free tier automatically selects from available free models
- Common free models: Mistral 7B, Nous Hermes, Qwen, etc.
- Free tier has generous limits (varies by model)

**If You're Being Charged:**
- Check your OpenRouter [activity page](https://openrouter.ai/activity)
- Verify the model being used is `openrouter/free` (not `openrouter/auto`)
- The latest code update (Feb 9, 2026) fixed this issue
- Redeploy your site to apply the fix

**Response Format:**
- Free models may not support structured JSON output
- The app includes fallback parsing to extract JSON from text responses
- If errors persist, OpenRouter will suggest compatible free models

---

## 🛠️ Advanced Configuration

### Checking Which Model Is Being Used

To verify you're using the free tier:

1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Trigger an AI request ("Dream up a Scene" or "Consult the Alchemist")
4. Find the request to `openrouter.ai/api/v1/chat/completions`
5. Check the **Payload**:
   ```json
   {
     "model": "openrouter/free"  // ✅ CORRECT - No charges
   }
   ```

**If you see:**
```json
{
  "model": "openrouter/auto"  // ❌ WRONG - This charges you!
}
```

**Then:**
1. Pull the latest code: `git pull origin main`
2. Redeploy to GitHub Pages
3. Or update the model locally in `gemini.html` (line ~188)

### Available Free Models (as of Feb 2026)

The `openrouter/free` router automatically selects from models like:

- `nousresearch/hermes-3-llama-3.1-405b:free`
- `mistralai/mistral-7b-instruct:free`
- `qwen/qwen-2-7b-instruct:free`
- `microsoft/phi-3-mini-128k-instruct:free`
- `google/gemma-2-9b-it:free`

You don't need to specify a model - OpenRouter picks the best available free one.

**Check current free models:** https://openrouter.ai/models?order=newest&supported_parameters=tools&max_price=0

---

## 📚 Additional Resources

- **OpenRouter Docs:** https://openrouter.ai/docs
- **OpenRouter Free Tier:** https://openrouter.ai/openrouter/free
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
- [ ] ✅ **Verified model is `openrouter/free` (check DevTools)**
- [ ] ✅ **No charges on OpenRouter activity page**
- [ ] No API key visible in page source

---

## 💰 Cost Breakdown

| Component | Cost | Notes |
|-----------|------|-------|
| OpenRouter API | **$0.00** | Using `openrouter/free` endpoint |
| GitHub Pages | **$0.00** | Free for public repos |
| GitHub Actions | **$0.00** | 2,000 minutes/month free tier |
| **Total** | **$0.00** | Completely free! |

⚠️ **Important:** Only free if you use `openrouter/free`. Using `openrouter/auto` or specific paid models will incur charges.

---

**Need help?** Open an issue on [GitHub](https://github.com/hongpenggg/scentworld/issues) or check the [README](README.md) for more information.
