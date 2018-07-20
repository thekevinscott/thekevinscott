export const DEEP_LEARNING_JOURNAL = 'DEEP_LEARNING_JOURNAL';
export const TENSORFLOWJS = 'TENSORFLOWJS';
export const LEAD_MAGNET_DATASET = 'LEAD_MAGNET_DATASET';
export const HEADER_FORM = 'HEADER_FORM';
const config = {
  [DEEP_LEARNING_JOURNAL]: {
    formID: "242548946",
    headline: "Subscribe to the AI and Deep Learning Journal",
    description: "I'm spending 2018 teaching myself AI and deep learning, and I'm journaling my adventure. Sign up below and I'll drop you a line when I publish new articles or find cool new tools.",
  },
  [TENSORFLOWJS]: (payload) => {
    const descriptions = [
      "After ten years of experience building apps for brands like Venmo and GE Healthcare, I'm building bleeding-edge AI software. Join me as I go through the latest in machine learning, web development, and design.",
      "If you love AI, JavaScript, and all things web, you'll feel right at home. I'm journaling my progress learning artificial intelligence after ten years of experience building web and mobile apps for brands like Venmo and GE Healthcare.",
    ];
    const [
      descriptionID,
      description,
    ] = getRand(payload.id, descriptions);

    return {
      formID: "277152125",
      headline: "Tensorflow.js and Machine Learning with Javascript",
      descriptionID: `${descriptionID}`,
      description,
    };
  },
  [LEAD_MAGNET_DATASET]: (payload) => {
    const descriptions = [
      "Download images from imagenet with the click of a button.",
      "Sign up, I send you a link, you enter the categories you want and how many images in each, I give you a zip file!",
    ];
    const [
      descriptionID,
      description,
    ] = getRand(payload.id, descriptions);

    return {
      formID: "277152125",
      headline: "Download image data for your machine learning model",
      descriptionID: `${descriptionID}`,
      description,
    };
  },
  [HEADER_FORM]: (payload) => {
    const descriptions = [
      "I send a newsletter about design, AI and other cool stuff in 2018.",
      "If you love AI, JavaScript, and all things web, you'll feel right at home. I'm journaling my progress learning artificial intelligence after ten years of experience building web and mobile apps for brands like Venmo and GE Healthcare.",
    ];

    return {
      formID: "277152125",
      headline: "My newsletter",
      descriptionID: `${descriptionID}`,
      description,
    };
  }
};

const getRand = (id, arr) => {
  const parsedId = id % arr.length;
  return [
    parsedId,
    arr[parsedId],
  ];
}

const parseConfig = (obj, payload = {}) => {
  if (typeof obj === "function") {
    return obj(payload);
  }

  return obj;
};

const getContainer = (key, user = {}) => {
  if (config[key]) {
    return parseConfig(config[key], user);
  }

  return parseConfig(config[TENSORFLOWJS], user);
};

export default getContainer;
