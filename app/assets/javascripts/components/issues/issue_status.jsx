const IssueStatus = (props) => {
  const status_props = issue_status_mapping[props.value];

    return (
        <span className={`issue-status ${status_props.color}`}>
            {status_props.name}
        </span>
    );
};