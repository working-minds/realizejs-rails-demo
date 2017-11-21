const IssuesForm = (props) => {
  return (
    <Card title={props.title}>
      <Form {...props.form} />
    </Card>
  );
};