
const restaurant = {
    name: "SKY Food",
    city: "Kota Bogor",
    favoriteDrink: "Pepsi",
    favoriteFood: "Sosis",
    isVegan: true
  };
  
  const restaurants = [
    {
      name: "Angkringan Sky",
      city: "Kota Tasik",
      favoriteDrink: "Cappucino Ice",
      favoriteFood: "Sharing",
      isVegan: false
    },
    {
      name: "Hunting A Food",
      city: "Kota Sukabumi",
      favoriteDrink: "Sprite",
      favoriteFood: "Nasi Goreng",
      isVegan: true
    }
  ];
  
  // Menampilkan informasi restoran objek
  console.log("Informasi Restoran Objek:");
  console.log("Nama Restoran:", restaurant.name);
  console.log("Kota:", restaurant.city);
  console.log("Minuman Favorit:", restaurant.favoriteDrink);
  console.log("Makanan Favorit:", restaurant.favoriteFood);
  console.log("Vegan:", restaurant.isVegan ? "Ya" : "Tidak");
  
  // Menampilkan informasi restoran dari array
  console.log("\nInformasi Restoran Array:");
  restaurants.forEach(function(restaurant, index) {
    console.log("Restoran ke-" + (index + 1));
    console.log("Nama Restoran:", restaurant.name);
    console.log("Kota:", restaurant.city);
    console.log("Minuman Favorit:", restaurant.favoriteDrink);
    console.log("Makanan Favorit:", restaurant.favoriteFood);
    console.log("Vegan:", restaurant.isVegan ? "Ya" : "Tidak");
    console.log("\n");
  });
