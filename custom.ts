
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% color="#2ecc71" weight=100 icon="\uf2c9" block="Grove Sensors"
namespace GroveTemp {
    /**
     * Reads the temperature in Celsius from the Grove Temperature Sensor (V1.2).
     * @param pin the analog pin the sensor is connected to, eg: AnalogPin.P0
     */
    //% block="read Grove Temp on %pin"
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% weight=100
    export function readTemp(pin: AnalogPin): number {
        let a = pins.analogReadPin(pin);

        // Prevent division by zero if the sensor is unplugged
        if (a === 0) return 0;

        let R = 1023.0 / a - 1.0;
        let B = 4275; // Nominal B-Constant for V1.1 / V1.2
        let temp_c = 1.0 / (Math.log(R) / B + 1 / 298.15) - 273.15;

        // Return the temperature rounded to one decimal place
        return Math.round(temp_c * 10) / 10;
    }
}
