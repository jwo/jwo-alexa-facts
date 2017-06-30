const Alexa = require('alexa-sdk');
const Facts = require('./facts');
const APP_ID = "amzn1.ask.skill.2c75e562-b2ce-4101-a50a-8514da7603ad";

exports.handler = function(event, context, callback){
  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':tell', Facts.randomFact());
  },

  'factIntent': function () {
    this.emit(':tell', Facts.randomFact());
  },

  'Unhandled': function () {
    this.emit(':tell', Facts.randomFact());
  }

};
