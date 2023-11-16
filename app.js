//1
db.collection("teams")
  .where("Country", "==", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });
//2
db.collection("teams")
  .where("City", "==", "Madrid")
  .where("Country", "==", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });

//3 national teams
db.collection("teams")
  .where("City", "==", "Not applicable")
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });

//4 teams not in spain
db.collection("teams")
  .where("Country", "!=", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });

//5 not in spain or england
db.collection("teams")
  .where("Country", "not-in", ["Spain", "England"])
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });

// //6 teams in spain w more than 700 mil fans
db.collection("teams")
  .where("Country", "!=", "Spain")
  .where("Fans (million)", ">", 700)
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {

      console.log(d.data());
    });
  });

//7
// db.collection("teams")
//   .where("Fans (million)", ">", 500)
//   .where("Fans (million)", "<", 600)
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

//8 ronaldo is top scorer
db.collection("teams")
  .where("Top Scorers", "array-contains", "Ronaldo")
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });


//9
db.collection("teams")
  .where("Top Scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });