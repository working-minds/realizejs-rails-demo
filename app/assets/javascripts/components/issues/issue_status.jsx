const status_props_mapping = {
    to_do: {
        color: 'red lighten-2',
        name: 'To do'
    },
    in_progress: {
        color: 'yellow darken-2',
        name: 'In progress'
    },
    done: {
        color: 'green lighten-1',
        name: 'Done'
    }
};

const IssueStatus = (props) => {
    const status_props = status_props_mapping[props.value];

    return (
        <span className={`issue-status ${status_props.color}`}>
            {status_props.name}
        </span>
    );
};