import {Modal, Button} from "react-bootstrap"



const ModalNotice = (props) => {    
    
    return (
        <>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >
          <div className="useBootstrapCss">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.severity}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>
                {props.message}
            </h5>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </div>
        </Modal>
        </>
      );
}

export default ModalNotice;
