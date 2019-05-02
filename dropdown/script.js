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
