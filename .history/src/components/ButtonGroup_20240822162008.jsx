import {Button} from "./Button";

function ButtonGroup({onLoadSample , onDownLoad , onClear}){
    return (
        <>
            <div >
                <Button title ="Load Sample" icon="sample" onClick={onLoadSample}/>
            </div>
            <div>
                <Button title = "Export And Print" icon="download" onClick={onDownLoad}/>
            </div>
            <div>
                <Button title ="Clear" icon ="clear" onClick={onClear}/>
            </div>
        </>
    );
}
export 