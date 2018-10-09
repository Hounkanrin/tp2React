import React, { Component } from 'react';
import './AddPurchase.css'

export class AddPurchase extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     paidBy: '',
        //     title: '',
        //     amount: '',
        // }
    }

    // handleChange = (e) => {
    //     const curValue= e.target.value;
    //     const curItem= e.target.name;
    //     const currState = this.state;

    //     currState[curItem] = curValue;
    //     this.setState (currState);
    // }
    

    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.onAddCost(this.state);

        const cost = {
            title: this.title.value,
            paidBy: this.paidBy.value,
            amount: this.amount.value
        };
        this.props.onAddCost(cost.paidBy,cost.title, cost.amount);

    }

    render() {
        const { users } = this.props;
        return (
            <div className="add-user">
                <form onSubmit={this.handleSubmit} className="add-user-form">
                    <div>
                        <input className="add-name" type="text" placeholder="What?" name="title" ref={title => this.title = title} />
                    </div>
                    <div>
                        <select placeholder="Who?" name="paidBy" ref={paidBy => this.paidBy = paidBy}>
                            {users.map((user, index) => {
                                return (
                                    <option key={index}>{user}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                        <input className="add-cost" type="number" placeholder="SS" name="amount" ref={amount => this.amount = amount} />
                    </div>
                    <div>
                        <button type="submit" className="add-button">+</button>
                    </div>
                </form>
            </div>
        )
    }
}
