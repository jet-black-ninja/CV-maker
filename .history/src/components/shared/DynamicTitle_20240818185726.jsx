import {useState, useEffect} from 'react';

function DynamicTitle({title}){
    const [dynamic, setDynamicTitle] = useState(title);
    useEffect(() => {
        document.title
    })
}