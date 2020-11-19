/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable quote-props */
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

class PicToBloxMath{
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }
    getInfo () {
        return {
            id: 'pictobloxmath',
            name: 'PicToBloxMath',
            blocks: [{
                opcode: 'square',
                blockType: BlockType.REPORTER,
                text: 'returns square of [num]',
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultvalue: 5.5
                    }
                }
            },
            {
                opcode: 'sqrt',
                blockType: BlockType.REPORTER,
                text: 'return sqrt of [num]',
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultvalue: -5.5
                    }
                }
            }]
        };
    }
    square (args) {
        return Math.pow(args.NUM, 2);
    }
    sqrt (args) {
        let Complex = require('complex.js');
        let num_ = new Complex(args.NUM, 0);
        return num_.sqrt().toString();
    }
}
module.exports = PicToBloxMath;
