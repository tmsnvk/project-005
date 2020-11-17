import React, { FunctionComponent } from "react";

type ComponentType = {
  data: {
    title: string
  }
}

const Title: FunctionComponent<ComponentType> = ({ data }) => (
  <header>
    <h1>{data.title}</h1>
  </header>
)

export default Title;