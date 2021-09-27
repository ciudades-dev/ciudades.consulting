import Head from "next/head";
import React from "react";
import Hero from "../components/hero/hero";
import Industry from "../components/industry/industry";
import industries from "../fixtures/industries.fixtures";
import Service from "../components/services/services";
import services from "../fixtures/services.fixture";
import ColorfulComponent from "../components/colorful-component/colorful-component";
import colors from "../fixtures/colorful-component.fixtures";
import ConceptComponent from "../components/concept-component/concept-component"
import concepts from "../fixtures/concept-component.fixture";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ciudades</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={"Product & Software"} />
      {services.map((service, index) => <Service key={index} {...service} />)}
      {industries.map((industry, index) => <Industry key={index} {...industry} />)}
    </div>
  )
}
