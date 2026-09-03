# --- Stage 1: build (static output, prerendered oleh scripts/prerender.mjs) ---
FROM node:20-alpine AS build
WORKDIR /app

# Copy manifest dulu supaya layer cache npm ci tidak pecah tiap ganti source.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build
# Hasil: /app/dist berisi HTML/CSS/JS statis (prerendered per rute) + sitemap.xml

# --- Stage 2: serve dengan Nginx non-root ---
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime

COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1:8080/ >/dev/null 2>&1 || exit 1
