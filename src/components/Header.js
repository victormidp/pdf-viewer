import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

const Example = ({ items, onOptionChange }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const renderOptions = () => {
		return items.map((item, idx) => {
			return (
				<DropdownItem onClick={() => onOptionChange(idx)}>
					{item.title}
				</DropdownItem>
			);
		});
	};

	return (
		<Navbar color="light" light expand="md" fixed>
			<NavbarBrand href="/">PDF Viewer</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Options
						</DropdownToggle>
						<DropdownMenu right>{renderOptions()}</DropdownMenu>
					</UncontrolledDropdown>
					<NavItem>
						<NavLink>Download</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Example;
