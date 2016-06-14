var ProjectList = React.createClass({
    render: function () {
        return (<div>
            <Container>
                <div>
                    <Grid
                        url='/projects'
                        eagerLoad={true}
                        dataRowsParam='projects'
                        columns={{
                            name: {
                                 name: 'name',
                               label: 'Name',
                               format:'text'
                            }
                            }}
                    />
                </div>
            </Container>
            </div>)},
})
