//esercizio 1

class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
      }
    

    AgeComparison (User) {
        if (this.age === User.age) {
            return this.firstName + " e " + User.firstName + "sono coetanei.";
          } else if (this.age > User.age) {
            return this.firstName + " è più grande di " + User.firstName;
          } else {
            return this.firstName + " è più giovane di " + User.firstName;
          }
        }
}

    
    const Mario = new User("Mario", "Rossi", 25, "Cosenza");
    const Vittorio = new User("Vittorio", "Vescio", 30, "Cosenza");

    console.log("Mario");

    console.log(Mario.AgeComparison(Vittorio));


    //esercizio 2


class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
      }
      static SameOwner(pet1, pet2){
        if (pet1.ownerName === pet2.ownerName){
            return true;
        } else {
            return false;
        }
    }
}

const form = document.querySelector('form');
const petList = document.createElement('ul');
document.body.appendChild(petList);


form.addEventListener('submit', function(event) {
  event.preventDefault(); 


  const petName = form.elements.petName.value;
  const ownerName = form.elements.ownerName.value;
  const species = form.elements.species.value;
  const breed = form.elements.breed.value;


  const newPet = new Pet(petName, ownerName, species, breed);


  const petItem = document.createElement('li');
  petItem.textContent = newPet.petName + ' (' + newPet.species + ', ' + newPet.breed + ') - proprietario: ' + newPet.ownerName;
  petList.appendChild(petItem);


  form.reset();
});

// let Vito = new Pet("Vito", "Vittorio", "cane", "Amstaff");
// let Nuvola = new Pet("Nuvola", "Antonio", "cane", "Pecora");
// let Maya = new Pet("Maya", "Vittorio", "cane", "Amstaff");

// console.log(Pet.PadroneUguale(Vito, Maya));

