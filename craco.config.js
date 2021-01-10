const autoprefixerPlugin = require('autoprefixer');
const tailwindcssPlugin = require('tailwindcss');

module.exports = {
  style: {
    postcss: {
      plugins: [autoprefixerPlugin, tailwindcssPlugin]
    },
  },
};
