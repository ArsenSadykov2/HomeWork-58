import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Modal from "./components/Modal/Modal.tsx";
import {useState} from "react";

const App = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const addButtons = [
        {type: 'primary', label: 'Continue', onClick: () => console.log('Continue')},
        {type: 'danger', label: 'Close', onClick: () => setShowModal(prevShow => !prevShow)},
    ]

    return (
        <>
            <Modal
                show={showModal}
                closeModal={addButtons[1].onClick}
                title="Some kinda modal title"
                addButtons={addButtons}
            >
                <p>This is modal content</p>
            </Modal>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>Open Modal</button>
        </>
    )
};

export default App
