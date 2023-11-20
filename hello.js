const  randomWord = {
    places: ['Spain', 'Thailand', 'Portugal', 'Brazil', 'Germany', 'Japan','Vietnam','Italy','Turkey'],
    food: ['Sushi', 'Pasta', 'Burger', 'Kebab', 'Pad-Thai', 'French fries',  'Tacos' ],
    thingsToDo: ['Go To A Museum', ' Go snorkeling', 'Do Nothing', 'Go Hiking', 'Relax By The Swimming Pool']

}
// A list of countrys to go to,food to eat and things to do, to plan your next holiday
 const randomSaying = () => {
    const  randomPlaces = randomWord.places[Math.floor(Math.random() * randomWord.places.length )];
    const  randomFood = randomWord.food[Math.floor(Math.random() * randomWord.food.length )];
    const  randomThingsToDo = randomWord.thingsToDo[Math.floor(Math.random() * randomWord.thingsToDo.length )];
    return `You should visit ${randomPlaces}, Eat some ${randomFood} and ${randomThingsToDo}, Sounds like a great holiday`
 } 
 console.log(randomSaying());
 // I random the 3 differnt arrays to get the ideal random holiday