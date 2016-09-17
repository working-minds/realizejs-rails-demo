class IssuesPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderMode: props.renderMode
    }
  }

  render() {
    return (
      <div className="issues-panel">
        <InputSwitch offLabel="Grid" onLabel="Kanban" checked={this.state.renderMode == 'kanban'} onChange={this.handleSwitchChange.bind(this)} />
        <div className="issues-panel__container">
          <Card title={this.props.title}>
            <FlashMessages messages={this.props.flashMessages} />
            <KanbanGrid {...this.props.grid} renderMode={this.state.renderMode} />
            <Button name="Back" style="cancel" element="a" href={"/"} />
          </Card>
        </div>
      </div>
    );
  }

  handleSwitchChange(event) {
    this.setState({
      renderMode: (event.target.checked ? 'kanban' : 'grid')
    });
  }
}

IssuesPanel.propTypes = {
  title: React.PropTypes.string,
  flashMessages: React.PropTypes.object,
  grid: React.PropTypes.object,
  renderMode: React.PropTypes.oneOf(['grid', 'kanban'])
};

IssuesPanel.defaultProps = {
  renderMode: 'kanban'
};