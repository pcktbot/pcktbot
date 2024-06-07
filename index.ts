console.log(Bun);

// for building a frontend app
const result = await Bun.build({
  entrypoints: [],
  outdir: './dist'
});

console.log(result);

// for serving development server

// for serving production server

