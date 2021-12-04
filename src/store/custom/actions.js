import { PUSH_THEME,UPDATE_THEME,REMOVE_THEME,SET_THEME,GET_ACTUAL_THEME } from "./types"
import { setCssVar } from 'quasar'

export default {
    [PUSH_THEME]: ({ commit,state }, theme) => {
      if(state.themes.some(obj => obj.title === theme.title))
        throw new Error('Nombre repetido')
      else
        commit(PUSH_THEME, theme)
    },
    [UPDATE_THEME]: ({ commit,state,getters }, theme) => {
      const index = state.themes.findIndex(t => t.title === theme.title)
      
      if(index>-1)
        commit(UPDATE_THEME, {theme,index})
      else
        throw new Error('Tema no existente')

      if(theme.title === getters[GET_ACTUAL_THEME].title){
        const editableColors = state.editableColors
        theme.colors.forEach((color,index) => setCssVar(editableColors[index],color))
      }
    },
    [REMOVE_THEME]: ({ commit,state }, theme) => {
      const index = state.themes.findIndex(t => t.title === theme.title)
      if(index>-1)
        commit(REMOVE_THEME, index)
      else
        throw new Error('Tema no existente')
    },
    [SET_THEME]: ({ commit,state }, theme) => {
      const editableColors = state.editableColors
      theme.colors.forEach((color,index) => setCssVar(editableColors[index],color))
      commit(SET_THEME,theme)
    }
  }
  