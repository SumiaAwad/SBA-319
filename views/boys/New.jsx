const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Boy'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/boys' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Number: < input type="text" name="number"/> <br />
                    Is Ready to Play: <input type="checkbox" name="readyToPlay"/> <br />
                    <input type="submit" name="" value="Create Boy"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;