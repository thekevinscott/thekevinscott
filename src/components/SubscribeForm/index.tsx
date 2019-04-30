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

const transformKey = (key: string) => {
  if (key === 'formPosition') {
    return 'form_position';
  }
  if (key === 'formSource') {
    return 'form_source';
  }
  if (key === 'descriptionID') {
    return 'description_id';
  }
  return key;
};

const writeSubscriberTags = subscriberTags => Object.entries(subscriberTags).map(([
  key,
  value,
]) => {
  return {
    type: 'hidden',
    name: `fields[${transformKey(key)}]`,
    value,
  };
});

const API_KEY = 'TCa8raZQV_sVBpVvqtFm7Q';

export interface ISubscribeFormProps {
  form?: string;
  subscriberTags: {
    [index: string]: string;
  }
  showImage?: boolean;
  getRef?: (el: HTMLElement) => void;
  type: 'sidebar' | 'footer' | 'inline';
  active: boolean | string | null;
  onSubscribe: (type: string) => void;
}

const fdAsObj = (fd: FormData, whitelist: string[] = []) => {
  const obj: {
    [index: string]: any;
  } = {};
  fd.forEach((value, key) => {
    if (whitelist.includes(key)) {
      obj[key] = value;
    }
  });
  return obj;
};

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
    formData.append('api_key', API_KEY);
    const email = formData.get('email');
    const url = `https://api.convertkit.com/v3/forms/${formID}/subscribe`;
    try {
      this.setState({
        submitting: true,
        submissionError: null,
        submitted: null,
      });
      const response = await fetch(url, {
        method: 'post',
        body: formData,
      });
      const resp = await response.json();

      if (response.status < 400) {
        this.setState({
          submitted: email,
        });
        this.props.onSubscribe(this.props.type);
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
      children,
      showImage,
      getRef,
      type,
      active,
    } = this.props;

    const {
      formID,
      headline,
      descriptionID,
      description,
      footerLarge,
      footerSmall,
    } = getContainer(form, this.state.user);

    return (
      <div
        ref={getRef}
        className={classNames(styles.container, {
          [styles[type]]: styles[type],
          [styles.active]: active,
        })}
      >
        {type === 'footer' && (
          <Description
            showImage={showImage}
            description={footerSmall}
          />
        )}
        <div className={classNames(styles.formContainer, {
          [styles.submitted]: !!this.state.submitted,
        })}>
        <div className={styles.form}>
        <Form
          handleSubmit={this.handleSubmit(formID)}
          compact={type === 'sidebar'}
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
              form_source: 'web',
              description_id: descriptionID,
            }),
          ]}
          headline={type === 'footer' ? footerLarge : null}
          error={this.state.submissionError}
          success={this.state.submitted}
        >
          {type === 'inline' && (
            <Description
              headline={headline}
              showImage={showImage}
              description={children || description}
            />
          )}
          {type === 'sidebar' && (
            <Description
              showImage={showImage}
              description={children || description}
            />
          )}
        </Form>
        </div>
        </div>
      </div>
    );
  }
};

export default SubscribeForm;
export {
  DEFAULT,
} from './config';
