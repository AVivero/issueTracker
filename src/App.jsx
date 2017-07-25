var contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the Issue filter</div>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        return (
            <div>This is a placeholder for a table of Issues</div>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placehodler for an Issue add entry form</div>
        );
    }
}

class IssueList extends React.Component {
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <hr/>
                <IssueFilter />
                <hr/>
                <IssueTable />
                <hr/>
                <IssueAdd />
            </div>
        );
    }
}

ReactDOM.render(<IssueList />, contentNode);