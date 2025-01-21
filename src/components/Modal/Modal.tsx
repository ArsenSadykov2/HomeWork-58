import Backdrop from '../Backdrop/Backdrop.tsx';

interface Props extends React.PropsWithChildren{
    show: boolean;
    title: string;
    addButtons?:  {type: string , label: string, onClick: React.MouseEventHandler}[];
    closeModal: () => void;
}

const Modal: React.FC<Props> = ({show, title = 'Modal title', children, closeModal, addButtons}) => {

    return (
        <>
            <Backdrop show={show} onClick={closeModal}/>

                <div className="modal show" style={{display: show ? 'block' : 'none', width: "500px", minHeight: "200px" , position: 'fixed', top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} >
                    <div className="modal-dialog ">
                        <div className="modal-content">
                            <div className="modal-header row  justify-content-between">
                                <h1 className="modal-title fs-5 col-11">{title}</h1>
                                <button className="bg-white fs-4 ms-auto col-1 border-0" onClick={closeModal}>x</button>
                            </div>
                            <div className="p-2">
                                {children}
                            </div>
                            <div className="modal-footer">
                                {addButtons ?
                                    <>
                                        {addButtons.map(btn => (
                                            <button key={btn.label} className={`btn btn-${btn.type}`} onClick={btn.onClick}>{btn.label}</button>
                                        ))}
                                    </>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default Modal;
