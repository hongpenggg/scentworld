# 🚀 ScentWorld v2.0 - Deployment Checklist

## ✅ Completed Updates

All code changes have been pushed to your repository:

- ✅ `.gitignore` - Protects API keys and sensitive files
- ✅ `README.md` - Modern, comprehensive documentation
- ✅ `gemini.html` - Updated with OpenRouter API integration
- ✅ `index.html` - Enhanced with 200+ notes and improved memory engine
- ✅ `.github/workflows/deploy.yml` - Automated deployment workflow
- ✅ `SETUP.md` - Step-by-step setup instructions
- ✅ `CHANGELOG.md` - Complete version history

---

## 📖 Next Steps (Action Required)

### Step 1: Get Your OpenRouter API Key

1. Visit: **https://openrouter.ai/**
2. Sign up (free)
3. Go to **Keys** section
4. Click **Create Key**
5. Copy your key (format: `sk-or-v1-...`)

---

### Step 2: Add GitHub Secret

1. Go to your repo: **https://github.com/hongpenggg/scentworld/settings/secrets/actions**
2. Click **New repository secret**
3. Enter:
   - **Name:** `VITE_OPENROUTER_API_KEY`
   - **Value:** Your OpenRouter API key from Step 1
4. Click **Add secret**

---

### Step 3: Enable GitHub Pages

1. Go to: **https://github.com/hongpenggg/scentworld/settings/pages**
2. Under **Build and deployment**:
   - **Source:** Select `GitHub Actions`
3. Save

---

### Step 4: Configure Workflow Permissions (If Needed)

1. Go to: **https://github.com/hongpenggg/scentworld/settings/actions**
2. Scroll to **Workflow permissions**
3. Select:
   - ☑️ **Read and write permissions**
   - ☑️ **Allow GitHub Actions to create and approve pull requests**
4. Save

---

### Step 5: Trigger First Deployment

The deployment should trigger automatically, but if it doesn't:

**Option A: Via GitHub UI**
1. Go to: **https://github.com/hongpenggg/scentworld/actions**
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

**Option B: Via Git**
```bash
git commit --allow-empty -m "Trigger initial deployment"
git push origin main
```

---

### Step 6: Verify Deployment

After 2-3 minutes, check:

1. **Actions Status:** https://github.com/hongpenggg/scentworld/actions
   - Workflow should show ✅ green checkmark

2. **Live Site:** https://hongpenggg.github.io/scentworld/
   - Main version should load
   - Notes should be draggable
   - Memory scenes should update

3. **AI Version:** https://hongpenggg.github.io/scentworld/gemini.html
   - Click "Dream up a Scene" - should generate AI text
   - Click "Consult the Alchemist" - should provide critique
   - If API errors occur, check Step 2 (secret configuration)

---

## 🔍 Troubleshooting

### ❌ Workflow Fails

**Check:** Actions tab for error logs

**Common fixes:**
- Missing `VITE_OPENROUTER_API_KEY` secret → Add in Step 2
- Permissions issue → Complete Step 4
- Pages not enabled → Complete Step 3

### ❌ "API Key not configured" on Live Site

**Cause:** Secret not set or workflow didn't inject it

**Fix:**
1. Verify secret exists: https://github.com/hongpenggg/scentworld/settings/secrets/actions
2. Secret name must be exactly: `VITE_OPENROUTER_API_KEY`
3. Re-run deployment workflow

### ❌ AI Features Don't Work

**Test locally first:**
1. Edit `gemini.html` line ~50
2. Replace `%%VITE_OPENROUTER_API_KEY%%` with your actual key
3. Open file in browser
4. If it works locally, issue is with GitHub secret

---

## 🎉 Success Checklist

- [ ] OpenRouter account created
- [ ] API key generated
- [ ] GitHub secret added
- [ ] GitHub Pages enabled (Actions source)
- [ ] Workflow permissions configured
- [ ] First deployment triggered
- [ ] Actions workflow completed successfully
- [ ] Main site loads at https://hongpenggg.github.io/scentworld/
- [ ] AI version loads at /gemini.html
- [ ] "Dream up a Scene" generates text
- [ ] "Consult the Alchemist" provides feedback
- [ ] No API key visible in page source

---

## 📚 Documentation

For more details, see:
- **Setup Guide:** [SETUP.md](../SETUP.md)
- **Full README:** [README.md](../README.md)
- **Changelog:** [CHANGELOG.md](../CHANGELOG.md)

---

## 💬 Need Help?

Open an issue: https://github.com/hongpenggg/scentworld/issues

Or check the troubleshooting section in [SETUP.md](../SETUP.md)

---

**Estimated Time:** 10 minutes  
**Difficulty:** Beginner-friendly  
**Cost:** Free (OpenRouter free tier + GitHub Pages)
