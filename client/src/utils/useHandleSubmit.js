export default callback => {
  function handleSubmit(e) {
    e && e.preventDefault();
    callback();
  }

  return {
    handleSubmit
  };
};
