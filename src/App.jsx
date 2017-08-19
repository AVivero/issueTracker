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


class IssueList extends React.Component {
    constructor() {
        super();
        this.state = {issues: []};
        this.createIssue = this.createIssue.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        setTimeout(() => {
            this.setState({issues: issues})
        }, 500);
    }

    createIssue(newIssue) {
        const newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({issues: newIssues});
    }


    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <hr/>
                <IssueFilter/>
                <hr/>
                <IssueTable issues={this.state.issues}/>
                <hr/>
                <IssueAdd createIssue={this.createIssue}/>
            </div>
        );
    }
}


class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the Issue filter</div>
        );
    }
}


function IssueTable() {
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


const IssueRow = (props) => (
    <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toLocaleDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
        <td>{issue.title}</td>
    </tr>
)

class IssueAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let form = document.forms.issueAdd;
        this.props.createIssue({
            owner: form.owner.value,
            title: form.title.value,
            status: 'New',
            created: new Date(),
        })
        //clear the form for the next input
        form.owner.value = "";
        form.title.value = "";
    }

    render() {
        return (
            <div>
                <form name="issueAdd" onSubmit={this.handleSubmit}>
                    <input type="text" name="owner" placeholder="Owner"/>
                    <input type="text" name="title" placeholder="Title"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IssueList/>, contentNode);