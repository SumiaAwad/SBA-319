const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const girl = this.props.girl;

        return (
            <DefaultLayout title="Show an Individual Girl">
                <p>The {girl.name} is {girl.number}</p>
                {girl.readyToPlay ? 'She is ready to Play' : "NOT READY!"}
                <br />
                <a href={`/girls/${girl._id}/edit`}>Edit This Girl</a>
                <form action={`/girls/${girl._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/girls">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;