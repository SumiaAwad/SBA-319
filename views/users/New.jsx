const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New User'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/users' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Email: < input type="text" name="email"/> <br />
                    Phone Number: <input type="text" name="phoneNumber"/> <br />
                    <input type="submit" name="" value="Create user"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;