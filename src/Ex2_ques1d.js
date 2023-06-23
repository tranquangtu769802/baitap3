/* eslint-disable import/no-anonymous-default-export */
import './Ex2_ques1d.css'

let Yellow1 = () => {
    return <div className='yellow' />
}
let Red1 = () => {
    return <div className='red' />
}
let Grey1 = () => {
    return <div className='grey' />
}
let Black1 = () => {
    return <div className='black' />
}
let LayoutColor = (props) =>{
    return(
        <div className='layout'>
            <div className='layout-yl'>
                {props.first}
            </div>
            <div className='layout-r'>
                {props.second}
            </div>
            <div className='layout-gr'>
                {props.third}
            </div>
            <div className='layout-bl'>
                {props.four}
            </div>
        </div>
    );
}

export {Yellow1, Red1, Grey1, Black1, LayoutColor};