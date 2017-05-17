const signin = (username) => {
  return {
    type: 'SIGNIN',
    username
  };
};

export {
  signin,
};
