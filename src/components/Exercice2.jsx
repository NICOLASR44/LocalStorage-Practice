import Exercice from "./container/Exercice";
import { useState, useEffect } from "react";

export default function Exercice2() {
  // 1. Créez une fonction qui récupère une valeur sauvegardée dans localStorage.
  const [count, setCount] = useState(0);

  // 2. Utilisez `localStorage.getItem` pour récupérer cette valeur lors du premier rendu.
  useEffect(() => {
    const savedCount = localStorage.getItem("counter");
    if (savedCount) {
      setCount(parseInt(savedCount, 10)); // Mise à jour du state avec la valeur stockée
    }
  }, []);

  // Fonction pour incrémenter le compteur et le sauvegarder dans localStorage
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("counter", newCount);
  };

  // Fonction pour décrémenter le compteur et le sauvegarder dans localStorage
  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    localStorage.setItem("counter", newCount);
  };

  return (
    <Exercice>
      <h2>Exercice 2 : Compteur persistant avec LocalStorage</h2>
      <p className="instructions">
        Objectif : Créer un compteur simple qui se sauvegarde dans le LocalStorage. Le nombre doit persister après un
        rafraîchissement de la page.
      </p>
      <div className="solution">
        <div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <p>Compteur : {count}</p>
        </div>
      </div>
    </Exercice>
  );
}
