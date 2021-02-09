import './styles/main.sass';
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 100,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  // закрытие попапа
  $('.popup__close').click(function () {
    $('.popup__wrap').removeClass('active');
  });

  // выбор решения
  $('#firstBlock > .main__product > .radio').click(function () {
    $('#secondBlock').css('display', 'grid');
  });

  $('#secondBlock > .main__product-wrap > .main__product > .radio').click(function () {
    $('#thirdBlock').css('display', 'flex');
  });

  $('#openOrderPopup').click(function () {
    $('#orderPopup').addClass('active');
  });

  $('#openOrderPopup2').click(function () {
    $('#orderPopup').addClass('active');
  });

  $('#orderSubmit').click(function () {
    $('#orderPopup').removeClass('active');
    $('#orderAccess').addClass('active');
  });

  // выбор радио
  let radio = $('.radio');
  radio.click(function () {
    $('input:radio').parent('.main__product').css('background', '#fff');
    $('input:radio:checked').parent('.main__product').css('background', '#27b7bf');
  });

  // говнокодим подходящие продукты
  $('.radio').click(function () {
    if ($('#company1').prop('checked') === true && $('#demand1').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="anchor-isbd.html">Якорь-ИСБД</a>' +
          '<a class="text text_light" href="anchor-tf.html">Якорь-ТФ</a>' +
          '<a class="text text_light" href="xsm-mux-86.html">XSM.MUX.86</a>'
      );
    } else if ($('#company1').prop('checked') === true && $('#demand2').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="converter-sorm-for-fix.html">Конвертер СОРМ для фиксированной связи</a>' +
          '<a class="text text_light" href="xsm-mux.html">XSM.MUX</a>' +
          '<a class="text text_light" href="xsm-mux-70-268.html">XSM.MUX.70/268</a>'
      );
    } else if ($('#company1').prop('checked') === true && $('#demand3').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="converter-sorm-for-fix.html">Конвертер СОРМ для фиксированной связи</a>' +
          '<a class="text text_light" href="xsm-mux.html">XSM.MUX</a>' +
          '<a class="text text_light" href="xsm-mux-70-268.html">XSM.MUX.70/268</a>' +
          '<a class="text text_light" href="sorm-ims-for-fix.html">СОРМ IMS для фиксированной связи</a>' +
          '<a class="text text_light" href="passive-sorm-for-fix.html">Пассивный СОРМ-1 для фиксированной связи</a>'
      );
    } else if ($('#company1').prop('checked') === true && $('#demand4').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="converter-sorm-for-trunk.html">Конвертер СОРМ для транкинговой связи</a>' +
          '<a class="text text_light" href="converter-sorm-for-mobile.html">Конвертер СОРМ для сотовой связи</a>' +
          '<a class="text text_light" href="sorm-ims-for-mobile.html">СОРМ IMS для сотовой связи</a>' +
          '<a class="text text_light" href="xsm-mux-645.html">XSM.MUX.645</a>' +
          '<a class="text text_light" href="passive-sorm-for-mobile.html">Пассивный СОРМ-1 для сотовой связи</a>'
      );
    } else if ($('#company1').prop('checked') === true && $('#demand5').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="anchor-tf.html">Якорь-ТФ</a>' +
          '<a class="text text_light" href="xsm-mux-86.html">XSM.MUX.86</a>'
      );
    } else if ($('#company1').prop('checked') === true && $('#demand6').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="anchor-isbd.html">Якорь-ИСБД</a>'
      );
    } else if ($('#company1').prop('checked') === true && $('#demand7').prop('checked')) {
      $('#products').html(
        '<span class="text text_light">Приказ № 139 не распространяется на голосовую связь</span>'
      );
    } else if ($('#company2').prop('checked') === true && $('#demand1').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="anchor-pd.html">Якорь-ПД</a>' +
          '<a class="text text_light" href="anchor-isbd.html">Якорь-ИСБД</a>' +
          '<a class="text text_light" href="xsm-mux-139.html">XSM.MUX.139</a>'
      );
    } else if ($('#company2').prop('checked') === true && $('#demand2').prop('checked')) {
      $('#products').html(
        '<span class="text text_light">Приказ № 70 не распространяется на сеть Интернет</span>'
      );
    } else if ($('#company2').prop('checked') === true && $('#demand3').prop('checked')) {
      $('#products').html(
        '<span class="text text_light">Приказ № 268 не распространяется на сеть Интернет</span>'
      );
    } else if ($('#company2').prop('checked') === true && $('#demand4').prop('checked')) {
      $('#products').html(
        '<span class="text text_light">Приказ № 645 не распространяется на сеть Интернет</span>'
      );
    } else if ($('#company2').prop('checked') === true && $('#demand5').prop('checked')) {
      $('#products').html(
        '<span class="text text_light">Приказ № 86 не распространяется на сеть Интернет</span>'
      );
    } else if ($('#company2').prop('checked') === true && $('#demand6').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="anchor-isbd.html">Якорь-ИСБД</a>'
      );
    } else if ($('#company2').prop('checked') === true && $('#demand7').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="anchor-pd.html">Якорь-ПД</a>' +
          '<a class="text text_light" href="xsm-mux-139.html">XSM.MUX.139</a>'
      );
    } else if ($('#company3').prop('checked') === true && $('#demand1').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="anchor-tf.html">Якорь-ТФ</a>' +
          '<a class="text text_light" href="xsm-mux-86.html">XSM.MUX.86</a>' +
          '<a class="text text_light" href="anchor-pd.html">Якорь-ПД</a>' +
          '<a class="text text_light" href="anchor-isbd.html">Якорь-ИСБД</a>' +
          '<a class="text text_light" href="xsm-mux-139.html">XSM.MUX.139</a>'
      );
    } else if ($('#company3').prop('checked') === true && $('#demand2').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="converter-sorm-for-fix.html">Конвертер СОРМ для фиксированной связи</a>' +
          '<a class="text text_light" href="xsm-mux.html">XSM.MUX</a>' +
          '<a class="text text_light" href="xsm-mux-70-268.html">XSM.MUX.70/268</a>'
      );
    } else if ($('#company3').prop('checked') === true && $('#demand3').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="converter-sorm-for-fix.html">Конвертер СОРМ для фиксированной связи</a>' +
          '<a class="text text_light" href="xsm-mux.html">XSM.MUX</a>' +
          '<a class="text text_light" href="xsm-mux-70-268.html">XSM.MUX.70/268</a>' +
          '<a class="text text_light" href="sorm-ims-for-fix.html">СОРМ IMS для фиксированной связи</a>' +
          '<a class="text text_light" href="passive-sorm-for-fix.html">Пассивный СОРМ-1 для фиксированной связи</a>'
      );
    } else if ($('#company3').prop('checked') === true && $('#demand4').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="converter-sorm-for-trunk.html">Конвертер СОРМ для транкинговой связи</a>' +
          '<a class="text text_light" href="converter-sorm-for-mobile.html">Конвертер СОРМ для сотовой связи</a>' +
          '<a class="text text_light" href="sorm-ims-for-mobile.html">СОРМ IMS для сотовой связи</a>' +
          '<a class="text text_light" href="xsm-mux-645.html">XSM.MUX.645</a>' +
          '<a class="text text_light" href="passive-sorm-for-mobile.html">Пассивный СОРМ-1 для сотовой связи</a>'
      );
    } else if ($('#company3').prop('checked') === true && $('#demand5').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="anchor-tf.html">Якорь-ТФ</a>' +
          '<a class="text text_light" href="xsm-mux-86.html">XSM.MUX.86</a>'
      );
    } else if ($('#company3').prop('checked') === true && $('#demand6').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="anchor-isbd.html">Якорь-ИСБД</a>'
      );
    } else if ($('#company3').prop('checked') === true && $('#demand7').prop('checked')) {
      $('#products').html(
        '<span class="title title_h3 title_light">Вам подойдут следующие продукты</span>' +
          '<a class="text text_light" href="anchor-pd.html">Якорь-ПД</a>' +
          '<a class="text text_light" href="xsm-mux-139.html">XSM.MUX.139</a>'
      );
    }
  });
});

$(document).keyup(function (e) {
  if (e.key === 'Escape') {
    $('.popup__wrap').removeClass('active');
  }
});

$('form').on('submit', async function() {
    event.preventDefault();

    const fields = $(this).serializeArray(),
        formData = new FormData();

    for(let i in fields) {
        formData.append(i, fields[i].value);
    }

    await fetch('http://localhost/neos-site/dist/api.php', {
        method: 'POST',
        body: formData
    });
});
