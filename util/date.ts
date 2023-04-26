
export function getFormattedDate(dateA: string): string {
    //converting expense.date(string) to Date object(optimization)
    console.log(dateA)
    const date = new Date(dateA)
    return `${date.getFullYear()}-${+ date.getMonth()+1}-${date.getDate()}`;
}
export function getDateMinusDays(date: Date, days: number) {
        return new Date(date.getFullYear(),date.getMonth(), date.getDate() - days)
}
