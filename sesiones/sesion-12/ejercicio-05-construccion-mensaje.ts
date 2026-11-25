// Se utiliza un espacio simple (" ") como separador para unir los fragmentos de forma legible.
function construirMensaje(...fragmentos: string[]): string {
  return fragmentos
    .map((parte) => parte.trim())
    .filter((parte) => parte.length > 0)
    .join(" ");
}

const mensajeTramite = construirMensaje(
  "Solicitud de constancia",
  "académica",
  "recibida",
  "en registro académico."
);

console.log(mensajeTramite);