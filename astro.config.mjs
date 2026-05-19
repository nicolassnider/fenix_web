// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'fs';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      {
        name: 'serve-uploads',
        // Servir en modo desarrollo
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url) {
              const urlPath = req.url.split('?')[0];
              if (urlPath.startsWith('/uploads/')) {
                const filePath = path.join(process.cwd(), urlPath);
                if (fs.existsSync(filePath)) {
                  const ext = path.extname(filePath).toLowerCase();
                  const mimeTypes = {
                    '.avif': 'image/avif',
                    '.webp': 'image/webp',
                    '.png': 'image/png',
                    '.jpg': 'image/jpeg',
                    '.jpeg': 'image/jpeg',
                    '.gif': 'image/gif',
                    '.svg': 'image/svg+xml'
                  };
                  const contentType = mimeTypes[ext] || 'application/octet-stream';
                  res.setHeader('Content-Type', contentType);
                  fs.createReadStream(filePath).pipe(res);
                  return;
                }
              }
            }
            next();
          });
        },
        // Copiar a dist/ en producción
        closeBundle() {
          const srcDir = path.resolve('uploads');
          const destDir = path.resolve('dist/uploads');
          if (fs.existsSync(srcDir)) {
            fs.mkdirSync(destDir, { recursive: true });
            fs.readdirSync(srcDir).forEach(file => {
              const srcFile = path.join(srcDir, file);
              const destFile = path.join(destDir, file);
              if (fs.statSync(srcFile).isFile()) {
                fs.copyFileSync(srcFile, destFile);
              }
            });
          }
        }
      }
    ]
  }
});
