/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
class PicsToBloxString{
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }
    getInfo () {
        return {
            id: 'pictobloxstring',
            name: 'PicToBloxString',
            blocks: [{
                opcode: 'indexOf',
                blockType: BlockType.REPORTER,
                text: 'returns square of [num]',
                arguments: {
                    str1: {
                        type: ArgumentType.STRING,
                        defaultvalue: 'Hello World'
                    },
                    str2: {
                        type: ArgumentType.STRING,
                        defaultvalue: 'Hello World'
                    }
                }
            },
            {
                opcode: 'equal',
                blockType: BlockType.REPORTER,
                text: 'return sqrt of [num]',
                arguments: {
                    str1: {
                        'type': ArgumentType.STRING,
                        'defaultvalue': 'Hello World'
                    },
                    str2: {
                        'type': ArgumentType.STRING,
                        'defaultvalue': 'Hello World'
                    }
                }
            }]
        };
    }
    indexOf ({str1, str2}) {
        return str1.indexOf(str2);
    }
    equal ({str1, str2}) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        return str1.equals(str2);
    }
}

module.exports = PicsToBloxString;
