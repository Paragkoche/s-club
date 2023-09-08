"use client";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Hero from "@/static/hero.png";
export default function Home() {
  return (
    <>
      <section className="full-w-h">
        <Container
          fluid
          className="mx-0 px-0 w-100 h-75"
          style={{
            backgroundImage: `url(${Hero.src})`,
            backgroundSize: "cover",
            backgroundPosition: "0% 65%",
            position: "relative",
          }}
        >
          <Container
            fluid
            className="p-3 ps-5"
            style={{
              position: "absolute",
              backgroundColor: "rgba(255, 255, 255, 0.78)",
              width: "50%",

              borderTopRightRadius: "2rem",
              bottom: "0",
            }}
          >
            <h1>Student Club</h1>
          </Container>
        </Container>
      </section>
    </>
  );
}
