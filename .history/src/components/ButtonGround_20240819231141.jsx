import {Button} from "./Button";

function ButtonGround({onLoadSample , onDownLoad , onClear}){
    return (
        <>
            <div >
                <Button title ="Load Sample" icon="sample" onClick={onLoadSample}/>
            </div>
            <div>
                <Button title = "Export And Print"
            </div>
        </>
    )
}