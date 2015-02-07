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
var script;
var rate;

var fromValue = document.getElementById("fromValue");
var toValue = document.getElementById("toValue");

function get(json) {
    rate = json['rate'];
    toValue.value = applyTax(rate);
}

function showcurrency(){
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var url = 'http://jsonrates.com/get/?from='+from+'&to='+to+'&callback=get';

    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);

}

function applyTax(r){
    return (fromValue.value * r).toFixed(2);
}