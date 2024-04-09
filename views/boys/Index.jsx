const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { boys } = this.props;


        return (
            <DefaultLayout title={"Boys Index Page"}>
                <nav>
                    <a href="/boys/new">Create a New Player</a>
                </nav>
                <ul>
                    {boys.map((boy, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/boys/${boy._id}`}>
                                    {boy.name}
                                </a> {' '}
                                is {boy.number} <br></br>
                                {boy.readyToPlay
                                ? `He is ready to play`
                            :   `He is NOT ready to play`}
                            <br />
                            <a href={`/boys/${boy._id}/edit`}>Edit This Boy</a>
                            <form action={`/boys/${boy._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;