import React from 'react'
import { Row, Col } from 'react-bootstrap';

export default function left({back1,count1,backZero1,operationFun1,operation1,changeOperator1}) {
    return (
        <Row className='h-100 w-100 '>
        <Col xs={3} className='p-3'>
            <Row className='h-100 text-center'>
                <Col onClick={()=>changeOperator1()} className='  d-flex justify-content-center align-items-center m-3 properties' style={{background:'#540375'}} xs={12}>
                    <p className='rotate-left'>{operation1}</p>
                </Col>
                <Col onClick={backZero1} className='  d-flex justify-content-center align-items-center m-3 properties ' style={{background:'#540375'}} xs={12}>
                    <p  className='rotate-left'>صفر</p>

                </Col>
                <Col onClick={back1} className='  d-flex justify-content-center align-items-center m-3 properties' style={{background:'#540375'}} xs={12}>
                    <p className='rotate-left'>رجوع</p>
                </Col>
            </Row>
        </Col>
        <Col xs={3} className='p-3'>
            <Row className='h-100 text-center'>
                <Col onClick={(event)=>operationFun1(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties'  style={{background:'#540375'}}  xs={12}>
                    <p  value={1} className='rotate-left'>1</p>
                </Col>
                <Col onClick={(event)=>operationFun1(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties'  style={{background:'#540375'}}  xs={12}>
                    <p className='rotate-left'>2</p>

                </Col>
                <Col onClick={(event)=>operationFun1(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties'  style={{background:'#540375'}}  xs={12}>
                    <p className='rotate-left'>3</p>

                </Col>
            </Row>
        </Col>
        <Col xs={3} className='p-3'>
            <Row className='h-100 text-center'>
                <Col onClick={(event)=>operationFun1(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties'  style={{background:'#540375'}}  xs={12}>
                    <p className='rotate-left'>4</p>
                </Col>
                <Col onClick={(event)=>operationFun1(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties'   style={{background:'#540375'}} xs={12}>
                    <p className='rotate-left'>5</p>

                </Col>
                <Col onClick={(event)=>operationFun1(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties'  style={{background:'#540375'}}  xs={12}>
                    <p className='rotate-left'>6</p>

                </Col>
            </Row>
        </Col>
        <Col xs={3} className='p-3'>
            <Row className='h-100 text-center'>
                <Col onClick={(event)=>operationFun1(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties'  style={{background:'#540375'}} xs={12}>
                    <p className='rotate-left'>7</p>
                </Col>
                <Col  className='  d-flex justify-content-center align-items-center m-3 properties score p-0'  style={{background:'#FFBF00'}}  xs={12}>
                <p className='rotate-left'>{count1}</p>
                </Col>
                <Col onClick={(event)=>operationFun1(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties'  style={{background:'#540375'}}  xs={12}>
                    <p className='rotate-left'>8</p>

                </Col>
            </Row>
        </Col>

    </Row>
    )
}
