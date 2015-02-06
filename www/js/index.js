var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function showcurrency(){
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var fromValue = document.getElementById("fromValue").value;
    var toValue = document.getElementById("toValue").value;
    var show = document.getElementById("show");
    var getCurrent = "http://rate-exchange.appspot.com/currency?from="+from+"&to="+to;
    show.value = getCurrent;
}