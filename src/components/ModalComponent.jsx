const ModalComponent = ({ text, open, handleConfirm }) => {

    console.log('hello', open)
    return (
        <>
            <div className={open ? 'confirm show' : 'confirm'}>
                <div className="confirm-content">
                    <h4>CONFIRM</h4>
                    <div>
                        <h2>{text}</h2>
                        <p>This action is final...</p>
                    </div>
                </div>
                <div className="confirm-btns">
                    <button className="btn-clear delete-btn" onClick={() => handleConfirm(true)}>YES</button>
                    <button onClick={() => handleConfirm(false)}>NO</button>
                </div>
            </div>
            <div
                className="overlay"
                onClick={() => handleConfirm(false)}
            />
        </>
    )
}
export default ModalComponent