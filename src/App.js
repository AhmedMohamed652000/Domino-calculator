import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Left from './components/left';
import Right from './components/right';
import Sidebar2 from './components/Sidebar2';
import Sidebar1 from './components/Sidebar1';

function App() {

  const [count1, secount1] = useState(0)
  const [last1, setlast1] = useState(0)
  const [operation1, setOpera1] = useState('زود')

  const [count2, secount2] = useState(0)
  const [last2, setlast2] = useState(0)
  const [operation2, setOpera2] = useState('زود')

  const backZero1 = () => {
    addToHistory1('------------------------')
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
    if (operation1 === 'زود') {
      addToHistory1(score)
      addToCount1(score)
    }
    else {
      addToHistory1(' - ' + score)
      DeleteToCount1(score)
    }
  }
  const changeOperator1 = () => {
    if (operation1 === 'نقص')
      setOpera1('زود')
    else
      setOpera1('نقص')

  }

  const back1 = () => {
    secount1(last1)
  }

  //......................................................................................................

  const backZero2 = () => {
    addToHistory2('------------------------')
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
    addToHistory2(score)
    setlast2(count2)
    if (operation2 === 'زود') {
      addToCount2(score)
      addToHistory2(score)
    } else {
      addToHistory2(' - ' + score)
      DeleteToCount2(score)
    }
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


  const [history1, setHistory1] = useState([]);
  const [history2, setHistory2] = useState([]);
  const [isSidebar1Visible, setIsSidebar1Visible] = useState(false);
  const [isSidebar2Visible, setIsSidebar2Visible] = useState(false);
  // Example function to add to history when count changes
  const addToHistory1 = (newCount) => {
    setHistory1([...history1, newCount]);
  };

  const addToHistory2 = (newCount) => {
    setHistory2([...history2, newCount]);
  };

  

  return (
    <div className='position-relative'>
      <Row className='w-100 vh-100 m-0 ' style={{ background: '#10A19D', paddingRight: ' 2vw', maxHeight: '100vw' }}>
        <Col className=' h-100 text-white d-flex justify-content-center' xs={6}>
          <Left back1={back1} openSidebar={() => setIsSidebar1Visible(true)} changeOperator1={changeOperator1} operation1={operation1} operationFun1={operationFun1} backZero1={backZero1} count1={count1} />
        </Col>
        <Col className=' h-100 text-white d-flex justify-content-center' xs={6}>
          <Right back2={back2} openSidebar={() => setIsSidebar2Visible(true)} changeOperator2={changeOperator2} operation2={operation2} operationFun2={operationFun2} backZero2={backZero2} count2={count2} />
          {/* <Sidebar history={history1} /> */}
        </Col>
      </Row>
      {isSidebar1Visible && (
        <div style={{ position: 'absolute', top: 0, right: 0, width: '20%', height: '100%' }}>
          <Sidebar1 history={history1} closeSidebar={() => setIsSidebar1Visible(false)}  />
        </div>
      )}
      {isSidebar2Visible && (
        <div style={{ position: 'absolute', top: 0, right: 0, width: '20%', height: '100%' }}>
          <Sidebar2 history={history2} closeSidebar={() => setIsSidebar2Visible(false)} />
        </div>
      )}
    </div>
  );
}

export default App;
