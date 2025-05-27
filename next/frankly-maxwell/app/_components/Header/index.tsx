import React from "react";
import Nav from "./Nav";
import HomeBanner from "./HomeBanner";

import "@/app/_css/header.css";

export default function Header() {
  return (
    <header>
      <Nav />
      <HomeBanner />
    </header>
  )
}
