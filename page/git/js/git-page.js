function loadTabContent(id) {
    var id = id;
    var selector = "#" + id;
    $(selector).on("click", function () {
        // 點擊分頁時在網址上增加 hashTag
        // location.hash = id;

        $('.tab-content').load(id + '.html');
    });
}


// 重新整理時去除 hashTag
// if(window.location.hash != ""){
//     window.location.href = window.location.href.split('#')[0];
// }

// Highlight tab button
$('body').on('click', 'button', function () {
    $('button.active').removeClass('active');
    $(this).addClass('active');
});

// 取得所有分頁的 button id，並依序代入 loadTabContent 這個 function 
$('.menu').children('button').each(function () {
    var id = $(this).attr('id');
    loadTabContent(id);
});
