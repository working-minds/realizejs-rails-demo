class KanbanColumn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columnBackgroundColorClass: 'grey lighten-3'
    }
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.column)).droppable({
      over: this.handleCardHover.bind(this),
      out: this.handleCardOut.bind(this),
      drop: this.handleCardDrop.bind(this)
    });
  }

  handleCardHover() {
    this.setState({ columnBackgroundColorClass: 'yellow lighten-3' });
  }

  handleCardOut() {
    this.setState({ columnBackgroundColorClass: 'grey lighten-3' });
  }

  handleCardDrop() {
    this.handleCardOut();
    this.props.onCardDrop(this.props.status);
  }

  handleCardDragStart(cardId) {
    this.props.onCardDragStart(cardId);
  }

  render() {
    const cards = this.props.cardsData.map((cardData) =>
      <KanbanCard key={cardData.id} data={cardData} onDragStart={this.handleCardDragStart.bind(this)} />
    );
    const status_mapping = issue_status_mapping[this.props.status];

    return (
      <div className="issues-kanban__column">
        <div className="column__title">{status_mapping.name}</div>
        <ul className={`column__cards ${this.state.columnBackgroundColorClass}`} ref="column">
          {cards}
        </ul>
      </div>
    )
  }

}