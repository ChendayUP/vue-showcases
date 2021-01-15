<template>
  <div class="hello">
    <div class="page">
      <ul class="page-main">
        <li class="total">共2条</li>
        <li class="current">
          <a class="page-prev default" href=""></a>
          <div class="current-page">第1/1页</div>
          <a class="page-next" href=""></a>
        </li>
        <li class="jump">
          到
          <input type="text" class="jump-input" value="1">
          页
          <a class="jumpto" href="">跳转</a>
        </li>
        <li class="pagesize">
          <em class="tips">每页</em>
          <input type="text" class="jump-input" value="10">
          <a class="change-page-size" href=""></a>
          <em class="unit">条</em>
          <div class="page-size-con" style="display: block">
            <em>显示:</em>
            <ul>
              <li>10</li>
              <li>20</li>
              <li>30</li>
              <li>40</li>
              <li>50</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page {
    line-height: 26px;
    color: #999;
    width: 100%;
    font-size: 12px;
    margin-top: 300px;
    font-style: normal;
  }
  .page .page-main {
    float: right;
    height: 26px;
    margin-right: 10px;
    margin-top: 3px;
  }
  .page .page-main li {
    list-style: none;
  }
  .page li {
    float: left;
    position: relative;
  }
  .page .total {
    margin-right: 20px;
  }
  .page .current {
    padding: 0 26px;
    margin-right: 10px;
  }
  .page .current a {
    position: absolute;
    padding: 0;
    top: 0;
    width: 24px;
    height: 24px;
    border: 1px solid #ddd;
    display: block;
    background-color: #f4f5f9;
    background-repeat: no-repeat;
  }
  .page .page-prev.default {
    border-color: #e7e7eb;
    background-position: -43px -123px;
    cursor: default;
  }
  .page .page-prev {
    left: 0;
    border-radius: 2px 0 0 2px;
    background-image: url(../assets/icon-label-arrow.png);
    background-position: 7px -123px;
  }
  .page .current-page {
    background: #fff;
    height: 24px;
    line-height: 24px;
    text-align: center;
    padding: 0 3px;
  }
  .page .page-next.default {
    border-color: #e7e7eb;
    background-position: -43px -3px;
    cursor: default;
  }
  .page .page-next {
    right: 0;
    border-radius: 0 2px 2px 0;
    background-image: url(../assets/icon-label-arrow.png);
    background-position: 7px -3px;
  }
  .page .jump {
    padding-right: 50px;
    margin-right: 10px;
  }
  .page .jump input {
    width: 40px;
    height: 24px;
    line-height: 24px;
    background: #fff;
    border: 1px solid #ddd;
    /*margin: 0 5px;*/
    padding: 0;
    text-align: center;
    border-radius: 2px;
  }
  .page .jump .jumpto {
    width: 44px;
    height: 24px;
    line-height: 24px;
    padding: 0;
    border: 1px solid #ddd;
    background: #f4f5f9;
    color: #666;
    display: block;
    text-align: center;
    text-decoration: none;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 2px;
  }
  .page .pagesize {
    padding-right: 20px;
    /*line-height: 100%;*/
  }
  .page .pagesize .tips {
    /*position: absolute;*/
    /*top: 0;*/
    /*right: 60px;*/
    height: 24px;
    line-height: 24px;
    text-align: right;
    font-style: normal;
  }
  .page .pagesize input {
    width: 30px;
    height: 24px;
    line-height: 24px;
    background: #fff;
    border: 1px solid #ddd;
    margin-left: 5px;
    padding: 0 10px 0 5px;
    text-align: left;
    font-size: 12px;
    color: #666666;
    font-weight: normal;
    margin-right: 25px;
    /*position: absolute;*/
    /*top: 0;*/
    /*right: 30px;*/
  }
  .page .pagesize .change-page-size {
    padding: 0;
    position: absolute;
    top: 1px;
    right: 22px;
    width: 24px;
    height: 24px;
    border: 1px solid #ddd;
    /*box-sizing: content-box;*/
    /*display: block;*/
    border-radius: 0 2px 2px 0;
    background: url(../assets/icon-label-arrow.png) no-repeat 7px -93px #f4f5f9;
  }
  .page .pagesize .unit {
    width: 16px;
    text-align: right;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    font-style: normal;
  }
  .page .page-size-con {
    width: 53px;
    max-height: 192px;
    border: 1px solid #ddd;
    padding: 5px 0;
    position: absolute;
    right: 22px;
    bottom: 100%;
    background: #fff;
    margin-bottom: -1px;
    line-height: 24px;
    z-index: 999;
    text-align: left;
  }
  .page .page-size-con em {
    display: block;
    padding-left: 7px;
    color: #333;
    font-style: normal;
  }
  .page .page-size-con ul {
    max-height: 168px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .page .page-size-con li {
    float: none;
    padding-left: 7px;
    color: #666;
    cursor: pointer;
    line-height: 26px;
    height: 26px;
  }

</style>
