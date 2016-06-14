var ProjectNew = React.createClass({
    render: function () {
        return (<div>
            <Container>
                <div>
                    <Input
                        id='newProject'
                        name='Name'
                        component= 'text'
                        formStyle= 'oneLine'
                    />
                </div>
                <div>
                    <Button
                        name='Save Project'
                        icon='save'
                        element='a'
                        href='http://localhost:3000/projects/'
                    />
                    <Button
                        name='Back'
                        icon=''
                        element='a'
                        href='http://localhost:3000/projects/'
                    />
                </div>
            </Container>
        </div>)},
})
