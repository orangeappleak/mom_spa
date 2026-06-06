# mom_spa

A Next.js web application. This document covers how to get set up locally and how we collaborate on this repo as a team.

---

## Getting Started

### 1. Clone the repo

```bash
git clone git@github.com:orangeappleak/mom_spa.git
cd mom_spa
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Branch Structure

```
main          ← production-ready, never commit here directly
development   ← integration branch, merge all features here first
feat/xxx      ← feature branches (branch off development)
fix/xxx       ← bug fix branches (branch off development)
```

**Rules:**
- `main` is protected — only merge from `development` when the build is stable and tested
- All day-to-day work goes through `development`
- Never push directly to `main` or `development` — always use a pull request

---

## Starting New Work

Always branch off `development`, never `main`.

```bash
# 1. Sync with latest development
git checkout development
git pull origin development

# 2. Create your branch
git checkout -b feat/your-feature-name
```

**Branch naming:**
| Type | Format | Example |
|---|---|---|
| New feature | `feat/` | `feat/homepage` |
| Bug fix | `fix/` | `fix/navbar-overflow` |
| Styles only | `style/` | `style/hero-spacing` |
| Refactor | `refactor/` | `refactor/api-calls` |

---

## Working on the Same Branch as Someone Else

If two people are on the same branch (e.g. `feat/homepage`):

**Before you push — always pull first:**
```bash
git pull origin feat/homepage --rebase
git push origin feat/homepage
```

**If you get a conflict:**
```bash
# Git will pause and show conflict markers in the file
# Open the file, resolve manually, then:
git add <the-file>
git rebase --continue
git push origin feat/homepage
```

**Tip:** Divide the files between you upfront to avoid conflicts entirely. E.g. one person owns `Hero.tsx`, the other owns `Navbar.tsx`.

---

## Daily Workflow

```bash
# Start of day — sync your branch with latest development
git fetch origin
git rebase origin/development

# Work, then commit in small chunks
git add src/components/Hero.tsx
git commit -m "feat: add hero section layout"

# End of day / ready to share — push
git pull origin feat/homepage --rebase
git push origin feat/homepage
```

---

## Commit Message Format

Keep messages short and consistent:

```
feat: add hero banner
fix: correct mobile nav overflow
style: update button colours
refactor: extract api helper
chore: update dependencies
```

---

## Opening a Pull Request

1. Push your branch to origin
2. Go to [github.com/orangeappleak/mom_spa](https://github.com/orangeappleak/mom_spa)
3. Open a PR from your branch → **`development`** (not `main`)
4. Add a short description of what changed
5. Request a review from the other person
6. Only merge after approval

**PRs to `main` are only opened from `development`** once features are complete and tested.

---

## Merging to Main

```
feat/xxx  →  (PR)  →  development  →  (PR)  →  main
```

When `development` is stable:
1. Open a PR from `development` → `main`
2. Both team members review
3. Merge and verify the production build

---

## Useful Commands

```bash
# See what's changed on your branch vs development
git diff origin/development...HEAD

# See recent commits on the branch
git log --oneline -10

# Stash unfinished work before switching branches
git stash
git stash pop

# Undo last commit but keep your changes
git reset --soft HEAD~1

# See who changed what in a file
git blame src/app/page.tsx
```

---

## Quick-Reference Cheatsheet

| Task | Command |
|---|---|
| Sync with development | `git pull origin development --rebase` |
| New branch | `git checkout -b feat/name` |
| Stage specific file | `git add path/to/file` |
| Commit | `git commit -m "feat: description"` |
| Pull before push (same branch) | `git pull origin feat/name --rebase` |
| Push branch | `git push origin feat/name` |
| Stash work | `git stash` / `git stash pop` |
