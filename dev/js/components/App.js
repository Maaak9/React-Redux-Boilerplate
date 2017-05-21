import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import Counter from '../containers/counter';
import Calculator from '../containers/calculator';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
        <hr />
        <Counter />
        <hr />
        <Calculator />
        <br />
        <div className="col-md-12">
            <br />
            <h2>Test</h2>
        </div>
    </div>
);

export default App;
