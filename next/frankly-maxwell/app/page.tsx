import React from "react";
import Head from "next/head";
import Header from "./_components/Header";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
// TODO: fix icons
// TODO: go through /images and double check that they are all being used
// TODO: edit projects and skills to use more recent stuff

export default function Home() {
  return (
      <>
        <Header />
        <About />
        {/* <Skills /> */}
        <Projects />
      </>
  );
}
