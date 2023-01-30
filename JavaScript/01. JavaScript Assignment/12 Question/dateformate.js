var time = new Date();

// YYYY-MM-DD HH:mm
console.log(`${time.getFullYear()}-${(time.getMonth() + 1).toString().padStart(2, '0')}-${time.getDate().toString().padStart(2, '0')} ${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`)

// DD-MM-YYYY HH:mm
console.log(`${time.getDate().toString().padStart(2, '0')}-${(time.getMonth() + 1).toString().padStart(2, '0')}-${time.getFullYear()} ${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`)


// DD/MM/YYYY HH:mm
console.log(`${time.getDate().toString().padStart(2, '0')}/${(time.getMonth() + 1).toString().padStart(2, '0')}/${time.getFullYear()} ${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`)
