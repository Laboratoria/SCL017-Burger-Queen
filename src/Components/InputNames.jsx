import React, {useState} from 'react'
import { InputGroup, Input, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col} from 'reactstrap'



export default function InputNames(){
        const [dropdownOpen, setDropdownOpen] = useState(false);
      
        const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
      
    return (
   
          <InputGroup>
       
              <Input placeholder="Ingresa tu nombre"/>

            <Input placeholder="Nº Mesa" />
        
            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
            <DropdownToggle caret>
              MESAS
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Mesa 1</DropdownItem>
              <DropdownItem>Mesa 2</DropdownItem>
              <DropdownItem>Mesa 3</DropdownItem>
              <DropdownItem>Mesa 4</DropdownItem>
              <DropdownItem>Mesa 5</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
       
        </InputGroup>
     
    )}