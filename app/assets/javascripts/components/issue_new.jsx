var IssueNew = React.createClass({
    render: function () {
        return (<div>
            <Container>
                <div>
                    <Form
                        inputs={{
                          title: {
                            label: 'Title',
                            component: 'text'
                          },
                          description: {
                              label: 'Description',
                              component: 'textarea'
                          }
                        }}
                        />
                </div>
            </Container>
        </div>)},
})