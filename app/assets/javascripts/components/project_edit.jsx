var ProjectEdit = React.createClass({
    render: function () {
        return (<div>
            <Container>
                <div>
                    <Form
                       inputs= {{
                             name: {
                             label: 'Project Name',
                             formStyle: 'oneLine'
                             }
                           }}
                           otherButtons= {[
                               	{
                                 name: 'actions.clear',
                                 icon: 'clear',
                                 element: 'button',
                                 type: 'reset'
                               		},
                               	{
                               	 name: 'Back',
                                 icon: '',
                                 element: 'button',
                                 href: 'http://localhost:3000/projects/'
                               	}]
                             	   }
                    />
                </div>
            </Container>
        </div>)},
})