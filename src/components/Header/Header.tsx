import "./Header.css";
import Button from "../Button/Button";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {

  return (
    <div className="header-container">
        <nav>
            <span>Mobiefy</span>
            <ol>
                <li>
                    <a href="">Sobre</a>
                </li>
                <li>
                    <a href="">Vantagens</a>
                </li>
                <li>
                    <Button>Baixar App</Button>
                </li>
            </ol>
        </nav>
        <div>
            <p>Desbloqueando viagens inteligentes com seu passaporte de mobilidade eficiente!</p>
            <Button>Comece Já</Button>
        </div>
    </div>
  );
}