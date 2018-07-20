import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import Form from "components/Form";
import Container from "./Container";
import Description from "./Description";
import { getUser } from "utils/user";
import {
  DARK_BLUE,
  LIGHT_BLUE,
} from 'layouts/constants';
import getContainer, {
  LEAD_MAGNET_DATASET,
} from "./config";

const writeSubscriberTags = subscriberTags => Object.entries(subscriberTags).map(([
  key,
  value,
]) => ({
  type: "hidden",
  name: `fields[${key}]`,
  value,
}));

class SubscribeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { user: getUser() };
  }

  render() {
    const {
      form,
      subscriberTags,
      descriptionPlacement,
      children,
    } = this.props;

    const {
      formID,
      headline,
      descriptionID,
      description,
    } = getContainer(form, this.state.user);

    return (
      <Container>
        {descriptionPlacement === "above" && (
          <Description description={description} />
        )}
        <Form
          action={`https://www.getdrip.com/forms/${formID}/submissions`}
          method="post"
          data-drip-embedded-container={formID}
          inputs={[
            {
              required: true,
              type: "email",
              id: "drip-email",
              name: "fields[email]",
              placeholder: "Email Address",
            },
            ...writeSubscriberTags({
              ...subscriberTags,
              descriptionID,
            }),
          ]}
          headline={headline}
        >
          {descriptionPlacement === "inside" && (
            <Description description={children || description} />
          )}
        </Form>
      </Container>
    );
  }
};

SubscribeForm.propTypes = {
  form: PropTypes.string,
  subscriberTags: PropTypes.object,
  descriptionPlacement: PropTypes.string,
};

SubscribeForm.defaultProps = {
  subscriberTags: {},
  form: LEAD_MAGNET_DATASET,
  descriptionPlacement: null,
};

export default SubscribeForm;
export {
  TENSORFLOWJS,
  DEEP_LEARNING_JOURNAL,
  HEADER_FORM,
  LEAD_MAGNET_DATASET,
} from "./config";
