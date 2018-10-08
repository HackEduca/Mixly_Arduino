'use strict';

goog.provide('Blockly.Python.actuator');
goog.require('Blockly.Python');



Blockly.Python.esp32_music_pitch = function(block) {
  //Blockly.Python.definitions_['import_ESP32_*'] = 'from ESP32 import *';
  Blockly.Python.definitions_['import_music'] = 'import music';
  Blockly.Python.definitions_['import_math'] = 'import math';
  var number_pitch = Blockly.Python.valueToCode(block, 'pitch', Blockly.Python.ORDER_ATOMIC);
  // var number_duration = Blockly.Python.valueToCode(block, 'duration', Blockly.Python.ORDER_ATOMIC);
  var pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var code = 'music.pitch(round(' + number_pitch + '), pwm' + pin + ')\n';
  return code;
};



Blockly.Python.esp32_music_stop = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  //Blockly.Python.setups_['music'+pin] ='music'+pin+'.pwm(Pin('+pin+'))\n'+'music'+pin+'.duty(512)\n';
  var code = 'music.stop(pwm'+pin+')\n';
  return code;
};



Blockly.Python.servo_move = function() {
  Blockly.Python.definitions_['import_servo'] = 'import servo';
  var dropdown_pin = Blockly.Python.valueToCode(this, 'PIN',Blockly.Python.ORDER_ATOMIC);
  var value_degree = Blockly.Python.valueToCode(this, 'DEGREE', Blockly.Python.ORDER_ATOMIC);
  //Blockly.Python.definitions_['import_machine_PWM'] = "from machine import PWM";
  //Blockly.Python.definitions_['import_machine_Pin'] = "from machine import Pin";
  //Blockly.Python.definitions_['import_math'] = "import math";
  //Blockly.Python.setups_['servo'+dropdown_pin] ='servo'+dropdown_pin+' = PWM(Pin('+dropdown_pin+'), freq = 50)\n';
  //value_degree = value_degree.replace('(','').replace(')','')
  //var delay_time = Blockly.Python.valueToCode(this, 'DELAY_TIME', Blockly.Python.ORDER_ATOMIC) || '0'
  //delay_time = delay_time.replace('(','').replace(')',''); 
  var code = 'servo.write_angle(pwm'+dropdown_pin+','+value_degree+')\n';
  return code;
};

Blockly.Python.number = function () {
    // Boolean values HIGH and LOW.
    var code = this.getFieldValue('op');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.light = function () {
    // Boolean values HIGH and LOW.
    var code = this.getFieldValue('flag');
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.led_bright= function() {
    Blockly.Python.definitions_['import_ESP32_*'] = 'from ESP32 import *';
    var op = Blockly.Python.valueToCode(this,'led', Blockly.Python.ORDER_ATOMIC);
    var flag = this.getFieldValue('bright');
    // var flag = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
    var code = 'led'+op+'.'+flag+'()\n';
    return code;
};

Blockly.Python.led_brightness= function() {
    Blockly.Python.definitions_['import_ESP32_*'] = 'from ESP32 import *';
    var op = Blockly.Python.valueToCode(this,'led', Blockly.Python.ORDER_ATOMIC);
    var flag = Blockly.Python.valueToCode(this,'bright', Blockly.Python.ORDER_ATOMIC);
    var code = 'led'+op+'.value('+flag+')\n';
    return code;
};
