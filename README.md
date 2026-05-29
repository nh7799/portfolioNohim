# Nohim Portfolio

Professional Vite + React portfolio with responsive sections, project carousel, skills, CV viewer, and contact form.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Optional Supabase CV setup

The CV viewer and download button will use Supabase Storage when these environment variables are provided:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_KEY=your-supabase-anon-or-publishable-key
```

Create a public Supabase Storage bucket named `cv` and upload the file as:

```text
latest-cv.pdf
```

If the variables are not configured, the app falls back to:

```text
public/Nohim-hasitha-cv.pdf
```
