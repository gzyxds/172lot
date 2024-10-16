<template>
    <div style="text-align: center;">
      <div style="display: flex; justify-content: center; flex-wrap: wrap;">
        <div v-for="(item, index) in items" :key="index" class="card">
          <img :src="item.imgSrc" :alt="item.alt" class="image" />
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'QRCodeComponent',
    data() {
      return {
        items: [
          {
            imgSrc: './public/imges/wx.png',
            alt: '联系客服二维码',
            text: '关注我们',
          },
          {
            imgSrc: './public/imges/wx.png',
            alt: '联系客服二维码',
            text: '扫码注册',
          },
          {
            imgSrc: './public/imges/wx.png',
            alt: '二维码1',
            text: '在线领卡',
          },
          {
            imgSrc: './public/imges/wx.png',
            alt: '二维码2',
            text: '加入社群',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .card {
    text-align: center;
    margin: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
  }
  .image {
    width: 100%;
    max-width: 150px;
    height: auto;
  }
  </style>