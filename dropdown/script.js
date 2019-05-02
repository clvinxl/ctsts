//example options input list
var inputJSON = [
    {
        id: 0,
        text: 'firefighter'
    },
    {
        id: 1,
        text: 'bug'
    },
    {
        id: 2,
        text: 'duplicate'
    },
    {
        id: 3,
        text: 'invalid'
    },
    {
        id: 4,
        text: 'wontfix'
    }
];







//code for the dropdowns that allow "tags", meaning allows user to create new items

$(document).ready(function () {
    $(".js-example-basic-single").select2({
        placeholder: "Placeholder Text",
        allowClear: true,
        insertTag: function (data, tag) {
            // Insert the tag at the end of the results
            data.push(tag);
        },
        data: inputJSON,
        tags: true
    });

    $(".js-example-basic-multiple").select2({
        placeholder: "Placeholder Text",
        insertTag: function (data, tag) {
            // Insert the tag at the end of the results
            data.push(tag);
        },
        data: inputJSON,
        tags: true
        });
});







//function for the button to prepare and send data
function sendData() {
    //print entries
    var output = $(".js-example-basic-multiple").val();
    //convert index values to text
    for (var key in output) {
        if (isNaN(output[key])) {
        } else {
            index = parseInt(output[key]);
            output[key] = inputJSON[index].text;
        }
    } 

    //check entries for overlap
    var inputs = [];
    var newEntry = [];
    for (var index in inputJSON) {
        inputs.push(inputJSON[index].text);
    };
    for (var i in output) {
        if (inputs.includes(output[i])) {
            //do nothing
        } else {
            newEntry.push(output[i]);
        };
    }
    
    //ALERT if there is new data
    if (newEntry.length != 0) {
        var alertString = "Are you sure you want to add: " + newEntry.toString();
        alertString = alertString.replace(",", ", ");
        alert(alertString);
    }
    
    //Send output for array of output data. Send newEntry for array of new user-entered data.
    //console.log(output)
    //console.log(newEntry)
}
