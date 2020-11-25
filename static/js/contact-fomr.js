$(document).ready(function () {
    $('#create_submit').click(function () {
        var username = $('#name').val();
        var phone_no = $('#create_phone_number').val();
        var email_id = $('#create_email').val();
        var message = $('#create_message').val();
        console.log(username);
        $.ajax({
            url: 'https://digitechnovators-v1.herokuapp.com/submit',
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                name: username,
                phone_no: phone_no,
                email_id: email_id,
                message: message
            }),
            type: 'POST',
            success: function (response) {
                res = response;

                if (res["status"] != "Invalid") {
                    alert("Successfully Submitted...!");
                } else {
                    alert("Please Check your Email");
                }
            },
            error: function (error) {
                alert("No data found")
                console.log(error);
            }
        });
    });
});
