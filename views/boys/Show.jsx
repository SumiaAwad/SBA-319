const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const boy = this.props.boy;

        return (
            <DefaultLayout title="Show an Individual Boy">
                <p>The {boy.name} is {boy.number}</p>
                {boy.readyToPlay ? 'He is ready to play' : "NOT READY!"}
                <br />
                <a href={`/boys/${boy._id}/edit`}>Edit This Boy</a>
                <form action={`/boys/${boy._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/boys">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;