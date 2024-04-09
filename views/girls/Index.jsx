const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { girls } = this.props;

        return (
            <DefaultLayout title={"girls Index Page"}>
                <nav>
                    <a href="/girls/new">Create a New Girl</a>
                </nav>
                <ul>
                    {girls.map((girl, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/girls/${girl._id}`}>
                                    {girl.name}
                                </a> {' '}
                                is {girl.number} <br></br>
                                {girl.readyToPlay
                                ? `she is ready to Play`
                            :   `she is NOT ready to play`}
                            <br />
                            <a href={`/girls/${girl._id}/edit`}>Edit This Girl</a>
                            <form action={`/girls/${girl._id}?_method=DELETE`} method="POST">
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