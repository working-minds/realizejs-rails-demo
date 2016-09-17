class IssuesPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPanel: props.selectedPanel
    }
  }

  render() {
    return (
      <div className="issues-panel">
        <InputSwitch offLabel="Grid" onLabel="Kanban" onChange={this.handleSwitchChange.bind(this)} />
        <div className="issues-panel__container">
          {this.renderPanel()}
        </div>
      </div>
    )
  }

  renderPanel() {
    switch(this.state.selectedPanel) {
      case 'grid':
        return <IssuesGrid {...this.props} />;
      case 'kanban':
        return <IssuesKanban {...this.props} />;
      default:
        return <span />;
    }
  }

  handleSwitchChange(event) {
    this.setState({
      selectedPanel: (event.target.checked ? 'kanban' : 'grid')
    });
  }
}

IssuesPanel.propTypes = {
  selectedPanel: React.PropTypes.oneOf(['grid', 'kanban'])
};

IssuesPanel.defaultProps = {
  selectedPanel: 'grid'
};