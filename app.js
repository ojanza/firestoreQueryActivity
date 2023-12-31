//1

db.collection("teams")
  .where("Country", "==", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    document.querySelector("#answers").innerHTML += `Question 1`;
    docs.forEach((d) => {
      console.log(d.data());
      document.querySelector("#answers").innerHTML += `<p> ${
        d.data().Name
      }</p>`;
    });
  });
//2

db.collection("teams")
  .where("City", "==", "Madrid")
  .where("Country", "==", "Spain")
  .get()
  .then((data) => {
    document.querySelector("#answers").innerHTML += `Question 2`;
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
      document.querySelector("#answers").innerHTML += `<p> ${
        d.data().Name
      }</p>`;
    });
  });

//3 national teams
db.collection("teams")
  .where("City", "==", "Not applicable")
  .get()
  .then((data) => {
    document.querySelector("#answers").innerHTML += `Question 3`;
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
      document.querySelector("#answers").innerHTML += `<p> ${
        d.data().Name
      }</p>`;
    });
  });

//4 teams not in spain
db.collection("teams")
  .where("Country", "!=", "Spain")
  .get()
  .then((data) => {
    document.querySelector("#answers").innerHTML += `Question 4`;
    let docs = data.docs;
    docs.forEach((d) => {
      document.querySelector("#answers").innerHTML += `<p> ${
        d.data().Name
      }</p>`;
      console.log(d.data());
    });
  });

//5 not in spain or england
db.collection("teams")
  .where("Country", "not-in", ["Spain", "England"])
  .get()
  .then((data) => {
    document.querySelector("#answers").innerHTML += `Question 5`;
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
      document.querySelector("#answers").innerHTML += `<p> ${
        d.data().Name
      }</p>`;
    });
  });

// // //6 teams in spain w more than 700 mil fans
db.collection("teams")
  .where("Country", "==", "Spain")
  .where("Fans", ">", 700)
  .get()
  .then((data) => {

    document.querySelector("#answers").innerHTML += `Question 6`;
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
      document.querySelector("#answers").innerHTML += `<p> ${
        d.data().Name
      }</p>`;
    });
  });

//7
db.collection("teams")
  .where("Fans", ">", 500)
  .where("Fans", "<", 600)
  .get()
  .then((data) => {
    document.querySelector("#answers").innerHTML += `Question 7`;
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
      document.querySelector("#answers").innerHTML += `<p> ${
        d.data().Name
      }</p>`;
    });
  });

//8 ronaldo is top scorer
db.collection("teams")
  .where("Top Scorers", "array-contains", "Ronaldo")
  .get()
  .then((data) => {
    document.querySelector("#answers").innerHTML += `Question 8`;
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
      document.querySelector("#answers").innerHTML += `<p> ${
        d.data().Name
      }</p>`;
    });
  });

//9
db.collection("teams")
  .where("Top Scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((data) => {
    document.querySelector("#answers").innerHTML += `Question 9`;
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
      document.querySelector("#answers").innerHTML += `<p> ${
        d.data().Name
      }</p>`;
    });
  });

//Part 2 
//update real madrid
db.collection('teams').doc('yQURA1l52CRH3b0AOC2v').update({
  "Fans": 811,
  "Name": "Real Madrid FC"
})

//update barcelona
db.collection('teams').doc('yVV7xQFmbGzgo7Yh1gEJ').update({
  "Fans": 747,
  "Name": "FC Barcelona"
})

//update real madrid 
db.collection('teams').doc('yQURA1l52CRH3b0AOC2v').update({

  "Top Scorers": firebase.firestore.FieldValue.arrayRemove("Hazard"),

})
db.collection('teams').doc('yQURA1l52CRH3b0AOC2v').update({

  "Top Scorers": firebase.firestore.FieldValue.arrayUnion("Crispo"),


})

//update barcelona
db.collection('teams').doc('yVV7xQFmbGzgo7Yh1gEJ').update({

  "Top Scorers": firebase.firestore.FieldValue.arrayUnion("Deco")


})

db.collection('teams').doc('yVV7xQFmbGzgo7Yh1gEJ').update({

  "Top Scorers": firebase.firestore.FieldValue.arrayRemove("Puyol")

})

//update real madrid
db.collection('teams').doc('yQURA1l52CRH3b0AOC2v').update({
  color: {
    home: "White",
    away: "Black"
  }
})
//update barcelona
db.collection('teams').doc('yVV7xQFmbGzgo7Yh1gEJ').update({
  color: {
    home: "Red",
    away: "Gold"
  }
})


//
//update real madrid
db.collection('teams').doc('yQURA1l52CRH3b0AOC2v').update({
  "color.away": "purple"
})

//update barcelona
db.collection('teams').doc('yVV7xQFmbGzgo7Yh1gEJ').update({
  "color.away": "pink"
})