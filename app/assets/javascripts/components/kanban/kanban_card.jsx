class KanbanCard extends React.Component {

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.card)).draggable({
      revert: true,
      start: this.handleDragStart.bind(this)
    });
  }

  handleDragStart() {
    this.props.onDragStart(this.props.data.id);
  }

  render() {
    const data = this.props.data;

    return (
      <li className="issues-kanban__card" ref="card">
        <div className="card__title">
          <Icon type="priority_high" className="card__title-icon red-text lighten-2-text" />
          <span>{data.title}</span>
        </div>
        <div className="card__description grey-text lighten-1-text">{data.description}</div>
      </li>
    );
  }

}