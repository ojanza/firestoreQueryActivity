db.collection('teams').where('Country', "=", "Spain")
    .get().then((data) => {
        let docs = data.docs;
        docs.forEach((d) => {
            console.log(d.data());
        });
    });