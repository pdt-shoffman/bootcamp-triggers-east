function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getIP() {
    $.ajax({
        type: "GET",
        url: "https://api.ipify.org?format=json",
        success: function(data) {
            myIP = data.ip;
        }
    });
}

function PDCEFEvent(options) {
    var merged = $.extend(true, {}, {
            type: "POST",
            dataType: "json",
            headers: {
                "Accept": "application/vnd.pagerduty+json;version=2.0"
            },
            url: "https://events.pagerduty.com/v2/enqueue"

        },
        options);

    $.ajax(merged);
}

function Notification() {
     var alertbox = `
    <div id="alert" class="alert alert-danger alert-dismissible fade show" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        Events triggered
    </div>
    `;

    $('#alert-container').html(alertbox);


}

function TriggerEvents(key) {
    var nagios = {
        "event_action": "trigger",
        "client": "Nagios",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `CRITICAL: 'mysql_long_running_query' on 'mysql-prod-db01.pd-ops.net`,
            "source": "Nagios",
            "severity": "critical",
            "custom_details": {
                "IP": myIP,
            }
        }
    };

    var options1 = {
        data: JSON.stringify(nagios)
    };

    PDCEFEvent(options1)

    var datadog1 = {
        "event_action": "trigger",
        "client": "Data Dog",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `API: Request Response Time is High for prod - (95th percentile > 100 ms on average during the last 10m)`,
            "source": "Data Dog",
            "severity": "critical",
            "custom_details": {
                "IP": myIP,
            }
        }
    };

    var options2 = {
        data: JSON.stringify(datadog1)
    };

    PDCEFEvent(options2)


    var splunk = {
        "event_action": "trigger",
        "client": "Splunk",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `Splunk Alert: Error connecting to MySQL: Too many connections (code 1040)`,
            "source": "splunk",
            "severity": "critical",
            "custom_details": {
                "IP": myIP,
            }
        }
    };

    var options4 = {
        data: JSON.stringify(splunk)
    };

    PDCEFEvent(options4)

    var datadog2 = {
        "event_action": "trigger",
        "client": "Data Dog",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `API: Request Response Time is High for prod - (95th percentile > 250 ms on average during the last 10m)`,
            "source": "Data Dog",
            "severity": "critical",
            "custom_details": {
                "IP": myIP,
            }
        }
    };

    var options3 = {
        data: JSON.stringify(datadog2)
    };

    PDCEFEvent(options3)


    var newrelic = {
        "event_action": "trigger",
        "client": "New Relic",
        "client_url": "http://54.193.12.191:8000/en-US/app/search/search?q=search%20login",
        "routing_key": key,
        "payload": {
            "summary": `Service Monitors (Inventory API Health Check violated API Request Failure)`,
            "source": "New Relic",
            "severity": "critical",
            "custom_details": {
                "IP": myIP,
            }
        }
    };

    var options5 = {
        data: JSON.stringify(newrelic)
    };

    PDCEFEvent(options5)
    PDCEFEvent(options5)
    PDCEFEvent(options5)














}

var myIP = "127.0.0.1";
var count = 0;
var email = "unknown@example.com";

$('.alert').alert();

$('#inputEmail').keypress(function(e) {
    if (e.keyCode == 13) {
        $('#signin-button').trigger("click");
    }
});

$('#inputPassword').keypress(function(e) {
    if (e.keyCode == 13) {
        $('signin-button').trigger("click");
    }
});



//BUTTON CLICKS
$('#Adam').on('click', function() {
    var routing_key = "R026OOHUZKN7419VMFCMAQX2W18STBZ2"

    Notification()
    TriggerEvents(routing_key)
});
$('#Dennis').on('click', function() {
    var routing_key = "R02FVSO2H8KG1ZW1G14MNPAHL1F2SIRE"
   
   Notification()
   TriggerEvents(routing_key)
});
$('#Jeff').on('click', function() {
    var routing_key = "R022CNJ5JAVU09PJ2V4WLXF5N1PZAMJZ"
   
   Notification()
   TriggerEvents(routing_key)
});
$('#Andrew').on('click', function() {
    var routing_key = "R021R4EQ7EK8957BRZ7L5WA2K1OE8UXG"
   
   Notification()
   TriggerEvents(routing_key)
});
$('#Jess').on('click', function() {
    var routing_key = "R022FVEF8NS9QWCP45GSLMFQ61BB1OM2"
   
   Notification()
   TriggerEvents(routing_key)
});
$('#Andres').on('click', function() {
    var routing_key = "R029CN5CVRSCEHA59RE7VM7FH1ROC80H"
   
   Notification()
   TriggerEvents(routing_key)
});
$('#Arden').on('click', function() {
    var routing_key = "R0266NO1Y0TWNIF2FXUGJYYFT0X25INE"
   
   Notification()
   TriggerEvents(routing_key)
});
$('#ChrisP').on('click', function() {
    var routing_key = "R02AJXUUNXDSRF22ZXBR9U9581VSH57L"
   
   Notification()
   TriggerEvents(routing_key)
});
$('#Brian').on('click', function() {
    var routing_key = "R02FID6H1D77YD248Y5PEZNSE1X01JHD"
   
   Notification()
   TriggerEvents(routing_key)
});
$('#Will').on('click', function() {
    var routing_key = "R0210U4AQVKV7ZSNNRJPO5QGO0OUDOGU"
   
   Notification()
   TriggerEvents(routing_key)
});
$('#ChrisT').on('click', function() {
    var routing_key = "R02EU8BFBUM8NNCOQE3XGZ73F0GYLA12"

    Notification()
    TriggerEvents(routing_key)
});

$('#Sarah').on('click', function() {
    var routing_key = ""

    Notification()
    TriggerEvents(routing_key)
});


getIP();
if (getParameterByName("title")) document.title = getParameterByName("title");