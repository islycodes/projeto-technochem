import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import getCidades from "./services/service";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function App() {
  const [cidades, setCidades] = React.useState([]);
  const [allCidades, setAllCidades] = React.useState([]);
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    getCidades().then((data) => setAllCidades(data.data));
  }, []);

  React.useEffect(() => {
    setCidades(allCidades.slice((page - 1) * 10, page * 10));
  }, [page, allCidades]);

  return (
    <div className="w-full h-screen bg-[#0F1012]">
      <div className="flex flex-col p-10">
        <div className="text-xl font-semibold text-white">
          Projeto Technochem
        </div>
        <Table className="mt-8">
          <TableHeader>
            <TableRow>
              <TableHead>Municipio ID</TableHead>
              <TableHead>Municipio Nome</TableHead>
              <TableHead>Região Imediata ID</TableHead>
              <TableHead>Região Imediata Nome</TableHead>
              <TableHead>Região Intermediária Nome</TableHead>
              <TableHead>UF Sigla</TableHead>
              <TableHead>UF Nome</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cidades.map((cidade, index) => (
              <TableRow key={index}>
                <TableCell>{cidade["municipio-id"]}</TableCell>
                <TableCell>{cidade["municipio-nome"]}</TableCell>
                <TableCell>{cidade["regiao-imediata-id"]}</TableCell>
                <TableCell>{cidade["regiao-imediata-nome"]}</TableCell>
                <TableCell>{cidade["regiao-intermediaria-nome"]}</TableCell>
                <TableCell>{cidade["UF-sigla"]}</TableCell>
                <TableCell>{cidade["UF-nome"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center pb-10">
        <Stack spacing={2}>
          <Pagination
            sx={{ button: { color: "#ffffff" } }}
            count={Math.ceil(allCidades.length / 10)}
            shape="rounded"
            onChange={(_, value) => setPage(value)}
            color="secondary"
          />
        </Stack>
      </div>
    </div>
  );
}

export default App;
