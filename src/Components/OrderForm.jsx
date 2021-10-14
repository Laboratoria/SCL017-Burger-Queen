import React, { useState } from "react";
import {
  InputGroup,
  Input,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function OrderForm() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  return (
    <InputGroup className="inputFormOrder">
      <Input placeholder="Nombre de cliente" />

      <Input placeholder="Nombre mesero/a" />

      <InputGroupButtonDropdown
        addonType="append"
        isOpen={dropdownOpen}
        toggle={toggleDropDown}
      >
  
        <DropdownToggle caret>MESAS</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Mesa 1</DropdownItem>
          <DropdownItem>Mesa 2</DropdownItem>
          <DropdownItem>Mesa 3</DropdownItem>
          <DropdownItem>Mesa 4</DropdownItem>
          <DropdownItem>Mesa 5</DropdownItem>
        </DropdownMenu>
      </InputGroupButtonDropdown>
    </InputGroup>
  );
}
