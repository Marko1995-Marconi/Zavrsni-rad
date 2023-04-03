function randomName() {
    const nameList = [
      "Alan",
      "Bob",
      "Grunf",
      "Jeremija",
      "Oliver",
      "Dylan",
      "Jack",
      "Pablo",
      "Rony",
      "Gustav",
      "Mika",
      "Del",
      "Rodney",
      "Denzil",
      "Jundil",
      "Casper",
      "Mery",
      "Charlie",
      "James",
      "Nividia",
      "Ian",
      "Ben",
      "Jan",
      "Jana",
      "Jasper",
      "Harry",
      "Ron",
      "Violet",
      "Charlotte",
      "George",
   ];
   const name = nameList[Math.floor(Math.random() * nameList.length)];
   return name;
   }
   function randomColor() {
   return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
   }
   export { randomName, randomColor };
  