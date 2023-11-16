db.collection("teams")
  .where("Country", "==", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });

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

//national teams
db.collection("teams")
  .where("City", "==", "Not applicable")
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });

//teams not in spain
db.collection("teams")
  .where("Country", "!=", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });

//not in spain or england
db.collection("teams")
  .where("Country", "not-in", ["Spain", "England"])
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });

// //teams in spain w more than 700 mil fans
// db.collection("teams")
//   .where("Country", "!=", "Spain")
//   .where("Fans (million)", ">", 700)
//   .get()
//   .then((data) => {
//     let docs = data.docs;
//     docs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

//
db.collection("teams")
  .where("Fans (million)", ">", 500)
  .where("Fans (million)", "<", 600)
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });

//ronaldo is top scorer
db.collection("teams")
  .where("Country", "==", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });

db.collection("teams")
  .where("Country", "not in", ["Spain", "England"])
  .get()
  .then((data) => {
    let docs = data.docs;
    docs.forEach((d) => {
      console.log(d.data());
    });
  });