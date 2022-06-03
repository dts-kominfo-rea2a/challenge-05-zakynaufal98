const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

const sorter = () => {
  const listName = [];
  for (let i = 0; i < names.length; i++) {
    const nameInside = [i + 1] + ". " + names[i];
    listName.push(nameInside);
  }
  return listName.sort();
};

const sortAscending = () => {
  for (let i = 0; i < names.length; i++) {
    const nameInside = [i + 1] + ". " + names[i];
    listName.push(nameInside);
  }
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = null;

console.log(sorter().sort().join(" "));
