import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { AddPurchase } from './iWeComponent/AddPurchase';
import { Purchase } from './iWeComponent/Purchase';
import { Filter } from './iWeComponent/Filter';
import { Total } from './iWeComponent/Total';
import { addCost } from './reduce/actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      costFilter: []
    }
  }
  
  componentDidMount() {
    const { costs } = this.props;
    this.setState({
      costFilter: costs
    })
  };

  componentWillReceiveProps({ costs }) {
    this.setState({
      costFilter: costs
    })

  }


  // handleAddCost = (fields) => {
  //   //this.setState({
  //     //costs: [...this.props.costs, fields],
  //   //})
  // };

  handleFilter = (user) => {
    let costFilter;
    if (user === "tous") {
      costFilter = this.props.costs;
    } else {
      costFilter = this.props.costs.filter(cost => cost.paidBy === user);
    }
    this.setState({ costFilter })
  }

  render() {
    const { costFilter } = this.state;
    //const { users } = this.state;
    const { users, handleAddCost } = this.props;
    const { costs } = this.props;

    //console.log(costs);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Integeration Week-end</h1>
          <Filter users={users} costs={costs} onFilter={this.handleFilter} />
        </header>
        <div className="Purchase">
          <Purchase costs={costFilter} />
          <AddPurchase users={users} onAddCost={handleAddCost} />
          <Total costs={costFilter} />
        </div>
      </div>
    );
  }
}
//props to store
const mapStateToProps = state => ({ costs: state.costs, users: state.users })
const mapDispatchToProps = dispatch => {
  return {
    handleAddCost: (paidBy, title, amount) => {
      dispatch(addCost(paidBy, title, amount))
    }
  }

}
//connect to store 
const ConnectedGroupExpenseApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedGroupExpenseApp;
