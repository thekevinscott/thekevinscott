import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'gatsby-link';
import Form from 'components/Form';
import * as styles from './styles.module.scss';
import Description from './Description';
import { getUser } from 'utils/user';
import {
  DARK_BLUE,
  LIGHT_BLUE,
} from 'layouts/constants';
import getContainer, {
  LEAD_MAGNET_DATASET,
} from './config';

const writeSubscriberTags = subscriberTags => Object.entries(subscriberTags).map(([
  key,
  value,
]) => ({
  type: 'hidden',
  name: `fields[${key}]`,
  value,
}));

export interface ISubscribeFormProps {
  form?: string;
  subscriberTags: {
    [index: string]: string;
  }
  descriptionPlacement: string;
  showImage?: boolean;
  compact?: boolean;
}

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
      showImage,
      compact,
    } = this.props;

    const {
      formID,
      headline,
      descriptionID,
      description,
    } = getContainer(form, this.state.user);

    return (
      <div
        className={classNames(styles.container, {
          [styles.compact]: compact,
        })}
      >
        {descriptionPlacement === 'above' && (
          <Description
            showImage={showImage}
            description={description}
          />
        )}
        <Form
          compact={compact}
          action={`https://www.getdrip.com/forms/${formID}/submissions`}
          method="post"
          data-drip-embedded-container={formID}
          inputs={[
            {
              required: true,
              type: 'email',
              id: 'drip-email',
              name: 'fields[email]',
              placeholder: 'Email Address',
            },
            ...writeSubscriberTags({
              ...subscriberTags,
              descriptionID,
            }),
          ]}
          headline={headline}
        >
          {descriptionPlacement === 'inside' && (
            <Description
              showImage={showImage}
              description={children || description}
            />
          )}
        </Form>
      </div>
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
} from './config';
