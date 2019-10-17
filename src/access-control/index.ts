module.exports = {

    building : {
        application: {
            handler: {
                commandHandler: require('./building/application/handler/command-handlers'),
            }
        }
    }

}