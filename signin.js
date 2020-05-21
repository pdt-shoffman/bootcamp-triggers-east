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
$('#Chris').on('click', function() {
    var routing_key = "R02JG2O8ZX6WKEZNQ4HQRPZLL1PRVUKN"

    Notification()
    TriggerEvents(routing_key)
});
$('#Giran').on('click', function() {
    var routing_key = "R021YXS4WL21CGINT7Z3BINEL0RB7YGO"
   
   Notification()
   TriggerEvents(routing_key)
});
$('#Faez').on('click', function() {
    var routing_key = "R020ECIXPVBAR7X8RM6UUKQKE1OC3D1D"
   
   Notification()
   TriggerEvents(routing_key)
});
$('#Quin').on('click', function() {
    var routing_key = "R029BI0ZLI7KVFPMFL5EFWGHG1L7UWZJ"
   
   Notification()
   TriggerEvents(routing_key)
});

$('#Sarah').on('click', function() {
    var routing_key = "R02GVJ7SXRP7WNDQH55KV94JE0SBAQ0P"

    Notification()
    TriggerEvents(routing_key)
});


getIP();
if (getParameterByName("title")) document.title = getParameterByName("title");