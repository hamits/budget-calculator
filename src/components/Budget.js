
import { MdSend, MdDelete, MdCreate } from "react-icons/md";

function Budget(props) {


    const editClick = () => {
        props.setEdit(false)
        props.budget.splice(props.changedIndex, 1, { charge: props.charge, amount: props.amount, id: new Date().getTime(), })
        props.setCharge("")
        props.setAmount("")
    }


    const buttonType = () => {
        if (props.edit === true) {
            return (
                <button onClick={editClick} className="btn-submit">EDIT<MdSend className="btn-icon" /></button>
            )
        }
        else {
            return (
                <button onClick={budgetClick} className="btn-submit">SUBMIT<MdSend className="btn-icon" /></button>
            )
        }

    }

    const buttonClear = () => {
        if (props.budget.length !== 0) {
            return (
                <button onClick={() => { props.setBudget([]) }} className="btn-submit">CLEAR EXPENSES<MdDelete className="btn-icon" /></button>
            )
        }
    }



    const budgetClick = () => {
        if (props.charge === "" || props.amount === "") {
            props.setWarningType("empty")
        }
        else {
            props.setBudget([...props.budget,
            {
                id: new Date().getTime(),
                charge: props.charge,
                amount: props.amount,
            }
            ])
            props.setWarningType("add")
            props.setCharge("")
            props.setAmount("")
        }
    }
    const createClick = (e, index) => {
        props.setEdit(true)
        props.setChangedIndex(index)
        props.setCharge(e.charge)
        props.setAmount(e.amount)
    }
    const deleteClick = (e, index) => {
        props.budget.splice(index, 1)
        props.setBudget([...props.budget])
        props.setWarningType("delete")
    }


    return (
        <div className="budgetContainer">
            <div className="budgetInputContainer">
                <div className="budgetInput">
                    <label htmlFor="charge">Charge</label>
                    <input
                        onChange={(e) => { props.setCharge(e.target.value) }}
                        name="charge"
                        placeholder="e.g. rent"
                        type="text"
                        value={props.charge}
                    />
                </div>
                <div className="budgetInput">
                    <label htmlFor="amount">Amount</label>
                    <input
                        onChange={(e) => { props.setAmount(e.target.value) }}
                        name="amount"
                        placeholder="e.g. 100"
                        type="number"
                        value={props.amount}
                    />
                </div>
            </div>
            {buttonType()}
            {props.budget.map((e, index) => {
                return (
                    <div key={e.id} className="budgetList">
                        <p>{e.charge}</p>
                        <p className="amountList">$ {e.amount}</p>
                        <div>
                            <button onClick={() => createClick(e, index)}><MdCreate className="btn-icon-create " /></button>
                            <button onClick={() => deleteClick(e.amount, index)}><MdDelete className="btn-icon-delete" /></button>
                        </div>
                    </div>
                )
            })}
            {buttonClear()}
        </div>
    )
}

export default Budget