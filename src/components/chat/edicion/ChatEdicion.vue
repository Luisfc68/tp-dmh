<template>
    <q-card rounded style='max-width: 320px;'>
        <q-card-section class='row bg-primary text-white'>
            <div class='text-h6'>Chat menu</div>
            <q-space />
            <q-btn
                v-close-popup
                flat
                round
                dense
                icon="close" 
            />
        </q-card-section>
        <q-form @submit='execute()'>
            <q-card-section class='q-mt-sm'>
                <q-space />
                <q-input
                    rounded 
                    outlined
                    label='Title'
                    bottom-slots
                    ref='title'
                    lazy-rules
                    v-model='chat.title'
                    :rules="[ val => val && val.length > 0 || 'Title required' ]"
                >
                    <template v-slot:prepend>
                        <q-icon name='title'/>
                    </template>
                    <template v-slot:append>
                        <q-icon
                            name='close'
                            class='cursor-pointer'
                            @click="chat.title = null"
                        />
                    </template>
                </q-input>
                <q-input
                    rounded 
                    type='textarea'
                    outlined
                    label='Description'
                    input-style='max-height: 50px; resize: none;'
                    bottom-slots
                    lazy-rules
                    v-model='chat.description'
                    :rules="[ val => val && val.length > 0 || 'Description required' ]"
                >
                    <template v-slot:append>
                        <q-icon
                            name='close'
                            class='cursor-pointer'
                            @click="chat.description = null"
                        />
                    </template>
                </q-input>
                <q-input
                    placeholder='Add a tag'
                    rounded 
                    outlined
                    v-model='newTag'
                >
                    <template v-slot:append>
                        <q-icon
                            name='add_box'
                            class='cursor-pointer'
                            @click="addTag()"
                        />
                    </template>
                </q-input>
                <div class='flex row'>
                    <q-chip 
                        v-for='(tag,key) in chat.tags' 
                        :key='key' 
                        removable
                        outline
                        size='md'  
                        @remove='rmTag(tag)' 
                        :label='tag' 
                        color='primary'
                        text-color='white'
                        class='truncate-chip-labels'
                        style='max-width: 105px;' 
                    />
                </div>
            </q-card-section>
            <q-btn
                style='top: -15px;'
                class='q-ml-md q-pb-none'
                color="grey"
                flat
                dense
                :icon="expandido ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click='expandido = !expandido'
                label='Mas opciones'
            />
            <q-slide-transition>
                <div v-show='expandido'>
                    <q-separator/>
                    <q-card-section>
                        <q-file 
                            outlined 
                            v-model='imagen'
                            label='Chat picture'
                            accept='image/png, image/jpeg'
                            clearable
                            style='max-width: 320px;'
                        >
                            <template v-slot:prepend>
                                <q-icon name="attach_file"/>
                            </template>
                        </q-file>
                    </q-card-section>
                </div>
            </q-slide-transition>
            <q-separator/>
            <q-card-actions class='q-pa-md' align='right'>
                <q-btn push class='q-mx-md' :icon='info.icon' :label='info.label' type='submit'/>
            </q-card-actions>
        </q-form>
    </q-card>
</template>
<script>
import chatService from 'src/services/chatService'

export default {
    name: 'ChatEdicion',
    props: ['creationMode','chatRecibido'],
    emits: ['close','created','updated'],
    data(){
        return{
            expandido: false,
            imagen: null,
            info:{
                icon: this.creationMode ? 'add_circle_outline' : 'update',
                label: this.creationMode ? 'Create' : 'Update'
            },
            chat:{
                title: this.chatRecibido ? this.chatRecibido.title : null,
                description: this.chatRecibido ? this.chatRecibido.description : null,
                tags: this.chatRecibido ? this.chatRecibido.tags : [],
                id: this.chatRecibido ? this.chatRecibido.id : null
            },
            newTag: ''
        }
    },
    methods:{
        addTag(){
            if(this.newTag !== '')
                this.chat.tags.push(this.newTag)
            this.newTag = ''
        },
        rmTag(tag){
            this.chat.tags = this.chat.tags.filter(t => t !== tag)
        },
        execute(){
            if(this.creationMode)
                this.crear()
            else
                this.actualizar()
        },
        crear(){
            chatService.create({
                title: this.chat.title.trim(),
                description: this.chat.description.trim(),
                tags: this.chat.tags,
                image: this.imagen
            })
            .then(res => {
                this.$emit('created')
                this.$emit('close')
                this.$q.notify({
                    type: 'positive',
                    message: 'Creacion exitosa'
                })
            })
            .catch(e => {
                let msg = (e.response.status === 400)? 'Datos invalidos' : e.response.data.message
                this.$q.notify({
                    type: 'negative',
                    message: msg
                })
            })
        },
        actualizar(){
            chatService.update(this.chat,this.imagen)
            .then(res => {
                this.$emit('updated')
                this.$emit('close')
                this.$q.notify({
                    type: 'positive',
                    message: 'Actualizacion exitosa'
                })
            })
            .catch(e => {
                let msg = (e.response.status === 400)? 'Datos invalidos' : e.response.data.message
                this.$q.notify({
                    type: 'negative',
                    message: msg
                })
            })
        }
    }
}
</script>