import './Ex2_ques1e.css'
let Red2 = () => {
    return <div className='red' />
}
let Green2 = () => {
    return <div className='green' />
}
let Blue2 = () => {
    return <div className='blue' />
}
let Black2 = () => {
    return <div className='black' />
}
let Grey2 = () => {
    return <div className='grey' />
}
let Yellow2 = () => {
    return <div className='yellow' />
}
let LayoutColor2 = (props) =>{
    return(
        <div className='layout'>
            <div className='layout-r'>
                {props.first}
            </div>
            <div className='layout-grn'>
                {props.second}
            </div>
            <div className='layout-blu'>
                {props.third}
            </div>
            <div className='layout-blk'>
                {props.four}
            </div>
            <div className='layout-gry'>
                {props.fifth}
            </div>
            <div className='layout-yl'>
                {props.six}
            </div>
            
        </div>
    );
}
export{Yellow2, Black2, Blue2, Green2, Grey2, Red2, LayoutColor2};