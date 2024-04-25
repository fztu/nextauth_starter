## Getting Started
1. Build and start the PostgreSql docker container

```bash
docker compose up -d
```

2. Setup .env

```bash
cp .env.example .env
```

Setup Google OAuth, GitHub OAuth, Resend keys

3. Setup prisma

```bash
pnpx prisma generate
pnpx prisma db push
```

4. Run the development server:

```bash
pnpm dev
```

