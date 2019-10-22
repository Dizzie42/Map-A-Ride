import React, { useEffect } from "react";
import styled from "styled-components";
import ContentEditable from "react-contenteditable";
import { updateRoute } from "../../../../utils/actions";

const Title = styled(ContentEditable)`
  outline: none;
  padding: 0px 15px 15px 0;
  font-size: 15px;
  color: rgba(19, 30, 65, 0.8);
  text-align: left;
  width: 30%;
  min-width: 200px;
  max-width: 200px;
`;

export default ({ routeDispatch, routeStore, title, setTitle }) => {
  const { currentRoute } = routeStore;

  useEffect(() => {
    setTitle(currentRoute.title);
  }, [currentRoute.title]);

  const handleTitle = e => {
    routeDispatch(updateRoute({ title: e.currentTarget.innerText }));
    setTitle(e.currentTarget.innerText);
  };

  return (
    <React.Fragment>
      <Title
        html={`<h3 id="title-editable">${title}</h3>`}
        id="title"
        onChange={handleTitle}
      />
    </React.Fragment>
  );
};

//set title limit
