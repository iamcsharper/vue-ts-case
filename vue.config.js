module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
          @import "@/style-bindings/main.scss";
          `
        }
      }
    }
  };

  