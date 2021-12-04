import { PUSH_THEME,UPDATE_THEME,REMOVE_THEME,SET_THEME } from "./types"

export default {
    [PUSH_THEME] (state, data) {
      state.themes.push(data)
    },
    [UPDATE_THEME] (state, data) {
      state.themes[data.index] = data.theme
    },
    [REMOVE_THEME] (state, index) {
      state.themes.splice(index,1)
    },
    [SET_THEME](state,theme){
      state.actualTheme = theme
    }
  }
