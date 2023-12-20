const formatToJSON = logObject => {
  return JSON.stringify(logObject, null, 2);
};

export default formatToJSON;
