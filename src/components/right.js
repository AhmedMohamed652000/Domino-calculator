import React from 'react'
import { Col, Row } from 'react-bootstrap';

function right({back2,count2,backZero2,operationFun2,operation2,changeOperator2} ) {
    return (
        <Row className='h-100 w-100 '>

            <Col xs={3} className='p-3'>
                <Row className='h-100 text-center'>
                    <Col onClick={(event)=>operationFun2(event.target.innerText)}  className='  d-flex justify-content-center align-items-center m-3 properties' style={{background:'#FF7000'}} xs={12}>
                        <p className='rotate-right'>7</p>
                    </Col>
                    <Col   className='  d-flex justify-content-center align-items-center m-3 properties score p-0 text-black' style={{background:'#FFBF00' }} xs={12}>
                        <p className='rotate-right'>{count2}</p>
                    </Col>
                    <Col onClick={(event)=>operationFun2(event.target.innerText)}  className='  d-flex justify-content-center align-items-center m-3 properties' style={{background:'#FF7000'}} xs={12}>
                        <p className='rotate-right'>8</p>

                    </Col>
                </Row>
            </Col>


            <Col xs={3} className='p-3'>
                <Row className='h-100 text-center'>
                    <Col onClick={(event)=>operationFun2(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties' style={{background:'#FF7000'}} xs={12}>
                        <p className='rotate-right'>4</p>
                    </Col>
                    <Col onClick={(event)=>operationFun2(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties' style={{background:'#FF7000'}} xs={12}>
                        <p className='rotate-right'>5</p>

                    </Col>
                    <Col onClick={(event)=>operationFun2(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties' style={{background:'#FF7000'}} xs={12}>
                        <p className='rotate-right'>6</p>

                    </Col>
                </Row>
            </Col>

            <Col xs={3} className='p-3'>
                <Row className='h-100 text-center'>
                    <Col onClick={(event)=>operationFun2(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties' style={{background:'#FF7000'}} xs={12}>
                        <p className='rotate-right'>1</p>
                    </Col>
                    <Col onClick={(event)=>operationFun2(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties' style={{background:'#FF7000'}} xs={12}>
                        <p className='rotate-right'>2</p>

                    </Col>
                    <Col onClick={(event)=>operationFun2(event.target.innerText)} className='  d-flex justify-content-center align-items-center m-3 properties' style={{background:'#FF7000'}} xs={12}>
                        <p className='rotate-right'>3</p>

                    </Col>
                </Row>
            </Col>

            <Col xs={3} className='p-3'>
                <Row className='h-100 text-center'>
                    <Col onClick={()=>changeOperator2()}  className='  d-flex justify-content-center align-items-center m-3 properties' style={{background:'#FF7000'}} xs={12}>
                        <p className='rotate-right'>{operation2}</p>
                    </Col>
                    <Col onClick={backZero2} className='  d-flex justify-content-center align-items-center m-3 properties'style={{background:'#FF7000'}} xs={12}>
                        <p className='rotate-right'>صفر</p>

                    </Col>
                    <Col onClick={back2} className='  d-flex justify-content-center align-items-center m-3 properties'style={{background:'#FF7000'}} xs={12}>
                        <p className='rotate-right'>رجوع</p>
                    </Col>
                </Row>
            </Col>

        </Row >
    )
}

export default right