import React, { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Table from "react-bootstrap/Table";
function ViewAppointment({ children, eventKey, callback }) {
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  return <div onClick={decoratedOnClick}>{children}</div>;
}

function Example() {
  return (
    <>
      <Table striped bordered hover>
        {" "}
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
      </Table>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <ViewAppointment eventKey="0">
              {" "}
              <Table striped bordered hover>
                {" "}
                <tbody>
                  <tr>
                    <td></td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
            </ViewAppointment>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <ViewAppointment eventKey="0">
              {" "}
              <Table striped bordered hover>
                {" "}
                <tbody>
                  <tr>
                    <td></td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
            </ViewAppointment>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

export default Example;
