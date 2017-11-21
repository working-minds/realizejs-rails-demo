const ProjectsGrid = (props) => {
  return (
    <Card title={props.title}>
      <FlashMessages messages={props.flashMessages} />
      <Grid {...props.grid} />
    </Card>
  );
};