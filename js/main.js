$('.group li').click(function() {
	// 判断当前小组已选几个，如果已经选了两个则不能再选
	if ($(this).siblings('.team-act').length >= '2') {
		return false;
	} else {}
	// 判断当前选择的国家是否已经被选
	if ($(this).hasClass('team-act')) {
		// 如果已经被选
		$(this).removeClass('team-act');
		$(this).children('.circle').removeClass('act');
		$(this).children('.circle').text('')
	} else {
		// 如果没有被选，则判断之前同一小组是否有其他被选，如果无则当前为1，如果有1个则当前为2
		var addText = $(this).parents('.group').children('.group-name').text().substring(0,1);
		if ($(this).siblings('.team-act').length == '0') {
			var addNum = 1
		} else if ($(this).siblings('.team-act').length == '1') {
			if ($(this).siblings('.team-act').children('.circle').text() == addText+'1') {
				var addNum = 2
			} else {
				var addNum = 1
			}
		} else {
			return false;
		}
		var addIn = addText+addNum
		$(this).addClass('team-act');
		$(this).children('.circle').addClass('act');
		$(this).children('.circle').text(addIn)
	}


});

$(document).click(function() {
	var nowHas = $('.team-act').length;
	if (nowHas == '16') {
		$('.next-button').addClass('ok');
		$('.ok').attr('href', 'step2.html');
		$('.ok').click(function() {
			$('.team-act').each(function(index, el) {
				var img = $(el).children('img').attr('src');
				var nickname = $(el).children('.country-name').text();
				var num = $(el).children('.circle').text();
				// console.log(img+'|'+nickname+'|'+num);
			});


			var arr = new Array();
			$('.team-act').each(function(index, el) {
				arr.push(
					$(el).children('.circle').text()+','+
					$(el).children('.country-name').text()+','+
					$(el).children('img').attr('src')
				)
			});
			// for(var i in arr){
			// 	console.log(arr[i]);
			// }

			localStorage.setItem('key', JSON.stringify(arr));
		});
	} else {
		$('.next-button').removeClass('ok')
	}
});

