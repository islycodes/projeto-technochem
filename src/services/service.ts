import axios from "axios";

export default async function getCidades() {
  return await axios.get(
    "https://servicodados.ibge.gov.br/api/v1/localidades/distritos?view=nivelado"
  );
}
