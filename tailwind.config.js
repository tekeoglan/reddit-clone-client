const plugin = require("tailwindcss/plugin");

const gradiantMaskImage = require("tailwind-gradient-mask-image");

const translateZ = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "translate-z": (value) => ({
        "--tw-translate-z": value,
        transform: `translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
      }),
    },
    { values: theme("translate"), supportsNegativeValues: true }
  );
});

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        log: "1px 7px 20px 2px rbga(0,0,0,.4)",
      },
    },
  },
  plugins: [gradiantMaskImage, translateZ],
};
