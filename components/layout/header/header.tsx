"use client";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="!sticky w-[90%] top-[20px] mx-auto rounded-full z-50
             bg-gradient-to-r from-[#8FE64A] to-[#7ED957]
             shadow-[0_10px_30px_rgba(0,128,0,0.7)]"
    >
      <Container className="flex items-center justify-between">
        {/* Brand */}
        <Navbar.Brand
          href="/"
          className="text-2xl font-bold tracking-wide text-white hover:text-[#DFFF9C] transition-colors"
        >
          Elemently
        </Navbar.Brand>

        {/* Toggle (hamburger) */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 focus:outline-none focus:ring-2 focus:ring-[#7ED957]"
        />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex items-center space-x-6 text-lg">
            <Nav.Link
              href="/periodic-table"
              className="!text-white hover:!text-[#DFFF9C] transition-colors"
            >
              Periodic Table
            </Nav.Link>
            <Nav.Link
              href="/about"
              className="!text-white hover:!text-[#DFFF9C] transition-colors"
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
