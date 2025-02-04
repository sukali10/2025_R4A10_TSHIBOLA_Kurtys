const email = "test.test@email.com";

// Toutes les questions nécessitent d'aller récupérer l'objet depuis cette fonction
function getObject() {
  return {
    name: "Mon objet",
    description: "Un très bel objet JS",
    value: 7,
    isBestObject: false,
    address: {
      city: "Paris",
      zipCode: 75000,
    },
  };
}

module.exports = {
  // 1) Renvoyer la propriété description
  Q1() {
    return getObject().description;
  },

  // 2) Renvoyer la propriété city
  Q2() {
    return getObject().address.city;
  },

  // 3) Renvoyer les clés de l'objet sous forme de tableau
  Q3() {
    return Object.keys(getObject());
  },

  // 4) --- Supprimée ---
  Q4() {
    //Je n'ai pas compris quoi supprimer
  },
  // 5) Ajouter la propriété email à myObject et renvoyer l'objet modifié
  Q5() {
    let object = getObject();
    object.email = email;
    return object;
  },


    // 6) Ajouter une propriété dynamique étant le résultat de la concaténation des chaînes "hello" et "world"
    // et dont la valeur est true, puis renvoyer l'objet modifié.
    Q6() {
      const object = getObject();
      const dynamicProperty = "Hello" + "World";
      object[dynamicProperty] = true;
      return object;
    },



  // 7) Supprimer la propriété isBestObject et renvoyer l'objet
  Q7() {
    let object = getObject();
    delete object.isBestObject;
    return object;
  },

  // 8) Vérifier que la propriété description existe dans l'objet, renvoyer un booléen
  Q8() {
    return "description" in getObject();
  },
};

console.log("Q1:", module.exports.Q1());
console.log("Q2:", module.exports.Q2());
console.log("Q3:", module.exports.Q3());
console.log("Q5:", module.exports.Q5());
console.log("Q6:", module.exports.Q6());
console.log("Q7:", module.exports.Q7());
console.log("Q8:", module.exports.Q8());