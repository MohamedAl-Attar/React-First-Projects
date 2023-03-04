
import Button from 'react-bootstrap/Button';
function ActionBtn(props){
    return(
        <Button style={{width : '15%'}} variant={props.variant} onClick = {props.method}>{props.name}</Button>
    )
}

export default ActionBtn;