# Simplifying Complex Logic with JSONLogic in React

## Introduction
When building dynamic applications in React, you often encounter complex logic that involves conditions, calculations, and decision-making. Handling these intricacies can be challenging, but there's a powerful tool that can make your life easier: JSONLogic.

In this article, we'll explore how to leverage JSONLogic in React to simplify complex logic. We'll build an arithmetic calculator as an example, showcasing how JSONLogic can streamline calculations and decision trees.

## Prerequisites
Before diving into JSONLogic, ensure you have the following prerequisites:
- Basic knowledge of React
- Node.js and npm installed on your machine

## Setting Up the Project
We'll start by setting up a new React project. You can create one using the Create React App or your preferred setup method. If you need guidance on setting up a React project, refer to the [official React documentation.](https://reactjs.org/docs/create-a-new-react-app.html)

## What is JSONLogic
JsonLogic isn’t a full programming language. It’s a small, safe way to delegate one decision. You could store a rule in a database to decide later. You could send that rule from back-end to front-end so the decision is made immediately from user input. Because the rule is data, you can even build it dynamically from user actions or GUI input.

JsonLogic has no setters, no loops, no functions or gotos. One rule leads to one decision, with no side effects and deterministic computation time, refer to the [official JsonLogic Website.](https://jsonlogic.com/)

##Installing the JSONLogic Library

To work with JSONLogic in our React project, we'll need the json-logic-js library. You can easily add it using npm:

```
npm install json-logic-js
```

##Simplifying Logic with JSONLogic
**The JSONLogic Advantage**
JSONLogic is a lightweight and expressive logic language that excels at handling complex conditions, calculations, and decisions. It's especially valuable when you need to make data-driven choices in your applications.

##Building an Arithmetic Calculator
**Creating the Calculator Component**
Now, let's create a new component for our arithmetic calculator. We'll call it ArithmeticCalculator.js. In this component, we'll define the calculator's user interface and logic.

```
import React, { useState } from 'react';
import jsonLogic from 'json-logic-js';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ArithmeticCalculator = () => {
  // State variables for result, operation, and input values
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('+');
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  // Event handler for changing the operation
  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'value1') {
      setValue1(value);
    } else if (name === 'value2') {
      setValue2(value);
    }
  };

  // Event handler for calculation
  const handleSubmit = () => {
    const jsonExp = `{"${operation}": [{"var": "value1"}, {"var": "value2"}]}`;
    const inputData = {
      value1: parseFloat(value1),
      value2: parseFloat(value2),
    };

    const result = jsonLogic.apply(JSON.parse(jsonExp), inputData);
    setResult(JSON.stringify(result));
  };

  // Render the calculator UI
  return (
    <div>
      {/* ... (component JSX code, as shown in the refactored example) ... */}
    </div>
  );
};

export default ArithmeticCalculator;

```

##Handling User Input and Dynamic Logic
Inside the calculator component, we'll use React state hooks to manage the state of the calculator, including the selected operation and input values. Event handlers will update the state as users interact with the calculator. When the "Calculate" button is clicked, JSONLogic will come into play, simplifying the arithmetic operation.

## Utilizing JSONLogic
In our calculator example, JSONLogic will simplify complex logic into a concise and human-readable format. It will handle the dynamic calculation based on user input and the selected operation.

## Try It Out
To use the calculator, enter two values in the input fields, select an operation from the dropdown, and click "Calculate." JSONLogic will perform the operation, and the result will be displayed instantly. The source code is available at our [git repostiriry](https://github.com/amitshri05/AS-React-JsonLogic)


## Conclusion
In this article, we've explored the power of JSONLogic in simplifying complex logic in React applications. JSONLogic allows you to express intricate conditions and calculations in a clear and concise way. Whether you're building a calculator or tackling more complex scenarios, JSONLogic can be your go-to tool for handling dynamic logic.
