import React, {useState} from 'react'
import { InputGroup, Input, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col} from 'reactstrap'



export default function InputNames(){
        const [dropdownOpen, setDropdownOpen] = useState(false);
      
        const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
      
    return (
      <Row xs='10'>
        
          <InputGroup>
            <Col xs='10'>
              <Input placeholder="Ingresa tu nombre"/>
            </Col>
          <Col xs='7'>
            <Input placeholder="Nº Mesa" />
          </Col> 
          <Col>
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
          </Col>
        </InputGroup>
        
      </Row>
    )}