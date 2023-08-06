export const daysOfTheWeek = ["Воскресенье",'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
export const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
export const dayOfTheWeek = daysOfTheWeek[new Date().getDay()]
export const dayOfTheMonths = new Date().getDate()
export const month = monthNames[new Date().getMonth()]
export const date = `${dayOfTheWeek},${dayOfTheMonths} ${month}`
export const year = new Date().getFullYear()

export let toDoList = []
export let toDoWorkList = []