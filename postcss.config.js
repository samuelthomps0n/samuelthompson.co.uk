const path = require('path');

module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-cssnext')({
            warnForDuplicates: true
        })
    ]
};