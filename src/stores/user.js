import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    nameList: [],
    passwdList: [],
    usageList: []
  }),
  actions: {
    addUser(userName, password) {
      // 添加新用户
      this.nameList.push(userName)
      this.passwdList.push(password)
      this.usageList.push(0)
    },
    checkInput(userName, password) {
      // 检查用户输入是否匹配
      let index = this.nameList.indexOf(userName)
      if ( index == -1 ) {
        return -1
      } 
      return this.passwdList[index] === password ? 1 : 0
    },
    increUsage(userName, usage) {
      //增加指定用户的使用量，不超过最大限制50
      let index = this.nameList.indexOf(userName)
      if( this.usageList[index] + usage < 50 ) {
        this.usageList[index] += usage
      } else {
        this.usageList[index] = 50
      }
    }
  }
})