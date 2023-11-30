import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function App() {
  return (
    <div className="w-full bg-[#0F1012]">
      <div className="flex flex-col p-10">
        <div className="text-xl font-semibold text-white">
          Projeto Technochem
        </div>
        <div className="flex flex-col mt-8">
          <Card className="max-w-xs bg-[#232527]">
            <CardHeader>
              <CardTitle>Cidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
