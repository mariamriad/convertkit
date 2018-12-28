$("#subRange").change(function(){
    var p = "";
    var s = "";
    var value = $(this).val();
    var $migration = $("p.migration");

    if(value == 0){
        p = "29";
        s = "1,000";
        $migration.addClass("disable");
    }
    else if(value == 1){
        p = "79";
        s = "5,000";
        $migration.addClass("disable");
    }
    else if(value == 2){
        p = "119";
        s = "10,000";
        $migration.removeClass("disable");
    }
    else if(value == 3){
        p = "179";
        s = "20,000";
        $migration.removeClass("disable");
    }
    else if(value == 4){
        p = "259";
        s = "30,000";
        $migration.removeClass("disable");
    }

    $("#price").text(p);
    $("#subscribers").text(s);
});

$('input[type="range"]').change(function () {
  var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

  $(this).css('background-image',
              '-webkit-gradient(linear, left top, right top, '
              + 'color-stop(' + val + ', #9BB8F4), '
              + 'color-stop(' + val + ', #E6EBEF)'
              + ')'
              );
});
