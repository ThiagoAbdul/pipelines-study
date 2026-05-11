rm -rf dist/
npm run build
aws s3 sync ./dist s3://app.front-dev-abdul.dev.br --delete
aws cloudfront create-invalidation \
  --distribution-id E1FCNNY51IY5EA \
  --paths "/index.html"