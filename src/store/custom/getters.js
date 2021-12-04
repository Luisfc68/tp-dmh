import { GET_EDITABLE_COLORS, GET_ACTUAL_COLORS, GET_THEMES,GET_ACTUAL_THEME } from "./types"
import { colors } from 'quasar'

export default {
    [GET_EDITABLE_COLORS](state){
        return state.editableColors
    },
    [GET_ACTUAL_COLORS](state){
        return state.editableColors.map(color => colors.getPaletteColor(color));
    },
    [GET_THEMES](state){
        return state.themes;
    },
    [GET_ACTUAL_THEME](state){
        return state.actualTheme
    }
}