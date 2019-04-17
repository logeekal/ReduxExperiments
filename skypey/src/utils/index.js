import {store} from '../store';

export default function fancyLog(){
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
    console.log(store.getState());
}