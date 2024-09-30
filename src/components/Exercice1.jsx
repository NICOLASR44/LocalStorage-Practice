import Exercice from "./container/Exercice";
import { useEffect, useState } from "react";

export default function Exercice1() {
  // 1. Utilisez un state pour stocker la valeur saisie par l'utilisateur.
  const [text, setText] = useState("");

  // 2. Utilisez une fonction qui sera appelée lorsqu'une valeur est saisie pour mettre à jour l'état avec la valeur du champ de saisie.
  const handleChange = (e) => {
    const newValue = e.target.value;
    setText(newValue);

    // 3. Utilisez `localStorage.setItem` pour enregistrer la valeur dans localStorage lorsque l'utilisateur saisit une nouvelle valeur.
    localStorage.setItem("userText", newValue);
  };

  // 4. Utilisez `useEffect` pour récupérer la valeur initiale du localStorage avec `localStorage.getItem` lors du premier rendu
  //    et mettre à jour l'état avec cette valeur.

  useEffect(() => {
    const savedText = localStorage.getItem("userText");
    if (savedText) {
      setText(savedText); // Mettre à jour l'état avec la valeur du localStorage si elle existe
    }
  }, []);

  return (
    <Exercice>
      <h2>Excercie 1 : Stocker le texte dans LocalStorage</h2>
      <p className="instructions">
        Objectif : Chaque fois que l'utilisateur tape dans le champ de texte, la valeur doit être sauvegardée dans le
        LocalStorage. Lorsque l'utilisateur recharge la page, la valeur doit être restaurée à partir du LocalStorage.
      </p>
      <div className="solution">
        <div>
          <input type="text" value={text} onChange={handleChange} />
        </div>
      </div>
    </Exercice>
  );
}
