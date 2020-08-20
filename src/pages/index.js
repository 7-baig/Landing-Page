import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import Image from "../components/image"
import { Main } from "../components/Main/Main"
import { Service } from "../components/Service/Service"
import { Properties } from "../components/Properties/Properties"
import { Social } from "../components/Social/Social"


const IndexPage = () => (
  <Layout>
    <Main />
    <Service />
    <Properties />
    <Social />
  </Layout>
)

export default IndexPage
