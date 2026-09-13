# Vaz Vision Website

Updated production-ready site for **vazvision.com**.

## Contact details in this build
- Email: info@vazvision.com
- Phone: 516-784-9483
- Address: 118 Herbert Ave, Elmont, NY 11003

## GitHub Pages
1. Create or open a public repository named `vazvision`.
2. Upload every file and folder from this package into the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select `main` and `/(root)`.
6. Set the custom domain to `vazvision.com`.
7. Enable **Enforce HTTPS** after GitHub confirms the DNS.

## Namecheap DNS
Use these records under **Advanced DNS**:

| Type | Host | Value | TTL |
|---|---|---|---|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |
| CNAME Record | www | rentwithasani.github.io | Automatic |

Remove conflicting A, CNAME or redirect records for `@` or `www`.

## Contact form
The form submits to `info@vazvision.com` through FormSubmit. The first submission may trigger a FormSubmit verification email.
