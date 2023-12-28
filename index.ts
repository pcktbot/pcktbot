console.log("Hello via Bun!");

await Bun.build({
  entrypoints: ['./src'],
  outdir: './dist',
});
