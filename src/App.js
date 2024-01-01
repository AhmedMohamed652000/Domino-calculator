import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Left from './components/left';
import Right from './components/right';

function App() {

  const [count1, secount1] = useState(0)
  const [last1, setlast1] = useState(0)
  const [operation1, setOpera1] = useState('نقص')

  const [count2, secount2] = useState(0)
  const [last2, setlast2] = useState(0)
  const [operation2, setOpera2] = useState('نقص')

  const backZero1 = () => {
    setlast1(count1)
    secount1(0)
  }
  const addToCount1 = (score) => {
    let scores = count1
    scores = count1 + Number(score)
    secount1(scores)
  }
  const DeleteToCount1 = (score) => {
    let scores = count1
    scores = count1 - Number(score)
    secount1(scores)
  }

  const operationFun1 = (score) => {
    setlast1(count1)
    if (operation1 === 'نقص')
      addToCount1(score)
    else
      DeleteToCount1(score)
  }
  const changeOperator1 = () => {
    if (operation1 === 'نقص')
      setOpera1('زود')
    else
      setOpera1('نقص')

    console.log(operation1)
  }

  const back1 = () => {
    secount1(last1)
  }

  //......................................................................................................

  const backZero2 = () => {
    setlast1(count1)
    secount2(0)
  }

  const addToCount2 = (score) => {
    let scores = count2
    scores = count2 + Number(score)
    secount2(scores)
  }
  const DeleteToCount2 = (score) => {
    let scores = count2
    scores = count2 - Number(score)
    secount2(scores)
  }

  const operationFun2 = (score) => {
    setlast2(count2)
    if (operation2 === 'نقص')
      addToCount2(score)
    else
      DeleteToCount2(score)
  }
  const changeOperator2 = () => {
    if (operation2 === 'نقص')
      setOpera2('زود')
    else
      setOpera2('نقص')

  }

  const back2 = () => {
    secount2(last2)
  }


  return (
    <Row className='w-100 vh-100 m-0 ' style={{ background: '#10A19D', paddingRight: ' 2vw',maxHeight:'100vw' }}>
      <Col className=' h-100 text-white d-flex justify-content-center' xs={6}>
        <Left back1={back1} changeOperator1={changeOperator1} operation1={operation1} operationFun1={operationFun1} backZero1={backZero1} count1={count1} />
      </Col>
      <Col className=' h-100 text-white d-flex justify-content-center' xs={6}>
        <Right back2={back2} changeOperator2={changeOperator2} operation2={operation2} operationFun2={operationFun2} backZero2={backZero2} count2={count2} />
      </Col>
    </Row>
  );
}

export default App;
