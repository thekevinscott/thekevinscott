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
  DEFAULT,
} from './config';

const writeSubscriberTags = subscriberTags => Object.entries(subscriberTags).map(([
  key,
  value,
]) => ({
  type: 'hidden',
  name: `${key}`,
  value,
}));

const API_KEY = 'TCa8raZQV_sVBpVvqtFm7Q';

export interface ISubscribeFormProps {
  form?: string;
  subscriberTags: {
    [index: string]: string;
  }
  descriptionPlacement: string;
  showImage?: boolean;
  compact?: boolean;
  getRef?: (el: HTMLElement) => void;
}

class SubscribeForm extends Component<ISubscribeFormProps> {
  constructor(props: ISubscribeFormProps) {
    super(props);

    this.state = {
      user: getUser(),
      submitting: false,
      submitted: null,
      submissionError: null,
    };
  }

  handleSubmit = (formID: string | number) => async (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    // for (var [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    const email = formData.get('email');
    const url = `https://api.convertkit.com/v3/forms/${formID}/subscribe?api_key=${API_KEY}&email=${email}`;
// fetch('https://api.convertkit.com/v3/forms/888718/subscribe?api_key=TCa8raZQV_sVBpVvqtFm7Q', {
// method: 'post'
// })
    try {
      this.setState({
        submitting: true,
        submissionError: null,
        submitted: null,
      });
      const response = await fetch(url, {
        method: 'post',
        // headers: {
        //   'Content-Type': 'application/json',
        //   'charset': 'utf-8',
        // },
      });
      const resp = await response.json();

      if (response.status < 400) {
        this.setState({
          submitted: email,
        });
      } else {

        this.setState({
          submissionError: resp.message || 'There was an error; please try again later',
        });
      }
      // console.log(resp);
    } catch (err) {
      this.setState({
        submissionError: err.message || 'There was an error; please try again later',
      });
      // console.error('error', err);
    }
    this.setState({
      submitting: false,
    });

  }

  render() {
    const {
      form,
      subscriberTags,
      descriptionPlacement,
      children,
      showImage,
      compact,
      getRef,
    } = this.props;

    const {
      formID,
      headline,
      descriptionID,
      description,
    } = getContainer(form, this.state.user);

    return (
      <div
        ref={getRef}
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
        <div className={classNames(styles.formContainer, {
          [styles.submitted]: !!this.state.submitted,
        })}>
        <div className={styles.form}>
        <Form
          handleSubmit={this.handleSubmit(formID)}
          compact={compact}
          method="post"
          submitting={this.state.submitting}
          inputs={[
            {
              required: true,
              type: 'text',
              id: 'email',
              name: 'email',
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
        {this.state.submitted && (<p className={styles.success}>Check your email ({this.state.submitted}) to confirm</p>)}
        {this.state.submissionError && (<p className={styles.error}>{this.state.submissionError}</p>)}
        </div>
      </div>
    );
  }
};

export default SubscribeForm;
export {
  DEFAULT,
} from './config';
