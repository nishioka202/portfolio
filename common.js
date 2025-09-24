'use strict';

$(document).ready(function () {
  $('.drawer').drawer();
});
$(function () {

    $('.Toggle').click(function () {
        $(this).toggleClass('active');
        /*ナビをアニメーションで上に隠す*/
        if ($(this).hasClass('active')) {
            $('.NavMenu').slideToggle().addClass('active'); //クラスを付与
        } else {
            $('.NavMenu').slideToggle().removeClass('active'); //クラスを外す
        }

    });
});
