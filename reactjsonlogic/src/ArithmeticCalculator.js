
import React, { useState } from 'react';
import jsonLogic from 'json-logic-js';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ArithmeticCalculator = () => {
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('+');
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'value1') {
      setValue1(value);
    } else if (name === 'value2') {
      setValue2(value);
    }
  };

  const handleSubmit = () => {
    const jsonExp = `{"${operation}": [{"var": "value1"}, {"var": "value2"}]}`;
    const inputData = {
      value1: parseFloat(value1),
      value2: parseFloat(value2),
    };

    const result = jsonLogic.apply(JSON.parse(jsonExp), inputData);
    setResult(JSON.stringify(result));
  };

  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Value 1</td>
            <td>
              <input
                type="text"
                name="value1"
                value={value1}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Operation</td>
            <td>
              <Form.Select size="sm" onChange={handleOperationChange}>
                <option value="+">Addition</option>
                <option value="-">Subtraction</option>
                <option value="*">Multiplication</option>
                <option value="/">Division</option>
                <option value="<">Less Than</option>
                <option value=">">Greater Than</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td>Value 2</td>
            <td>
              <input
                type="text"
                name="value2"
                value={value2}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Button variant="primary" onClick={handleSubmit}>
                Calculate
              </Button>
            </td>
          </tr>
          <tr>
            <td>Result</td>
            <td>{result}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ArithmeticCalculator;