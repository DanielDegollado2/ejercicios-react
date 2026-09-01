type GreetingsProps = {
  name: string;
  lugarNacimiento: string;
  edad: number; 
  altura: number;
  peso: number;
  enemigo: string;
  rango: string;
  ia: string;
}
 
export function Greetings({ 
    name, 
    lugarNacimiento, 
    edad, 
    altura, 
    peso, 
    enemigo, 
    rango,
    ia,
}: GreetingsProps) {
  return (
    <div>
      <h1>Hola, soy {name}</h1>
      <p>Mi rango es: {rango}</p>
      <p>Naci en la colonia {lugarNacimiento}</p>
      <p>Tengo {edad} años</p>
      <p>Mido {altura} mts</p>
      <p>Peso {peso} kg</p>
      <p>Mi enemigo principal es {enemigo}</p>
      <p>Mi IA compañera es {ia}</p>
    </div>
  )
}