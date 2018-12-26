<template>
  <div>
    <chat></chat>
  </div>
</template>

<script>
  import chat from '@/components/Chat.vue';

  export default {
         beforeCreate: function() {
            document.body.className = 'allies';
        },
      components: {chat}
  }
</script>