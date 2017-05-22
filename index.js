const fs = require('fs')
const http = require('http')
const iconv = require('iconv-lite')
const url = 'http://romenscd.cn:4880/'

http.get(url, res => {
    let html = ''
    res.setEncoding('utf-8')
    res.on('data', chunk => html += chunk)
    // res.on('data', chunk => html += iconv.decode(chunk, 'GBK'))
    res.on('end', () => {
        fs.appendFile('./result.html', html, 'utf-8', function (err) {
            if (err) {
                console.log(err);
            }
        });
    })
})
