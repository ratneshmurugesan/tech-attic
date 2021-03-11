function loadFonts() {
  if (sessionStorage.fontsLoaded) {
    document.documentElement.classList.add("fonts-loaded");
    return;
  }

  if ("fonts" in document) {
    console.log("if");
    Promise.all([
      // document.fonts.load("Rajdhani"),
      document.fonts.load("1em Rajdhani"),
      document.fonts.load("700 1em Rajdhani"),
      document.fonts.load("italic 1em Rajdhani"),
      document.fonts.load("italic 700 1em Rajdhani"),
    ]).then(_ => {
      document.documentElement.classList.add("fonts-loaded");
      console.log("fonts-loaded");
    });
  }
}

loadFonts();
