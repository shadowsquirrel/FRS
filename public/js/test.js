window.onload = function() {

    var node = parent.node;


    node.on('2-getW_height', function(height) {

        console.log('HEIGHT: ' + height);
        $('.center-column').css({'height':height})

        var newHeight = ($('.center-column').height() * 0.9) + 'px';

        console.log('NEW HEIGHT: ' + newHeight);
        $('.main-window').css({'height':newHeight});

    })

    node.emit('1-getW_height')

}
