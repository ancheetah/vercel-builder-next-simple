import { Builder } from "@builder.io/react";
import React from 'react';

export const ObjectComponent = (props: { group: Object }) => {
  return(
    <div style={{'width': '50vw'}}>
      <h1>{props.group?.title}</h1>
      <p>{props.group.image}</p>
      <img src={props.group.image} width='100'></img>
    </div>
  )
}

Builder.registerComponent(ObjectComponent, {
  name: "Object Component",
  inputs: [
    {
      name: "group",
      type: 'object',
      defaultValue: { title: "Default Title"},
      subFields: [
        {
          name: "title",
          type: "html",
          defaultValue: 'I am a heading!'
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ['png', 'jpeg']
        },
      ]
    },
  ],
});
