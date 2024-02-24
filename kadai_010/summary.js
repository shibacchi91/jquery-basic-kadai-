$(function () {
    // 文字色変更
    $('#change-color').click(function () {
        $('#target').css('color','green');
    });
    // 文字変更
    $('#change-text').on('click', function () {
        $('#target').text('さようなら！');
    });
    // フェードアウト
    $('#fade-out').on('click', function () {
        $('#target').fadeOut();
    });
    // フェードイン
    $('#fade-in').on('click', function () {
        $('#target').fadeIn();
    });

});