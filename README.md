# Nuxt Minimal Starter

yarn generate  

npx serve .output/public


Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 样式系统说明

本项目采用 Tailwind CSS v4，基础样式在 `assets/css/main.css` 中通过如下方式引入：

```css
@import "tailwindcss/preflight";
@import "tailwindcss/utilities";
@import "@nuxt/ui";
```

如需自定义品牌色、字体、断点、动画等，请在 `tailwind.config.js` 配置（如未生成请手动创建）。
