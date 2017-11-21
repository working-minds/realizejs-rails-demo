const status_list = ['to_do', 'in_progress', 'done'];

class KanbanGrid extends Grid {
  constructor(props) {
    super(props);
  }

  handleCardDragStart(cardId) {
    this.setState({
      selectedCardId: cardId
    });
  }

  handleCardTransition(status) {
    $.ajax({
      url: `${this.props.url}/${this.state.selectedCardId}.json`,
      method: 'PUT',
      data: {
        issue: {
          status: status
        }
      },
      success: this.handleCardTransitionSuccess.bind(this),
      error: this.handleCardTransitionError.bind(this)
    })
  }

  handleCardTransitionSuccess() {
    this.loadData();
  }

  handleCardTransitionError() {
    alert('erro ao mover card');
  }

  renderKanbanOrTable() {
    switch(this.props.renderMode) {
      case 'kanban':
        return this.renderKanbanColumns();
      case 'grid':
      default:
        return super.renderTable();
    }
  }

  renderKanbanColumns() {
    const columns = [];
    const dataRows = this.state.dataRows;

    for(let status of status_list) {
      columns.push(
        <KanbanColumn
          status={status}
          key={status}
          cardsData={dataRows.filter((dataRow) => dataRow.status == status)}
          onCardDrop={this.handleCardTransition.bind(this)}
          onCardDragStart={this.handleCardDragStart.bind(this)}
        />
      );
    }

    return <div className="issues-kanban">{columns}</div>;
  }

  render() {
    return (
      <div className={this.gridClassName()} ref="grid">
        {this.renderFilter()}

        {this.renderPaginationOnTop()}
        {this.renderKanbanOrTable()}
        {this.renderPagination()}
      </div>
    );
  }
}