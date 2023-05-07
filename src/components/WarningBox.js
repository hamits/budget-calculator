

function WarningBox(props) {

    const warningText = () => {
        if (props.warningType === "empty") {
            return (
                <div className="warning warn-empty">
                    <p>Charge Can't Be Empty Value And Amount Value Has To Be Bigger Than Zero</p>
                </div>
            )
        }
        else if (props.warningType === "add") {
            return (
                <div className="warning warn-add">
                    <p>Item Added</p>
                </div>
            )
        }
        else if (props.warningType === "delete") {
            return (
                <div className="warning warn-del">
                    <p>Item Deleted</p>
                </div>
            )
        }
        else {
            return (
                <div className="warning">
                    <p>Please Enter Your Expenses</p>
                </div>
            )
        }

    }
    return (
        <div>
            {warningText()}
        </div>
    )

}
export default WarningBox;