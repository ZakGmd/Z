"use client"
import { useState } from "react";
import {Checkbox, cn} from "@nextui-org/react";

export default function SelectUi() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected} size="md" defaultSelected ></Checkbox>
    </div>
  );
}