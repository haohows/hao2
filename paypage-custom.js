if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, '');
    }
}
var isAE = false;
var st = null;
$(function() {
    var d = new Date();
    var obj;
    for (i = 1; i <= 12; i++) {
	obj = $("<option/>", {
	    value : (i >= 10 ? "" : "0") + i,
	    text : i
	});
	$('select[name="expire_month"]').append(obj);
    }
    $('select[name="expire_month"]').prop('selectedIndex', d.getMonth());

    for (i = 0; i < 15; i++) {
	obj = $("<option/>", {
	    value : d.getFullYear() + i,
	    text : d.getFullYear() + i
	})
	$('select[name="expire_year"]').append(obj);
    }

    timeout();
});

function timeout() {
    var d = new Date();
    var nowtime = d.getTime();
    var timeout = $("[name=ot]").val();
    // st = setTimeout("reversal('Y')", (timeout - nowtime));
    if (timeout > nowtime) {
	console.log(timeout - nowtime);
	st = setTimeout("reversal('Y')", (timeout - nowtime));
    }
}
$('#pan_num').on('keyup', function() {
    panAction(this);
});

function setBlur(obj) {
    var fm = document.sslForm;
    if (isAE) {
	if (obj == fm.pan_no1) {
	    fm.pan_no1.value = fm.pan_no1.value.replace(/[^\d]/g, '')
	    if (fm.pan_no1.value.length == 4) {
		fm.pan_no2.value = "";
		fm.pan_no2.focus();
	    }
	    return;
	}
	if (obj == fm.pan_no2) {
	    fm.pan_no2.value = fm.pan_no2.value.replace(/[^\d]/g, '')
	    if (fm.pan_no2.value.length == 6) {
		fm.pan_no3.value = "";
		fm.pan_no3.focus();
	    }
	    return;
	}
	if (obj == fm.pan_no3) {
	    fm.pan_no3.value = fm.pan_no3.value.replace(/[^\d]/g, '')
	    if (fm.pan_no3.value.length == 5) {
		fm.fourDBC.value = "";
		fm.fourDBC.focus();
	    }
	    return;
	}
	if (obj == fm.fourDBC) {
	    fm.fourDBC.value = fm.fourDBC.value.replace(/[^\d]/g, '')
	    if (fm.fourDBC.value.length == 4) {
		fm.expire_month.focus();
	    }
	    return;
	}
    } else {
	if (obj == fm.pan_no1) {
	    fm.pan_no1.value = fm.pan_no1.value.replace(/[^\d]/g, '')
	    if (fm.pan_no1.value.length == 4) {
		fm.pan_no2.value = "";
		fm.pan_no2.focus();
	    }
	    return;
	}
	if (obj == fm.pan_no2) {
	    fm.pan_no2.value = fm.pan_no2.value.replace(/[^\d]/g, '')
	    if (fm.pan_no2.value.length == 4) {
		fm.pan_no3.value = "";
		fm.pan_no3.focus();
	    }
	    return;
	}
	if (obj == fm.pan_no3) {
	    fm.pan_no3.value = fm.pan_no3.value.replace(/[^\d]/g, '')
	    if (fm.pan_no3.value.length == 4) {
		fm.pan_no4.value = "";
		fm.pan_no4.focus();
	    }
	    return;
	}
	if (obj == fm.pan_no4) {
	    fm.pan_no4.value = fm.pan_no4.value.replace(/[^\d]/g, '')
	    if (fm.pan_no4.value.length == 4) {
		fm.cvc2.value = "";
		fm.cvc2.focus();
	    }
	    return;
	}

	if (obj == fm.cvc2) {
	    fm.cvc2.value = fm.cvc2.value.replace(/[^\d]/g, '')
	    if (fm.cvc2.value.length == 3) {
		fm.expire_month.focus();
	    }
	    return;
	}
    }
}

function checkParam(prm) {
    try {
	return prm, true;
    } catch (e) {
	return false;
    }
}

/**
 * 傳送前檢查
 * 
 * @returns
 */

$('#sslForm').on('submit', function() {
    return checkSubmit();
});
function checkSubmit() {
    var $form = $('#sslForm');
    var flag = false;
    $.ajaxSetup({
	async : false
    });

    if ($('[name=_action]').val() == 'cancel') {
	return true;
    }

    $.post('checkRand', "rand=" + $('[name=rand]').val(), function(result) {
	console.log(result);
	flag = result;
	if (!flag) {
	    showErrMsg("驗證碼輸入錯誤，請重新輸入！");
	    // alert("驗證碼輸入錯誤，請重新輸入！");
	    reloadImg();
	}
    });

    if (flag) {
	$form.attr('action', './authPayment');
	$form.attr('method', 'POST');

	/*
	 * $('#loading').modal({ backdrop : 'static', keyboard : false, show :
	 * true });
	 */
	// $form.submit();
	clearTimeout(st);
    }
    return flag;
}

/**
 * 交易取消
 * 
 * @returns
 */
function reversal(timeout) {
    var $form = $('#sslForm');
    $('[name=_action]').val('cancel');
    $('[name=timeOut]').val(timeout);
    if (isAE) {
	$('[name=pan_num]').val('000000000000000');
    } else {
	$('[name=pan_num]').val('0000000000000000');
	$('[name=pan_no1]').val('0000');
	$('[name=pan_no2]').val('0000');
	$('[name=pan_no3]').val('0000');
	$('[name=pan_no4]').val('0000');
    }

    $form.attr('action', './authPayment');
    $form.attr('method', 'POST');
    $form.submit();
}

