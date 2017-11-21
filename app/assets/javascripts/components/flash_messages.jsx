const FlashMessages = (props) => {
  const typeMapping = {
    notice: 'success',
    alert: 'warning'
  };

  const flashMessages = [];
  for(let [type, message] of ObjectIterator.iterate(props.messages)) {
    let mappedType = typeMapping[type] || type;
    flashMessages.push(
      <Flash type={mappedType} message={message} key={mappedType} />
    )
  }

  return <div>{flashMessages}</div>;
};