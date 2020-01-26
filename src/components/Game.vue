<template>
  <div>
    <p>じゃんけん！</p>
    <button v-for="item in shapes" :key="item.key" @click="select(item.key)">
      {{ item.label }}
    </button>
    <p>この勝負...{{ resultText }}</p>
  </div>
</template>
<script>
export default {
  name: 'Game',
  data () {
    return {
      watashi: '',
      watashi_hand: '',
      aite: '',
      aite_hand: '',
      result: ''
    }
  },
  methods: {
    guu () {
      this.watashi = 'グー'
      this.watashi_hand = 0
      this.aite_no_te()
      this.syouhai()
    },
    tyoki () {
      this.watashi = 'チョキ'
      this.watashi_hand = 1
      this.aite_no_te()
      this.syouhai()
    },
    paa () {
      this.watashi = 'パー'
      this.watashi_hand = 2
      this.aite_no_te()
      this.syouhai()
    },
    aite_no_te () {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          this.aite = 'グー'
          break
        case 1:
          this.aite = 'チョキ'
          break
        case 2:
          this.aite = 'パー'
          break
      }
    },
    syouhai () {
      switch (((this.watashi_hand - this.aite_hand + 3)%3)){
        case 0:
          this.result = "引き分け"
          break
        case 1:
          this.result = "あなたの負け"
          break
        case 2:
          this.result = "あなたの勝ち"
          break
      }
    }
  }
}
</script>