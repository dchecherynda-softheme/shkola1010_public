import * as $ from 'jquery';
import { MyCalendar } from "./calendar";

$(document).ready(() => {
    const div = <HTMLDivElement>document.createElement('div');

    const myCalendar = new MyCalendar();

    div.innerText = myCalendar.getDate();

    document.body.appendChild(div);
});