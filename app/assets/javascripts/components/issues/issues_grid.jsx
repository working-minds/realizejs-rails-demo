const IssuesGrid = (props) => {
  return (
    <Card title={props.title}>
      <FlashMessages messages={props.flashMessages} />
      <Grid {...props.grid} />
      <Button name="Back" style="cancel" element="a" href={"/"} />
    </Card>
  );
};