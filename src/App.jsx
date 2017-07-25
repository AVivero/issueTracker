var contentNode = document.getElementById('contents');

const issues = [{
        id: 1,
        status: 'Open',
        owner: "Alex",
        created: new Date('2017-07-04'),
        effort: 5,
        completionDate: undefined,
        title: "Error in console when clicking Add",
    },
        {
            id: 2,
            status: 'Assigned',
            owner: "Israel",
            created: new Date('2017-07-14'),
            effort: 8,
            completionDate: new Date('2017-07-20'),
            title: "Missing bottom border on panel",
        },
        {
            id: 3,
            status: 'Open',
            owner: "Pepe",
            created: new Date('2017-06-24'),
            effort: 4,
            completionDate: new Date('2017-06-28'),
            title: "Whatever",
        }
    ]
;

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the Issue filter</div>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue}/>);
        return (
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Status</th>
                    <th>Owner</th>
                    <th>Created</th>
                    <th>Effort</th>
                    <th>Completion Date</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                {issueRows}
                </tbody>
            </table>
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

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toLocaleDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
                <td>{issue.title}</td>
            </tr>
        );
    }
}

class IssueList extends React.Component {
    constructor() {
        super();
        this.state = {issues: issues};
        setTimeout(this.createTestIssue.bind(this), 2000);
    }

    createIssue(newIssue) {
        const newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({issues: newIssues});
    }

    createTestIssue() {
        this.createIssue({
            status: 'New', owner: 'Michael', created: new Date(), title: 'Completion date should be optional',
        });
    }

    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <hr/>
                <IssueFilter />
                <hr/>
                <IssueTable issues={this.state.issues}/>
                <hr/>
                <IssueAdd />
            </div>
        );
    }
}

ReactDOM.render(<IssueList />, contentNode);