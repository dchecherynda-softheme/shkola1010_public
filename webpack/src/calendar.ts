export class MyCalendar {
    getDate() {
        const date = new Date();

        return date.toLocaleDateString();
    }
}