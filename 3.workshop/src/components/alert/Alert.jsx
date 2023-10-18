/* eslint-disable react/prop-types */
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

const Alert = ({ show, setshow, variant, message }) => {
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className="position-absolute"
            style={{ top: '0', right: '0', width: '100%' }}>
            <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
                <Toast onClose={() => setshow(false)} show={show} bg={variant ? variant.toLowerCase() : ""} delay={5000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">
                            {variant === "success" ? "Éxito" : "Error"}
                        </strong>
                    </Toast.Header>
                    <Toast.Body style={{ color: '#FFF' }}>
                        {message}
                    </Toast.Body>
                </Toast>
            </ToastContainer>

        </div>
    )
}

export default Alert