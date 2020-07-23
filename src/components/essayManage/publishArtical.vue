<template>
  <div>
    <subBread level_1="文章管理" level_2="发表文章"></subBread>
    <div style="margin-bottom: 20px;">
    </div>
    <mavon-editor
      class="editor"
      v-model="value"
                  @save="saveDoc"
                  @change="updateDoc"
                  ref="editor"/>
  </div>

</template>

<script>
  export default {
    name: "publishArtical",
    data() {
      return {
        value: "",
        editableTabsValue: '2'
      }
    },
    methods: {
      saveDoc(markdown, html){
        console.log("markdown内容: " + markdown);
        console.log("html内容:" + html);
      },
      updateDoc(markdown, html){
        // console.log("markdown内容: " + markdown);
        // console.log("html内容:" + html);
      }
    }

  }
</script>

<style scoped>
  .editor{
    height: 800px;
  }
</style>
