$('.worksimg-ul').on('change', '.worksimg-li-must input', function (e) {
  let that = this
  let options = {
    target: that,
    maxSize: 50,
    distimg: $(that).prev('img')
  }
  utils.filetype(options, function (err, that) {
    if (err) {
      utils.bomb(err)
      return false
    }
    $(that).siblings('.delete').show()
    var val1 = $('.worksimg-ul .worksimg-li-must:eq(0)').find('input').val()
    var val2 = $('.worksimg-ul .worksimg-li-must:eq(1)').find('input').val()
    var src = $(that).siblings('img').attr('src')
    if (val1 && val2 && src === '') {
      utils.createImgli('.worksimg-ul', 10)
    }
  })
})
$('#test-btn').on('click',function () {
  let len = $('.worksimg-ul li').length
  let num = 0
  for (let i = 0; i < len; i++) {
    let inputVal = $('.worksimg-ul li').eq(i).find('input').val()
    if (inputVal !== '') {
      num++
    }
  }
  if (num < 2) {
    utils.bomb('请上传2-10个图片')
  }
})