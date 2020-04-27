let holiday = "Independence Day"
let name = "you"
let number = 20
let mother = "Mother's Day"

function happyHolidays(string) {
 return "Happy holidays!"
}
happyHolidays()

function happyCustomHolidayTo(name) {
 return `Happy holidays, ${name}!`
}
happyHolidaysTo()

function happyHolidaysTo(holiday,name){
  return `Happy ${holiday}, ${name}!`
}
happyHolidaysTo()

function holidayCountdown(mother,number){
  return `It's ${number} days until ${mother}!`
}
holidayCountdown()
