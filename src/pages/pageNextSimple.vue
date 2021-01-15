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

</style>
