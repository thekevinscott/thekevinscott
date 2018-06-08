import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SubscribeForm from "components/SubscribeForm";

const Container = styled.span `
`;

const Subscribe = ({
  id,
  children,
}) => {
  return (
    <Container>
      <SubscribeForm
        form={id}
        descriptionPlacement="inside"
      >
        {children}
      </SubscribeForm>
    </Container>
  );
};

Subscribe.propTypes = {
  id: PropTypes.string,
};

export const KEY = "subscribe";

export default Subscribe;
