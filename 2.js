function Pets (cats) {
  for (let color in cats) {
    if (cats.hasOwnProperty(color)) {
      console.log(color, cats[color]);
    }
  }
}