/**
 * 驗證碼
 * 
 * @returns
 */
function reloadImg() {
    var invwk2 = (function() {
	var max = Math.pow(2, 32), seed;
	return {
	    setSeed : function(val) {
		seed = val || Math.round(Math.random() * max);
	    },
	    getSeed : function() {
		return seed;
	    },
	    rand : function() {
		// creates randomness...somehow...
		seed += (seed * seed) | 5;
		// Shift off bits, discarding the sign. Discarding the sign is
		// important because OR w/ 5 can give us + or - numbers.
		return (seed >>> 32) / max;
	    }
	};
    }());
    invwk2.setSeed(Math.random() * Math.pow(2, 32));
    var randomnumber2 = invwk2.rand();
    // document.getElementById('imagesrc').src =
    // 'https://epos.chinatrust.com.tw/auth/Images.jsp?rand='+ randomnumber2;
    document.getElementById('imagesrc').src = 'images?rand=' + randomnumber2;
    var dReloadLink = document.getElementById("reload-img");
    if (dReloadLink != null) {
	dReloadLink.onclick = function(e) {
	    invwk2.setSeed(Math.random() * Math.pow(2, 32));
	    var randomnumber = invwk2.rand();
	    document.getElementById('imagesrc').src = 'images?rand='
		    + randomnumber;
	    // document.getElementById('imagesrc').src =
	    // 'https://epos.chinatrust.com.tw/auth/Images.jsp?rand='+
	    // randomnumber;
	    if (e)
		e.preventDefault();
	    return false;
	};
    }
}

function showErrMsg(txt) {
    // $('#msgmodal h5').addClass('text-red');
    // $('#msgmodal h5').removeClass('text-primary');
    // $('#msgmodal h5').html(
    // '<span class="glyphicon glyphicon-remove-circle"></span> 錯誤');
    // $('#errmsg').text(txt);
    // $('#msgmodal').modal('show');
    alert(txt);
}

function showCVV2(isAE) {
    $('#msgmodal h5').addClass('text-primary');
    $('#msgmodal h5').removeClass('text-red');

    $('#msgmodal h5').html(
	    '<span class="glyphicon glyphicon-exclamation-sign"></span> 提示');
    if (isAE) {
	$('#errmsg').html('<img src="images/amexplatinum.jpg"/>');
	$('#errmsg').append("<p>4DBC為信用卡號右上角四碼數字！</p>");
    } else {
	$('#errmsg').html('<img src="images/cvc2_tw.gif"/>');
    }

    $('#msgmodal').modal('show');
}

function panAction(obj) {
    var v = $(obj).val();
    if (!isAE) {
	$(obj).val(v.replace(/[^\d]/g, '').replace(/(.{4})/g, "$1 "));
	var type = v.substring(0, 1);

	// 获取当前光标的位置
	var caret = obj.selectionStart;
	// 获取当前的value
	var value = obj.value;
	// 从左边沿到坐标之间的空格数
	var sp = (value.slice(0, caret).match(/\s/g) || []).length;
	// 去掉所有空格
	var nospace = value.replace(/\s/g, '');
	// 重新插入空格
	var curVal = this.value = nospace.replace(/\D+/g, "").replace(
		/(\d{4})/g, "$1 ").trim();
	// 从左边沿到原坐标之间的空格数
	var curSp = (curVal.slice(0, caret).match(/\s/g) || []).length;
	// 修正光标位置
	this.selectionEnd = this.selectionStart = caret + curSp - sp;
	switch (type) {
	case '3':
	    $("#pansvg").prop('src', 'images/jcb.png');
	    break;
	case '4':
	    $("#pansvg").prop('src', 'images/visa.png');
	    break;
	case '5':
	    $("#pansvg").prop('src', 'images/mastercard.png');
	    break;
	default:
	    $("#pansvg").prop('src', 'images/card.png');
	    break;
	}
	// console.log($(this).val().trim().length);
	if ($(obj).val().trim().length > 19) {
	    $(obj).val($(this).val().substring(0, 19));
	}
	if ($(obj).val().trim().length == 19) {
	    $('#cvc2').focus();
	}
    } else {
	var value = this.value;
	var nospace = value.replace(/\s/g, '');
	if (nospace.length == 15) {
	    $(obj).val(
		    v.replace(/[^\d]/g, '').replace(/(.{4})(.{6})(.{5})/g,
			    "$1 $2 $3"));
	} else if (nospace.length >= 10) {
	    $(obj).val(
		    v.replace(/[^\d]/g, '').replace(/(.{4})(.{6})/g, "$1 $2 "));
	} else {
	    $(obj).val(v.replace(/[^\d]/g, '').replace(/(.{4})/g, "$1 "));
	}

	if ($(obj).val().trim().length > 17) {
	    $(obj).val($(obj).val().substring(0, 17));
	    $(obj).val(
		    v.replace(/[^\d]/g, '').replace(/(.{4})(.{6})(.{5})/g,
			    "$1 $2 $3"));
	}
	if ($(obj).val().trim().length == 17) {
	    $('#fourDBC').focus();
	}
    }

}
