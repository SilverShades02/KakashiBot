require('dotenv').config()
const Telegraf = require('telegraf')
const Appointment = require('./app/Models/Appointment')

let bot = new Telegraf(process.env.TELEGRAF_BOT_TOKEN)

let dates = [
    new Appointment("Daniels Geburtstag", "03.06.2017 20:00")
]

bot.command('Events', ({ from, reply }) => {

    let headline = "Upcoming Dates are:\n\n"
    var replyText = headline + dates.map(function(date) { return date.description() }).join("\n")

    return reply(replyText)
})

bot.command('start', ({ from, reply }) => {
    console.log('start', from)
    let commands = [
        "/start",
        "/Events"
    ]
    return reply('Hello from KakashiBot\n\n' + commands.join("\n"))
})

bot.startPolling()
