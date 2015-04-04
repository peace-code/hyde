$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });

    $('#contactForm').on('submit', function(e){
        e.preventDefault();
        $.ajax({
            url: "//formspree.io/contact@peacecode.org",
            method: "POST",
            data: {
                name: $('#name').val(),
                _replyto: $('#email').val(),
                _subject: '피스코드 관련 문의',
                message: $('#message').val(),
                _gotcha: $('#gotcha').val()
            },
            dataType: "json"
        })
        .done(function() {
            $('#success').addClass('alert alert-success').html('메시지를 전달했습니다.');
        })
        .fail(function() {
            $('#failed').addClass('alert alert-danger').html('음... 문제가 있네요. 죄송합니다.');
        })
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').removeClass().html('');
});
