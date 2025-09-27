"use client";
import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const green = "#8FE64A";

  return (
    <footer className="bg-black text-white mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold" style={{ color: green }}>
            Elemently
          </span>
          <span className="text-white/70">• Explore the world of elements</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link
            href="/"
            className="!text-[#8FE64A] hover:text-[#7ED957] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/periodic-table"
            className="!text-[#8FE64A] hover:text-[#7ED957] transition-colors"
          >
            Periodic Table
          </Link>
          <Link
            href="/about"
            className="!text-[#8FE64A] hover:text-[#7ED957] transition-colors"
          >
            About
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7ED957] transition-colors"
          >
            <Github size={20} color="#8FE64A" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7ED957] transition-colors"
          >
            <Twitter size={20} color="#8FE64A" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7ED957] transition-colors"
          >
            <Linkedin size={20} color="#8FE64A" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-4 py-4 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Elemently. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
