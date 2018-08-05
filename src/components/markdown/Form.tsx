import React from 'react';
import PropTypes from 'prop-types';
import SubscribeForm from 'components/SubscribeForm';

const Subscribe = ({
  id,
  children,
}) => {
  return (
    <span>
      <SubscribeForm
        form={id}
        descriptionPlacement="inside"
      >
        {children}
      </SubscribeForm>
    </span>
  );
};

Subscribe.propTypes = {
  id: PropTypes.string,
};

export const KEY = 'subscribe';

export default Subscribe;
